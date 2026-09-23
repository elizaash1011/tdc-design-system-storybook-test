# TDC Design System

A standalone, browsable component library for The Difference Card member app.

The member app is being rebuilt on Expo / React Native / TypeScript, and
engineering has selected [gluestack-ui v5](https://gluestack.io/ui/docs) as the
component foundation. **The app repository does not exist yet.** This repo exists
so the themed component set can be seen, clicked, and reviewed now — in a real
browser, rendering the real React Native components — rather than waiting for the
app to be scaffolded.

It is owned by design, not by engineering. Engineering will later copy the theme
config and `components/ui/` into the app repo (see
[docs/HANDOFF.md](docs/HANDOFF.md)).

## What's in here

| Path | What it is |
| --- | --- |
| `components/ui/` | All 58 gluestack-ui v5 components, added by the gluestack CLI. **CLI-managed** — see the warning below. |
| `components/tdc/` | Empty. Reserved for TDC's own composite components. See its [README](components/tdc/README.md). |
| `global.css` | **The theme.** Every color token, light and dark. The one file to edit when retheming. |
| `stories/tokens/` | Color and type-scale galleries, for comparing against the Figma kit. |
| `stories/ui/` | One story file per component. |
| `.storybook/` | Storybook config. `main.ts` carries a load-bearing Babel workaround — read the comment there before changing it. |
| `App.tsx` | A small smoke-test screen, not a product surface. |
| `docs/` | Token table, engineering hand-off, and the assumptions/placeholders list. |

## Prerequisites

Node 24.21.0 (see `.nvmrc`). Any Node 20+ should work, but 24.21.0 is what this
was built and verified against.

## Running it

Install once:

```bash
npm install
```

### Storybook — this is the main deliverable

```bash
npm run storybook
```

Opens on <http://localhost:6006>. The toolbar has:

- a **Theme** toggle (light / dark) which flips the `.light` / `.dark` class on
  `:root`, exactly as the app will,
- **viewport** presets for mobile (390px) and desktop (1280px),
- a **Controls** panel for changing props live.

Static build, which is what gets deployed:

```bash
npm run build-storybook
```

Output lands in `storybook-static/`.

### The Expo app target

```bash
npm run web      # ⚠️ currently broken — see below
npm run ios
npm run android
```

> **`npm run web` does not work right now, and it is not a misconfiguration in
> this repo.** NativeWind v5 is a pre-release (`5.0.0-rc.0`) and its Metro
> transform for web rewrites react-native-web's *internal* imports, creating an
> import cycle through `Animated.js` that crashes at startup with
> `Cannot read properties of undefined (reading 'default')`. A bare Expo app with
> nothing but NativeWind installed fails the same way, so there is nothing to fix
> locally — it needs an upstream release.
>
> **This does not affect Storybook.** Storybook builds with Vite, not Metro, and
> `.storybook/main.ts` scopes the same Babel transform to first-party files only,
> which avoids the cycle. Storybook is the deliverable; the Expo web target is a
> convenience that will start working when NativeWind v5 ships.
>
> `npm run ios` / `npm run android` use the native pipeline and are unaffected,
> but have **not been verified** — no simulator run was part of this pass.

Full detail in [docs/ASSUMPTIONS.md](docs/ASSUMPTIONS.md).

## Changing a token

All theme values live in **`global.css`**, stored as space-separated sRGB
channels (`23 23 23`, not `#171717`). The channel format is a NativeWind
requirement — it is what lets Tailwind wrap the variable in `rgb(var(--primary))`
and still apply opacity modifiers like `bg-primary/60`.

To change the primary color, edit it in **all four** blocks:

```css
@layer theme {
  :root          { --primary: 23 23 23; }   /* 1. light default */
  @media (prefers-color-scheme: dark) {
    :root        { --primary: 255 245 245; } /* 2. dark default (OS) */
  }
  :root.dark     { --primary: 255 245 245; } /* 3. explicit dark toggle */
  :root.light    { --primary: 23 23 23; }   /* 4. explicit light toggle */
}
```

Blocks 3 and 4 are what the Storybook toolbar and the in-app toggle activate, so
skipping them means the toggle appears to do nothing.

**Adding a new token** takes one extra step — a variable is not reachable from a
`className` until it is mapped in `@theme inline`:

```css
@theme inline {
  --color-brand-teal: rgb(var(--brand-teal));  /* now `bg-brand-teal` exists */
}
```

After any token change, regenerate the docs table:

```bash
npm run docs:tokens
```

That rewrites `docs/TOKENS.md` from `global.css`, so the two cannot drift.

## Changing a component's styling

Components are **copied into this repo**, not imported from a package — so you
edit them directly. Styling lives in a `tva()` call (Tailwind Variants), either
at the top of the component's `index.tsx` or in a sibling `styles.tsx`.

`tva()` has three parts:

- **`base`** — classes applied always
- **`variants`** — a map of prop name → value → classes
- **`defaultVariants`** — which value applies when the prop is omitted

### Worked example: Card border radius

`components/ui/card/styles.tsx` currently reads:

```ts
export const cardStyle = tva({
  base: `${baseStyle} flex-col bg-card border border-border rounded-xl shadow-sm`,
  variants: {
    size: {
      default: 'p-4 gap-6',
      sm: 'p-3 gap-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
```

To make cards less rounded, change `rounded-xl` to `rounded-md` in `base`. That
is the whole edit — every `<Card>` in every story updates on save.

To make the radius depend on `size` instead, move it out of `base` and into the
variant:

```ts
export const cardStyle = tva({
  base: `${baseStyle} flex-col bg-card border border-border shadow-sm`,
  variants: {
    size: {
      default: 'p-4 gap-6 rounded-xl',
      sm: 'p-3 gap-3 rounded-md',
    },
  },
  defaultVariants: { size: 'default' },
});
```

To add a whole new variant value, add the key and then widen the component's
prop type — `Card` hand-writes its `size` union in both `index.tsx` and
`index.web.tsx`, so both need the new value or TypeScript will reject it.

Some components (Button, Badge, Toast) have **several** `tva()` calls — one for
the root and others for child slots, using `parentVariants` to react to the
parent's variant. If changing a root variant leaves the label the wrong color,
the label has its own `tva()` that needs the same value added.

> ⚠️ **`components/ui/` is CLI-managed.** Re-running
> `npx gluestack-ui@latest add <component>` or `upgrade` can overwrite files
> there, losing hand edits. Keep customisations small and documented, put
> TDC-specific components in `components/tdc/`, and review the diff after any
> CLI run.

## Alpha components

These are marked **alpha** upstream in gluestack-ui v5. Their APIs may change
without a major version bump — use them in production designs with care. Each
one's story carries the same warning in the browser.

| Component | Notes |
| --- | --- |
| `calendar` | Large composition; day-state variants render fine on web. |
| `chat-ai` | Very large surface (~50 subcomponents), depends on the `ai` SDK. Only the presentational shell is exercised. |
| `date-time-picker` | Trigger/input styling renders; the native picker surface does not open on web. |
| `grid` | — |
| `image-viewer` | Depends on `react-native-gesture-handler`. |
| `liquid-glass` | Depends on `expo-glass-effect`, **iOS-only**; degrades to a plain view on web. |
| `skeleton` | — |
| `tabs` | Animated indicator uses Reanimated v4. |

Also platform-limited, though not alpha:

| Component | Limitation |
| --- | --- |
| `bottomsheet` | Documented React Native / Expo only upstream. |
| `link` | Documented React Native / Expo oriented upstream. |
| `status-bar` | Renders nothing on web. |
| `input-accessory-view` | iOS-only; renders nothing on web or Android. |
| `refresh-control` | No pull-to-refresh with a mouse. |
| `safe-area-view` | Insets are zero on web. |
| `keyboard-avoiding-view` | No on-screen keyboard on web. |

See [docs/ASSUMPTIONS.md](docs/ASSUMPTIONS.md) for which of these were verified
to render and which merely compile.

## Hand-off model

This repo is a **source of truth for design, not a published package.** Nothing
here is consumed via npm.

```
  tdc-design-system (this repo)                 tdc-app (engineering, future)
  ─────────────────────────────                 ─────────────────────────────
  global.css            ── copy ──▶             global.css
  components/ui/        ── copy ──▶             components/ui/
  components/tdc/       ── copy ──▶             components/tdc/
  stories/              ── stays ──             (design reference only)
```

Design owns the theme and the component set here. Engineering copies the files
listed in [docs/HANDOFF.md](docs/HANDOFF.md) into the app repo, then keeps them
in sync by re-copying when this repo changes. There is deliberately no build
step, no publish, and no version number to coordinate — the unit of exchange is
a file copy plus a diff review.

Because both repos run the same gluestack CLI, the components in each should stay
byte-identical unless someone has customised them. Any divergence should be an
intentional, reviewed edit.

## Deploying

`.github/workflows/deploy-storybook.yml` builds Storybook and publishes it to
GitHub Pages on every push to `main`.

**It is inert until GitHub Pages is enabled** for the repo with *Source: GitHub
Actions*. Note that a Pages site on a personal Free account is **public even if
the repository is private** — GitHub cannot restrict it to signed-in users.
Confirm that is acceptable before enabling.
