# Assumptions, placeholders, and known issues

Everything decided without your input, everything you need to replace, and every
upstream defect found while building this.

Ordered by how much it should affect your next decision.

---

## 1. Placeholders you need to replace

### 1.1 The entire color palette

Every color in `global.css` is a gluestack/Tailwind default. Nothing is a TDC
brand value, because none were provided.

| What | Current placeholder | Where |
| --- | --- | --- |
| `--primary` | near-black `#171717` (light) / near-white `#fff5f5` (dark) | `global.css` |
| `--secondary` | `#f5f5f5` / `#262626` | `global.css` |
| `--destructive` | `#e7000b` / `#ff6467` | `global.css` |
| All surface / border / muted / accent tokens | Tailwind neutrals | `global.css` |
| The five status tokens | Tailwind palette, 500 step (light) / 400 step (dark) | `global.css` |

Full table with light and dark values and the matching Figma variable name:
[TOKENS.md](TOKENS.md). Regenerate it after any edit with `npm run docs:tokens`.

**The `--primary` dark value is worth a look.** gluestack's default is
`255 245 245` — a faintly pink off-white, not a neutral. It is their choice, not
a mistake on our side, but it is visible on every primary button in dark mode.

### 1.2 The five status tokens — values are guesses, the names are the contract

You specified the five tokens and their color families. The families are honored;
the **exact values are placeholders** from the Tailwind default palette:

| Token | Light | Dark | Family you asked for |
| --- | --- | --- | --- |
| `--status-needs-action` | `#f59e0b` | `#fbbf24` | amber ✓ |
| `--status-in-review` | `#3b82f6` | `#60a5fa` | blue ✓ |
| `--status-paid` | `#22c55e` | `#4ade80` | green ✓ |
| `--status-resolved` | `#6b7280` | `#9ca3af` | gray ✓ |
| `--status-denied` | `#ef4444` | `#f87171` | red ✓ |

Three decisions I made here that you should confirm:

1. **I added a `-foreground` pair for each** (ten tokens, not five). A status
   color is almost always a pill or badge with a label on it, and without a
   paired text color every consumer would invent one. If you want strictly the
   five you asked for, delete the `-foreground` entries from all four blocks in
   `global.css` and from `@theme inline`.
2. **Dark mode steps one shade lighter** (the 400 step rather than 500), because
   the 500 step does not hold up against the near-black `--background`.
3. **`status-resolved` is deliberately low-salience.** "Closed, nothing left to
   do" should recede; the gray does that.

See them rendered as solid and subtle pills in Storybook under
**Tokens → Colors → Status tokens in context**.

### 1.3 Typography — no TDC typeface

Components use `font-sans`, which resolves to the Tailwind default **system font
stack**. No typeface was specified, so none was chosen.

To set one: add `--font-sans` to the `@theme` block in `global.css`, and load
the webfont for Storybook via `.storybook/preview-head.html`.

The size scale is the Tailwind v4 default and **has not been adjusted to any TDC
spec**. Measured values are in **Tokens → Typography**, which reads them off the
rendered elements rather than restating them, so it cannot drift from reality.

### 1.4 App identity is placeholder

`app.json` has `name: "TDC Design System"`, `slug: "tdc-design-system"`, and the
stock Expo icon/splash assets in `assets/`. This target exists only to prove the
toolchain bundles — it is not a product surface. Replace if you ever ship it.

---

## 2. The big one: NativeWind v5 is a pre-release, and web is broken

**`npm run web` (`expo start --web`) does not work.** This is an upstream bug,
not a misconfiguration in this repo.

### What happens

The app crashes at startup with
`Cannot read properties of undefined (reading 'default')`.

### Why

NativeWind v5 gets `className` support from a Babel plugin
(`react-native-css/babel`) that rewrites `import { View } from 'react-native'`
into `react-native-css/components/View`, a wrapper that converts `className`
into react-native-web's `style={{ $$css: true, className }}` form.

That plugin also matches react-native-web's **own internal relative imports**.
When it rewrites them, this cycle forms:

```
react-native-web/…/Animated/Animated.js
  → …/Animated/components/AnimatedFlatList.js
    → react-native-css/components/FlatList      ← rewritten
      → 'react-native'  (the barrel, aliased to react-native-web)
        → react-native-web/dist/index.js
          → Animated.js                          ← still mid-initialisation
```

`Animated.js`'s exports are still undefined when the cycle closes, so the
interop helper reading `.default` off them throws.

### How I verified it is upstream, not us

I replaced `App.tsx` with a bare `<View className="…"><Text/></View>` — no
gluestack imports at all, just `react-native` plus `global.css`. **Identical
crash.** So this is NativeWind v5 + react-native-web on Metro, with nothing of
ours involved. I also tried `react-native-css@3.0.7` (the version the gluestack
CLI pins) instead of `3.1.0-rc.0`; same crash, plus module-resolution errors.

This is consistent with the gluestack docs, which state that v5 does not support
Next.js and will "as soon as NativeWind v5 adds web support."

### Why Storybook works anyway

Storybook builds with **Vite**, not Metro. Metro applies Babel globally with no
scoping hook, but Vite lets me scope it. `.storybook/main.ts` restricts the
NativeWind Babel preset to first-party files:

```ts
overrides: [{
  test: (filename) =>
    !!filename && !filename.includes('/node_modules/') && filename.startsWith(projectRoot),
  presets: [reactNativeCssBabelPreset],
}]
```

So `components/ui/` and `stories/` get `className` support, react-native-web is
left alone, and the cycle never forms. **All 280 stories render.** That comment
in `main.ts` is load-bearing — don't remove the `overrides` wrapper.

### What I did not do

I did **not** downgrade to gluestack-ui v4 / NativeWind v4 (stable, Tailwind v3,
and the combination Storybook officially documents). You specified gluestack-ui
v5, and v5's CLI installs NativeWind v5 regardless of the `--nativewind` flag —
so honoring "v5" means accepting the pre-release. Storybook works, so the
deliverable is intact; iOS/Android use the native pipeline and are unaffected.

**If Expo web matters to you, that is the decision to revisit** — it would mean
moving to gluestack-ui v4, which is a different component API (v5 uses
shadcn-style `variant="default" | "destructive" | …`; v4 used
`variant="solid" | "outline"` with `action` and `size` props). Worth raising
with engineering before they commit.

---

## 3. Version decisions

### 3.1 Node was installed to run this

**There was no Node.js on this machine** — no `node`, no Homebrew, no nvm/fnm/
volta. Nothing in the build steps was runnable.

I downloaded Node **24.21.0** (current LTS, "Krypton") for darwin-arm64 from
`nodejs.org`, verified it against the official `SHASUMS256.txt`, and extracted
it to `~/.local/node-runtime/`. It is **not** on your `PATH` — it was used for
this session only. To use it yourself:

```bash
export PATH="$HOME/.local/node-runtime/node-v24.21.0-darwin-arm64/bin:$PATH"
```

For a permanent setup, install Node properly (e.g. via
[nvm](https://github.com/nvm-sh/nvm) or the official installer) and delete
`~/.local/node-runtime`. `.nvmrc` pins `24.21.0`.

### 3.2 GitHub CLI is not installed, so the repo was not created

`gh` is not on this machine, so I could not create the GitHub repo or push.
What exists: a local git repository with commits, on branch `main`. Nothing has
left your machine.

To finish, either install `gh` and run:

```bash
gh repo create tdc-design-system --private --source=. --remote=origin --push
```

or create the repo in the browser and paste the remote URL to me, and I'll wire
it up.

Git identity used for the commits: `elizaash1011 <eash@differencecard.com>`
(already configured globally).

### 3.3 Everything is pinned exactly

You asked for exact pins on expo, nativewind, tailwindcss, gluestack, and
storybook. I pinned **all 45 dependencies** exactly — no `^`, no `~`, including
the `expo-*` packages Expo normally range-pins. For a design system whose whole
job is to look identical everywhere, a float is a liability.

The trade-off: `npx expo install <pkg>` may later want to widen a range back to
`~`. If it does, re-pin.

Key versions:

| Package | Version |
| --- | --- |
| `expo` | `57.0.24` |
| `react` / `react-native` | `19.2.3` / `0.86.3` |
| `react-native-web` | `0.21.2` |
| `nativewind` | `5.0.0-rc.0` |
| `react-native-css` | `3.1.0-rc.0` |
| `tailwindcss` / `@tailwindcss/vite` / `@tailwindcss/postcss` | `4.3.3` |
| `@gluestack-ui/core` / `@gluestack-ui/utils` | `5.0.15` / `5.0.6` |
| `storybook` + `@storybook/*` | `10.6.0` |
| `vite` | `8.3.0` |
| `typescript` | `6.0.3` |
| gluestack-ui CLI (not a dependency) | `5.0.3` |

### 3.4 Packages I had to add that the CLI should have

- **`babel-preset-expo@57.0.12`** — the gluestack CLI writes a `babel.config.js`
  that requires it, but Expo SDK 57's blank template ships without a babel
  config and keeps the preset nested under `node_modules/expo/`. Bundling failed
  with `Cannot find module 'babel-preset-expo'` until it was a direct devDep.
- **`react-native-css@3.1.0-rc.0`** — the CLI pinned `^3.0.7`, but
  `nativewind@5.0.0-rc.0` requires exactly `3.1.0-rc.0`. The CLI left the
  project in a peer-invalid state.
- **Nine component dependencies** — `add --all` reported success but installed
  none of what the components import: `@gorhom/bottom-sheet`,
  `@react-native-community/datetimepicker`, `expo-document-picker`,
  `expo-glass-effect`, `expo-image-picker`, `react-native-gesture-handler`,
  `react-native-keyboard-controller`, `lucide-react-native`, `@legendapp/list`,
  `react-native-markdown-display`, `ai`. Without these, six components fail to
  resolve — including `accordion`, which most apps will use.
- **`react-dom`, `react-native-web`, `@expo/metro-runtime`** — needed for any
  web target.

`.npmrc` carries `legacy-peer-deps=true` (written by the CLI, and required:
`@legendapp/motion` declares `nativewind: ">=4.0.0"`, which a `5.0.0-rc.0`
prerelease does not satisfy under semver).

---

## 4. Where the docs contradicted your instructions

### 4.1 "gluestack-ui v5 with NativeWind" — the `--nativewind` flag is a no-op

The CLI documents `--nativewind` as "Use NativeWind v4 (Tailwind v3)". I ran
`init --nativewind` explicitly. The CLI **ignored it** and installed
`nativewind@^5.0.0-rc.0` + `tailwindcss@^4.3.3`, logging
"Written metro.config.js for NativeWind v5". There is no way to get the v4
engine out of CLI 5.0.3.

**Resolution:** accepted NativeWind v5, since you specified gluestack-ui v5 and
v5 only ships that engine. This is the root cause of the Expo-web breakage in
§2.

### 4.2 "Storybook: web, using the React Native Web integration"

Done, and it works — but not the way Storybook's docs describe. Their NativeWind
guidance is `jsxImportSource: 'nativewind'`, which is a **NativeWind v4**
mechanism; v5 has no `jsx-runtime` export, so that option does nothing.

**Resolution:** used the `react-native-css/babel` preset scoped to first-party
files, plus `@tailwindcss/vite` to compile `global.css`. Detail in §2.

### 4.3 "Install ALL available components, including ones marked alpha"

Done — all 58. Note the docs page listing components says "30+ responsive
components"; `add --all` actually installs 58, because the list includes thin
react-native primitive wrappers (`view`, `flat-list`, `scroll-view`,
`status-bar`, …) that the marketing page doesn't count.

### 4.4 Alpha list

The docs mark eight components alpha: `calendar`, `chat-ai`,
`date-time-picker`, `grid`, `image-viewer`, `liquid-glass`, `skeleton`, `tabs`.
Each one's story carries an on-screen warning. `bottomsheet` and `link` are
documented as React Native / Expo only (not alpha).

### 4.5 One token I added without being asked

`--text-2xs` in `global.css`. gluestack maps `<Text size="2xs">` to the class
`text-2xs`, but **neither Tailwind v4 nor NativeWind defines that step**, so the
class emitted no CSS and `size="2xs"` rendered at the inherited size —
identical to `size="md"` — while TypeScript still advertised `"2xs"` as valid.
Seven component files reference the class.

I defined it as `0.625rem / 0.875rem`, continuing the scale below `xs`
(`0.75rem / 1rem`). **That specific value is a guess**; adjust to the TDC scale.
Verified before/after in **Tokens → Typography**: it now measures 10px, below
`xs` at 12px.

---

## 5. Upstream bugs found in gluestack-ui v5.0.15

Found while building the stories. All are upstream — none introduced here.

### 5.1 `CheckboxGroup` throws on web — worth reporting upstream

`@gluestack-ui/core`'s `CheckboxGroup` publishes its context as
`{ state: { ...formControlContext, ...state } }` — a **new object**. On web,
`useCheckboxGroupItem` comes from `@react-aria/checkbox`, which looks group data
up in a WeakMap keyed by the **identity** of the state object that
`useCheckboxGroup` registered. The spread copy isn't that object, so the lookup
returns `undefined` and destructuring `name` off it throws.

Native is unaffected — `aria/index.js` exports gluestack's own
`useCheckboxGroupItem`, which never consults that WeakMap. Only
`aria/index.web.js` re-exports react-aria's. That asymmetry is why it shipped.

Not fixable from this repo (the defect is inside `@gluestack-ui/core`). The
Checkbox group stories reproduce the layout and group-level states with plain
`Checkbox`es and explain the bug on screen.

### 5.2 Hardcoded non-theme colors — these will survive your rebrand

Components contain raw Tailwind colors that **will not respond to the theme**.
When you replace the placeholder palette, these will not follow:

| Class | Components |
| --- | --- |
| `bg-yellow-500` (11×) | `actionsheet`, `fab`, `form-control`, `heading`, `link`, `menu`, `text`, `tooltip` — the `highlight` text variant |
| `text-white` (14×) | `badge`, `button`, `chat-ai`, `image-viewer` |
| `bg-black` (8×) | `alert-dialog`, `bottomsheet`, `date-time-picker`, `image-viewer` — backdrops |
| `bg-white` (5×) | `image-viewer`, `slider` |
| `bg-green-500` | `avatar` — `AvatarBadge` |
| `bg-slate-900`, `bg-slate-800` | `chat-ai` — code blocks |

Left as-is to keep `components/ui/` faithful to CLI output. If strict token
purity matters, these are the edits to make — and they will need re-applying
after any `gluestack-ui add`/`upgrade`.

### 5.3 `Calendar`'s `size` variant is unreachable

`calendar/styles.tsx` declares `size: sm | md | lg` with
`defaultVariants: { size: 'md' }`, but `CalendarRoot` calls
`calendarStyle({ class: className })` and never passes `size`, and `size` is
absent from `ICalendarProps`. The variant cannot be reached. The Sizes story
applies the variant's own classes via `className` and says so.

### 5.4 `Calendar`'s `markers` prop silently fails west of UTC

`CalendarWeek` looks markers up by `day.date.toISOString().split('T')[0]` (UTC)
while `getDayState` keys them with local `format(date, 'yyyy-MM-dd')`. Grid
dates are local midnight, so US-timezone viewers get a shifted key and markers
never match. The story uses the `renderDay` prop instead.

### 5.5 `DateTimePicker`'s web build ignores its own API

`index.web.tsx` renders a hardcoded bordered input and **drops `children`**. It
accepts no `size`/`variant` and never mounts `DateTimePickerTrigger`. Since the
Vite resolver prefers `.web.tsx`, the Sizes/Variants stories render identical
fallback inputs rather than the styled trigger axis. TypeScript still resolves
`index.tsx`, so the composition typechecks against an API the web build doesn't
honor. Its dropdown also passes `selected`/`onSelect`/`initialDate` to
`Calendar`, which wants `value`/`onValueChange`/`initialMonth`.

### 5.6 `chat-ai` defects

- `MessageBranchContent` (`message.tsx:384`) destructures
  `{ currentBranch, setBranches }` but its effect reads `branches.length`, an
  **undeclared binding** — a `ReferenceError` on render. All `MessageBranch*`
  stories skipped.
- `ModelSelectorItem` (`model-selector.tsx:199`) has `h-4 w-4` in its base
  className, collapsing each row to 16×16 and clipping its contents. It also
  leaves a `console.log(children)` in.
- `FileTreeActions` is exported but never wired into
  `FileTreeFolder`/`FileTreeFile` — there is no slot to render it in.
- `BlankProvider` is not re-exported from the barrel, so `Message` cannot be
  mounted standalone.

### 5.7 `link` token bugs

- `data-[disabled=true]:opacity-4` — almost certainly meant `opacity-40`. The
  disabled link is very nearly invisible.
- `data-[focus-visible=true]:web:ring-indicator-primary` references a
  `ring-indicator-primary` utility that **does not exist** in `global.css`'s
  `@theme inline`, so the focus ring never renders.

### 5.8 `components/ui/` does not typecheck — ~58 pre-existing errors

`npm run typecheck` reports about 58 errors, **all inside `components/ui/`**, all
upstream type defects against Expo SDK 57's React Native types. First-party code
(`stories/`, `.storybook/`, `App.tsx`, `scripts/`) is clean.

| Component | Errors |
| --- | --- |
| `chat-ai` | 33 |
| `bottomsheet` | 11 |
| `checkbox` | 4 |
| `date-time-picker` | 3 |
| `modal`, `menu` | 2 each |
| `badge`, `avatar`, `alert-dialog` | 1 each |

I left `typecheck` covering everything rather than excluding `components/ui/`,
because engineering will hit exactly these errors on copy and should see them.
Deleting the components you don't ship removes ~80% (`chat-ai` +
`bottomsheet` alone are 44 of 58).

`tsconfig.json` excludes `**/USAGE_EXAMPLE.tsx` — gluestack demo files that
don't compile and that nothing imports.

### 5.9 `Box` cannot be used as `ListEmptyComponent` on web

`VirtualizedList` clones `ListEmptyComponent` with
`style: [inversionStyle, element.props.style]` — an **array**. On web gluestack's
`Box` renders a raw `<div>`, so React DOM attempts `div.style[0] = …` and throws
*"Failed to set an indexed property [0] on 'CSSStyleDeclaration'"*. This broke
the `Empty` story for all three list components until they were rerooted on
`View`, which flattens array styles. `ListHeaderComponent` /
`ListFooterComponent` are unaffected — their array style lands on the wrapping
cell, not the caller's element.

Worth knowing in the app repo: any empty-state passed to a list must be rooted
in `View`, not `Box`.

---

## 6. What was verified, and what was not

### Verified

- **All 280 stories across 60 titles render with no console errors**, checked
  against the **production build** (`storybook-static`) by loading each story in
  an iframe and inspecting Storybook's error overlay plus the rendered root.
  Everything flagged on the first pass was retested with a longer settle window;
  the final result is zero failures.
- **Light and dark both work.** Verified the toolbar toggle sets `.light` /
  `.dark` on `<html>` and that `--primary` resolves to `23 23 23` in light and
  `255 245 245` in dark, with the story wrapper painting `#ffffff` / `#0a0a0a`.
- `npm run build-storybook` succeeds; output is 12MB with **relative** asset
  paths, so it works under a GitHub Pages subpath with no extra config.
- `npx tsc --noEmit` is clean for all first-party code.
- The web export pipeline compiles and Tailwind emits the theme: `:root`,
  `:root.dark` and `:root.light` blocks all present in the built CSS.

### Not verified

- **iOS and Android were never run.** No simulator launch was part of this pass.
  The native pipeline should be unaffected by the web bug in §2, but that is
  reasoning, not evidence.
- **Nothing is deployed.** GitHub Pages is off, no repo exists, no remote is
  configured. Pending your go-ahead — see §7.
- **`npm run web` is broken** (§2) — confirmed broken rather than verified
  working.
- **Interactive behaviour was spot-checked, not exercised.** Stories were
  verified to *render*; I did not click through every overlay, drag every
  slider, or tab through every focus order.
- **Components whose behaviour is native-only** render a documented
  `<Note>` rather than the real thing: `status-bar` (renders nothing on web),
  `input-accessory-view` (iOS-only), `refresh-control` (no mouse pull gesture),
  `safe-area-view` (zero insets), `keyboard-avoiding-view` (no keyboard),
  `bottomsheet` (gesture-handler dependent), `liquid-glass` (iOS-only effect,
  falls back to a plain view), `date-time-picker` (native picker doesn't open).

---

## 7. Two things waiting on you

### 7.1 GitHub Pages — confirm before enabling, because the site is public

The workflow at `.github/workflows/deploy-storybook.yml` builds Storybook and
deploys to Pages on every push to `main`. **It is inert** until Pages is enabled
for the repo with *Source: GitHub Actions* — until then the deploy job fails at
`configure-pages` and nothing is published. No deploy has happened.

The thing to weigh: on a personal (Free) account, **a Pages site is public even
when the repository is private.** GitHub does not offer access-restricted Pages
outside paid org plans. So enabling this puts the component gallery — and the
TDC status taxonomy, terminology, and eventually the brand palette — on a public
URL at `https://<your-username>.github.io/tdc-design-system/`.

Nothing there is a credential, and a component gallery is low-risk. But it is a
public artifact on a personal account, so it is your call. Alternatives if you'd
rather not: Cloudflare Pages / Netlify / Vercel with access control, or just
sharing the `storybook-static/` folder.

### 7.2 The repo doesn't exist yet

`gh` isn't installed (§3.2). Install it and run the command there, or paste a
remote URL and I'll push.

---

## 8. Smaller decisions I made without asking

- **Scaffolded in place.** `create-expo-app` refuses to write into a directory
  containing `.claude/`, so I scaffolded into a temp directory and copied the
  files in. Your `.claude/settings.local.json` was never touched, and it is now
  gitignored as per-machine config.
- **`--no-agents-md`**, so the Expo template didn't write its own `CLAUDE.md` /
  `.claude/settings.json` over anything.
- **Story conventions.** One file per component at
  `stories/ui/<PascalCase>.stories.tsx`, a `Default` story driven by
  `args`/`argTypes` for the Controls panel, then one story per variant axis with
  every value labelled. Shared `Labeled` / `Showcase` / `Section` / `Note`
  helpers live in `stories/helpers.tsx`.
- **Stories use theme tokens only** — no hex, no non-theme Tailwind colors — so
  every story re-renders correctly when the palette is replaced. (The exceptions
  are inside the components themselves; §5.2.)
- **No network images.** `Image`, `ImageBackground`, `AvatarImage` and
  `ImageViewer` use short inline `data:` URIs, so the gallery works offline and
  the Pages build has no external requests.
- **Sidebar order** is `Tokens`, `UI`, `TDC` — tokens first, since that's the
  Figma comparison surface.
- **Viewport presets** are exactly the two you asked for, mobile 390px and
  desktop 1280px, with mobile as the default. The two Tokens stories override
  to desktop because their tables need the width.
- **`reactDocgen: 'react-docgen'`** instead of the TypeScript-aware parser,
  which chokes on the react-native type graph and is very slow over 58
  components. Prop tables still populate; some inferred types are less precise.
- **Where a component's public type forbade something its runtime supports**, I
  followed the type. `Icon` accepts numeric sizes at runtime but its wrapper
  narrows the prop to the six variant names, so no numeric-size story — just a
  comment saying how to widen it.
- **`docs/TOKENS.md` is generated**, not hand-written (`npm run docs:tokens`),
  so the table cannot drift from `global.css`. The Tokens stories likewise read
  computed values from the DOM rather than restating them.
- **Overlay stories ship an initially-open variant**, so modals, drawers,
  popovers and tooltips can be compared against Figma without clicking.
- **`main` is the branch name.**
- **MIT `LICENSE`** came from the Expo template. Untouched — change it if a
  TDC-internal repo shouldn't carry it.
