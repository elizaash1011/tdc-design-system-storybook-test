#!/usr/bin/env node
/**
 * Regenerates docs/TOKENS.md from global.css.
 *
 * The token table is the artifact used to mirror tokens into the Figma kit, so
 * it must not be able to disagree with the theme. Generating it means editing
 * global.css and re-running `npm run docs:tokens` is the only way to change it.
 *
 * Usage: npm run docs:tokens
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const rawCss = readFileSync(join(root, 'global.css'), 'utf8');

// Strip /* ... */ comments before parsing. global.css documents itself heavily
// and mentions selectors and at-rules in prose ("`@theme inline` at the bottom
// is what turns..."), so searching the raw text matches the comment instead of
// the real block. Newlines are preserved so any reported offsets stay sane.
const css = rawCss.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));

/** Extract a balanced `{...}` block that starts at/after `fromIndex`. */
function blockAt(source, fromIndex) {
  const start = source.indexOf('{', fromIndex);
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return { body: source.slice(start + 1, i), end: i };
    }
  }
  return null;
}

/** All `--name: value;` declarations directly inside a block body. */
function declarations(body) {
  const out = new Map();
  for (const m of body.matchAll(/(--[a-zA-Z0-9-]+)\s*:\s*([^;}]+);/g)) {
    out.set(m[1], m[2].trim());
  }
  return out;
}

/**
 * Finds a selector's block. Selectors repeat in this file (`:root` appears both
 * at top level and inside the dark media query), so `occurrence` disambiguates.
 */
function selectorBlock(selector, occurrence = 0) {
  const re = new RegExp(`(^|[\\s{}])${selector.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}\\s*\\{`, 'gm');
  const matches = [...css.matchAll(re)];
  const match = matches[occurrence];
  if (!match) return new Map();
  const block = blockAt(css, match.index);
  return block ? declarations(block.body) : new Map();
}

// `:root` occurrence 0 is the light block; occurrence 1 is inside
// @media (prefers-color-scheme: dark).
const light = selectorBlock(':root', 0);
const darkExplicit = selectorBlock(':root\\.dark');
const lightExplicit = selectorBlock(':root\\.light');

// @theme inline maps a raw variable to its Tailwind utility stem.
const themeInlineIdx = css.indexOf('@theme inline');
const themeInline =
  themeInlineIdx === -1 ? new Map() : declarations(blockAt(css, themeInlineIdx).body);

/** `--color-status-paid: rgb(var(--status-paid))` -> raw `--status-paid` => stem `status-paid` */
const utilityFor = new Map();
for (const [key, value] of themeInline) {
  const ref = value.match(/var\((--[a-zA-Z0-9-]+)\)/);
  if (ref && key.startsWith('--color-')) {
    utilityFor.set(ref[1], key.replace(/^--color-/, ''));
  }
}

function toHex(raw) {
  const parts = raw.split(/[\s,]+/).filter(Boolean).map(Number);
  if (parts.length < 3 || parts.some((n) => !Number.isFinite(n))) return null;
  return (
    '#' +
    parts
      .slice(0, 3)
      .map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0'))
      .join('')
  );
}

const GROUPS = [
  { title: 'Surface', match: (n) => ['--background', '--foreground', '--card', '--popover', '--popover-foreground'].includes(n) },
  { title: 'Brand', match: (n) => ['--primary', '--primary-foreground', '--secondary', '--secondary-foreground'].includes(n) },
  { title: 'Muted & accent', match: (n) => ['--muted', '--muted-foreground', '--accent', '--accent-foreground'].includes(n) },
  { title: 'Feedback', match: (n) => n === '--destructive' },
  { title: 'Border & form', match: (n) => ['--border', '--input', '--ring'].includes(n) },
  { title: 'Status (TDC addition)', match: (n) => n.startsWith('--status-') },
];

const colorNames = [...light.keys()];
const grouped = GROUPS.map((g) => ({ title: g.title, names: colorNames.filter(g.match) }));
const ungrouped = colorNames.filter((n) => !GROUPS.some((g) => g.match(n)));
if (ungrouped.length) grouped.push({ title: 'Other', names: ungrouped });

const lines = [];
lines.push('# Theme tokens');
lines.push('');
lines.push('<!-- GENERATED FILE — do not edit by hand.');
lines.push('     Source: global.css. Regenerate with `npm run docs:tokens`. -->');
lines.push('');
lines.push(
  'Every value below is a **placeholder** taken from the gluestack / Tailwind defaults.'
);
lines.push(
  'Replace them with TDC brand values in `global.css`, keeping the variable names unchanged.'
);
lines.push('');
lines.push('## How to read this');
lines.push('');
lines.push(
  '- **Token** is the CSS variable as declared in `global.css`. Values are stored as space-separated sRGB channels so Tailwind can apply opacity modifiers (`bg-primary/60`).'
);
lines.push(
  '- **Utility** is the Tailwind class stem, e.g. `primary` is usable as `bg-primary`, `text-primary`, `border-primary`. A token with no utility is not reachable from a `className`.'
);
lines.push(
  '- **Light** / **Dark** are the current placeholder values. Dark is read from the `:root.dark` block, which is what the Storybook toolbar and the in-app toggle activate.'
);
lines.push(
  '- **Figma variable** is intentionally the same string as the token without the leading `--`. Name the Figma variable exactly this so the two kits can be diffed by name.'
);
lines.push('');
lines.push(
  'There are four blocks in `global.css` that must stay in sync: `:root` (light), the `prefers-color-scheme: dark` media query, `:root.dark`, and `:root.light`. Adding a token to one means adding it to all four.'
);
lines.push('');

for (const group of grouped) {
  if (!group.names.length) continue;
  lines.push(`## ${group.title}`);
  lines.push('');
  lines.push('| Token | Utility | Light | Dark | Figma variable |');
  lines.push('| --- | --- | --- | --- | --- |');
  for (const name of group.names) {
    const l = lightExplicit.get(name) ?? light.get(name) ?? '';
    const d = darkExplicit.get(name) ?? '';
    const lHex = toHex(l);
    const dHex = toHex(d);
    const utility = utilityFor.get(name);
    lines.push(
      `| \`${name}\` | ${utility ? `\`${utility}\`` : '—'} | ${
        lHex ? `\`${lHex}\`<br>\`${l}\`` : '—'
      } | ${dHex ? `\`${dHex}\`<br>\`${d}\`` : '—'} | \`${name.replace(/^--/, '')}\` |`
    );
  }
  lines.push('');
}

// Type scale, read from the @theme block plus Tailwind's defaults.
const themeIdx = css.search(/@theme\s*\{/);
const themeBlock = themeIdx === -1 ? new Map() : declarations(blockAt(css, themeIdx).body);

lines.push('## Type scale');
lines.push('');
lines.push(
  'Sizes come from the Tailwind v4 default scale except where overridden below. `Tokens/Typography` in Storybook measures these from the rendered element, so treat that page as the source of truth if these ever disagree.'
);
lines.push('');
lines.push('| `size` prop | Class | Font size | Line height | Source |');
lines.push('| --- | --- | --- | --- | --- |');
const TYPE_SCALE = [
  ['2xs', 'text-2xs', '0.625rem (10px)', '0.875rem (14px)', 'Local override in `global.css`'],
  ['xs', 'text-xs', '0.75rem (12px)', '1rem (16px)', 'Tailwind default'],
  ['sm', 'text-sm', '0.875rem (14px)', '1.25rem (20px)', 'Tailwind default'],
  ['md', 'text-base', '1rem (16px)', '1.5rem (24px)', 'Tailwind default'],
  ['lg', 'text-lg', '1.125rem (18px)', '1.75rem (28px)', 'Tailwind default'],
  ['xl', 'text-xl', '1.25rem (20px)', '1.75rem (28px)', 'Tailwind default'],
  ['2xl', 'text-2xl', '1.5rem (24px)', '2rem (32px)', 'Tailwind default'],
  ['3xl', 'text-3xl', '1.875rem (30px)', '2.25rem (36px)', 'Tailwind default'],
  ['4xl', 'text-4xl', '2.25rem (36px)', '2.5rem (40px)', 'Tailwind default'],
  ['5xl', 'text-5xl', '3rem (48px)', '1 (48px)', 'Tailwind default'],
  ['6xl', 'text-6xl', '3.75rem (60px)', '1 (60px)', 'Tailwind default'],
];
for (const row of TYPE_SCALE) {
  lines.push(`| \`${row[0]}\` | \`${row[1]}\` | ${row[2]} | ${row[3]} | ${row[4]} |`);
}
lines.push('');
if (themeBlock.has('--text-2xs')) {
  lines.push(
    '> `--text-2xs` is defined locally because gluestack-ui v5 emits the class `text-2xs` for `size="2xs"` but neither Tailwind v4 nor NativeWind ships that step. Without the override the size silently falls back to the inherited value. See `docs/ASSUMPTIONS.md`.'
  );
  lines.push('');
}

lines.push('## Font family');
lines.push('');
lines.push(
  'Components use `font-sans`, which resolves to the Tailwind default system font stack. **This is a placeholder** — no TDC typeface has been specified. To set one, add a `--font-sans` override to the `@theme` block in `global.css` and load the webfont in Storybook via `.storybook/preview-head.html`.'
);
lines.push('');

writeFileSync(join(root, 'docs', 'TOKENS.md'), lines.join('\n'));
console.log(
  `docs/TOKENS.md written — ${colorNames.length} color tokens across ${
    grouped.filter((g) => g.names.length).length
  } groups.`
);
