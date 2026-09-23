# Theme tokens

<!-- GENERATED FILE — do not edit by hand.
     Source: global.css. Regenerate with `npm run docs:tokens`. -->

Every value below is a **placeholder** taken from the gluestack / Tailwind defaults.
Replace them with TDC brand values in `global.css`, keeping the variable names unchanged.

## How to read this

- **Token** is the CSS variable as declared in `global.css`. Values are stored as space-separated sRGB channels so Tailwind can apply opacity modifiers (`bg-primary/60`).
- **Utility** is the Tailwind class stem, e.g. `primary` is usable as `bg-primary`, `text-primary`, `border-primary`. A token with no utility is not reachable from a `className`.
- **Light** / **Dark** are the current placeholder values. Dark is read from the `:root.dark` block, which is what the Storybook toolbar and the in-app toggle activate.
- **Figma variable** is intentionally the same string as the token without the leading `--`. Name the Figma variable exactly this so the two kits can be diffed by name.

There are four blocks in `global.css` that must stay in sync: `:root` (light), the `prefers-color-scheme: dark` media query, `:root.dark`, and `:root.light`. Adding a token to one means adding it to all four.

## Surface

| Token | Utility | Light | Dark | Figma variable |
| --- | --- | --- | --- | --- |
| `--card` | `card` | `#ffffff`<br>`255 255 255` | `#171717`<br>`23 23 23` | `card` |
| `--background` | `background` | `#ffffff`<br>`255 255 255` | `#0a0a0a`<br>`10 10 10` | `background` |
| `--popover` | `popover` | `#ffffff`<br>`255 255 255` | `#171717`<br>`23 23 23` | `popover` |
| `--popover-foreground` | `popover-foreground` | `#0a0a0a`<br>`10 10 10` | `#fafafa`<br>`250 250 250` | `popover-foreground` |
| `--foreground` | `foreground` | `#0a0a0a`<br>`10 10 10` | `#fafafa`<br>`250 250 250` | `foreground` |

## Brand

| Token | Utility | Light | Dark | Figma variable |
| --- | --- | --- | --- | --- |
| `--primary` | `primary` | `#171717`<br>`23 23 23` | `#fff5f5`<br>`255 245 245` | `primary` |
| `--primary-foreground` | `primary-foreground` | `#fafafa`<br>`250 250 250` | `#171717`<br>`23 23 23` | `primary-foreground` |
| `--secondary` | `secondary` | `#f5f5f5`<br>`245 245 245` | `#262626`<br>`38 38 38` | `secondary` |
| `--secondary-foreground` | `secondary-foreground` | `#171717`<br>`23 23 23` | `#fafafa`<br>`250 250 250` | `secondary-foreground` |

## Muted & accent

| Token | Utility | Light | Dark | Figma variable |
| --- | --- | --- | --- | --- |
| `--muted` | `muted` | `#f5f5f5`<br>`245 245 245` | `#262626`<br>`38 38 38` | `muted` |
| `--muted-foreground` | `muted-foreground` | `#737373`<br>`115 115 115` | `#a1a1a1`<br>`161 161 161` | `muted-foreground` |
| `--accent` | `accent` | `#f7f7f7`<br>`247 247 247` | `#262626`<br>`38 38 38` | `accent` |
| `--accent-foreground` | `accent-foreground` | `#343434`<br>`52 52 52` | `#fafafa`<br>`250 250 250` | `accent-foreground` |

## Feedback

| Token | Utility | Light | Dark | Figma variable |
| --- | --- | --- | --- | --- |
| `--destructive` | `destructive` | `#e7000b`<br>`231 0 11` | `#ff6467`<br>`255 100 103` | `destructive` |

## Border & form

| Token | Utility | Light | Dark | Figma variable |
| --- | --- | --- | --- | --- |
| `--border` | `border` | `#e5e5e5`<br>`229 229 229` | `#2e2e2e`<br>`46 46 46` | `border` |
| `--input` | `input` | `#e5e5e5`<br>`229 229 229` | `#2e2e2e`<br>`46 46 46` | `input` |
| `--ring` | `ring` | `#d4d4d4`<br>`212 212 212` | `#737373`<br>`115 115 115` | `ring` |

## Status (TDC addition)

| Token | Utility | Light | Dark | Figma variable |
| --- | --- | --- | --- | --- |
| `--status-needs-action` | `status-needs-action` | `#f59e0b`<br>`245 158 11` | `#fbbf24`<br>`251 191 36` | `status-needs-action` |
| `--status-needs-action-foreground` | `status-needs-action-foreground` | `#451a03`<br>`69 26 3` | `#451a03`<br>`69 26 3` | `status-needs-action-foreground` |
| `--status-in-review` | `status-in-review` | `#3b82f6`<br>`59 130 246` | `#60a5fa`<br>`96 165 250` | `status-in-review` |
| `--status-in-review-foreground` | `status-in-review-foreground` | `#ffffff`<br>`255 255 255` | `#0c1a33`<br>`12 26 51` | `status-in-review-foreground` |
| `--status-paid` | `status-paid` | `#22c55e`<br>`34 197 94` | `#4ade80`<br>`74 222 128` | `status-paid` |
| `--status-paid-foreground` | `status-paid-foreground` | `#ffffff`<br>`255 255 255` | `#052e16`<br>`5 46 22` | `status-paid-foreground` |
| `--status-resolved` | `status-resolved` | `#6b7280`<br>`107 114 128` | `#9ca3af`<br>`156 163 175` | `status-resolved` |
| `--status-resolved-foreground` | `status-resolved-foreground` | `#ffffff`<br>`255 255 255` | `#111827`<br>`17 24 39` | `status-resolved-foreground` |
| `--status-denied` | `status-denied` | `#ef4444`<br>`239 68 68` | `#f87171`<br>`248 113 113` | `status-denied` |
| `--status-denied-foreground` | `status-denied-foreground` | `#ffffff`<br>`255 255 255` | `#450a0a`<br>`69 10 10` | `status-denied-foreground` |

## Type scale

Sizes come from the Tailwind v4 default scale except where overridden below. `Tokens/Typography` in Storybook measures these from the rendered element, so treat that page as the source of truth if these ever disagree.

| `size` prop | Class | Font size | Line height | Source |
| --- | --- | --- | --- | --- |
| `2xs` | `text-2xs` | 0.625rem (10px) | 0.875rem (14px) | Local override in `global.css` |
| `xs` | `text-xs` | 0.75rem (12px) | 1rem (16px) | Tailwind default |
| `sm` | `text-sm` | 0.875rem (14px) | 1.25rem (20px) | Tailwind default |
| `md` | `text-base` | 1rem (16px) | 1.5rem (24px) | Tailwind default |
| `lg` | `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Tailwind default |
| `xl` | `text-xl` | 1.25rem (20px) | 1.75rem (28px) | Tailwind default |
| `2xl` | `text-2xl` | 1.5rem (24px) | 2rem (32px) | Tailwind default |
| `3xl` | `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Tailwind default |
| `4xl` | `text-4xl` | 2.25rem (36px) | 2.5rem (40px) | Tailwind default |
| `5xl` | `text-5xl` | 3rem (48px) | 1 (48px) | Tailwind default |
| `6xl` | `text-6xl` | 3.75rem (60px) | 1 (60px) | Tailwind default |

> `--text-2xs` is defined locally because gluestack-ui v5 emits the class `text-2xs` for `size="2xs"` but neither Tailwind v4 nor NativeWind ships that step. Without the override the size silently falls back to the inherited value. See `docs/ASSUMPTIONS.md`.

## Font family

Components use `font-sans`, which resolves to the Tailwind default system font stack. **This is a placeholder** — no TDC typeface has been specified. To set one, add a `--font-sans` override to the `@theme` block in `global.css` and load the webfont in Storybook via `.storybook/preview-head.html`.
