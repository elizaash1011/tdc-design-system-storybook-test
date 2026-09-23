# Engineering hand-off

How to bring the theme and components from this repo into the TDC app repo.

This is a **file copy**, not a package install. Nothing here is published to npm.
There is no version number to coordinate — the unit of exchange is a set of
files plus a diff review.

## Before you start

Both repos should be running the **same gluestack-ui CLI version and styling
engine**, or the components will not match and every future sync becomes a
merge. This repo was built with:

| | |
| --- | --- |
| gluestack-ui CLI | `5.0.3` |
| Styling engine | NativeWind v5 (`5.0.0-rc.0`) + Tailwind CSS v4 |
| Expo SDK | 57 (`expo@57.0.24`) |
| React / React Native | `19.2.3` / `0.86.3` |
| Node | `24.21.0` (see `.nvmrc`) |

If the app repo is on a different Expo SDK, reconcile that **first** — the
gluestack CLI resolves native module versions against the SDK.

> **Read `docs/ASSUMPTIONS.md` before copying.** NativeWind v5 is a pre-release
> and `expo start --web` is currently broken for this stack because of an
> upstream bug. That does not affect iOS/Android or Storybook, but you should
> know about it before adopting the version set above.

## Step 1 — Scaffold the app repo's styling engine with the CLI, not by hand

In the app repo, run the same init this repo used:

```bash
npx gluestack-ui@5.0.3 init --nativewind --use-npm -y
```

This writes `metro.config.js`, `global.css`, `babel.config.js`,
`postcss.config.mjs`, `nativewind-env.d.ts`, `react-native-css-env.d.ts`, the
`@/*` tsconfig path, `.npmrc`, and the `lightningcss` override, and installs the
NativeWind/Tailwind/gluestack dependency set.

Two things to know:

1. **The `--nativewind` flag is ignored.** It is documented as selecting
   NativeWind v4 + Tailwind v3, but CLI 5.0.3 installs NativeWind v5
   (`^5.0.0-rc.0`) + Tailwind v4 regardless. There is currently no way to get
   the v4 engine out of the v5 CLI. Don't fight it — just be aware the flag is
   a no-op, and verify what landed in `package.json`.
2. **`init` leaves a peer-dependency mismatch.** It pins
   `react-native-css@^3.0.7`, but `nativewind@5.0.0-rc.0` requires exactly
   `3.1.0-rc.0`. Fix it immediately:

   ```bash
   npm install react-native-css@3.1.0-rc.0 --save-exact
   ```

Then add the components:

```bash
npx gluestack-ui@5.0.3 add --all --use-npm -y
```

`add --all` reports success but **does not install the dependencies that
individual components import.** Install them explicitly (see Step 4).

## Step 2 — Copy the theme

Copy **`global.css`** from this repo, replacing the CLI-generated one.

This is the file that matters most. It carries:

- the documented placeholder palette,
- the `:root` / `prefers-color-scheme: dark` / `:root.dark` / `:root.light`
  four-block structure the light/dark toggle depends on,
- the five semantic status tokens (`--status-needs-action`, `--status-in-review`,
  `--status-paid`, `--status-resolved`, `--status-denied`) with their
  `-foreground` pairs,
- a local `--text-2xs` definition, without which `<Text size="2xs">` silently
  renders at the inherited size (gluestack emits `text-2xs`, which neither
  Tailwind v4 nor NativeWind defines),
- the `@theme inline` block that turns each variable into a usable utility.

Do not hand-merge this file. Copy it whole, then re-apply any app-specific
additions on top.

## Step 3 — Copy the components

```
components/ui/     →  components/ui/       (all 58 components + the provider)
components/tdc/    →  components/tdc/      (TDC-specific; currently only a README)
```

If Step 1 ran the same CLI version, `components/ui/` should be **byte-identical**
to what the CLI generated in the app repo. Diff it:

```bash
diff -r ../tdc-design-system/components/ui components/ui
```

An empty diff is the expected result. Anything that shows up is either a
deliberate TDC customisation or a version skew — resolve it before continuing,
don't just accept one side.

> `components/ui/` is CLI-managed. Re-running `add` or `upgrade` can overwrite
> it, so keep customisations minimal and documented, and review the diff after
> any CLI run.

## Step 4 — Install the dependencies `add --all` missed

`add --all` does not install what the component files import. These are required
or the app will fail to bundle:

```bash
npx expo install @gorhom/bottom-sheet @react-native-community/datetimepicker \
  expo-document-picker expo-glass-effect expo-image-picker \
  react-native-gesture-handler react-native-keyboard-controller
npx expo install lucide-react-native @legendapp/list react-native-markdown-display ai
```

Which component needs what, so you can drop the ones you don't ship:

| Package | Needed by |
| --- | --- |
| `lucide-react-native` | `accordion`, `chat-ai` |
| `react-native-gesture-handler` | `bottomsheet`, `chat-ai`, `image-viewer` |
| `@gorhom/bottom-sheet` | `bottomsheet` |
| `@react-native-community/datetimepicker` | `date-time-picker` |
| `expo-glass-effect` | `liquid-glass` |
| `@legendapp/list` | `chat-ai` |
| `ai` | `chat-ai` (type-only import — erased at build time) |
| `expo-document-picker`, `expo-image-picker` | `chat-ai` |
| `react-native-keyboard-controller` | `chat-ai` |
| `react-native-markdown-display` | `chat-ai` |

`accordion` is the one to watch: it is an ordinary component that most apps will
use, and it needs `lucide-react-native`. The rest are only pulled in by
components you may choose not to ship.

If you drop a component, delete its folder from `components/ui/` **and** its
dependencies — otherwise you are shipping an unused native module.

## Step 5 — Verify the config files

The CLI should have written these. Compare against this repo and make sure they
match:

**`metro.config.js`**
```js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativewind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config, { inlineRem: 16 });
```

**`postcss.config.mjs`**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

**`babel.config.js`** — presets `babel-preset-expo` and `nativewind/babel`, plus
the `module-resolver` and `react-native-worklets/plugin` plugins.

Two gotchas here:

- `babel.config.js` requires `babel-preset-expo` to be resolvable from the
  project root, but Expo SDK 57's blank template ships **without** a
  `babel.config.js` and keeps the preset nested under `node_modules/expo/`. The
  moment the gluestack CLI adds a `babel.config.js`, bundling fails with
  `Cannot find module 'babel-preset-expo'`. Fix:

  ```bash
  npm install --save-dev --save-exact babel-preset-expo@57.0.12
  ```

- The generated `module-resolver` config aliases `tailwind.config` to
  `./tailwind.config.js`, **a file that does not exist** — Tailwind v4 is
  configured in CSS, not JS. It is harmless today because nothing imports that
  specifier. Left in place so `components/ui/` and the config stay faithful to
  CLI output; delete it if you prefer, but expect the CLI to re-add it.

Also copy `types/css.d.ts` (a one-line `declare module '*.css';`) or
`import '@/global.css'` will not typecheck.

`.npmrc` must contain `legacy-peer-deps=true`. `@legendapp/motion` declares
`nativewind: ">=4.0.0"`, and the prerelease `5.0.0-rc.0` does not satisfy that
range under semver's prerelease rules, so installs fail without it.

Keep the `lightningcss` pin that `init` adds (`overrides` **and**
`resolutions`, both set to `1.30.1`) — the gluestack docs call this out as a
known Tailwind v4 conflict.

## Step 6 — Wire up the provider

Wrap the app root in `GluestackUIProvider` and import the stylesheet once:

```tsx
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="system">
      {/* app */}
    </GluestackUIProvider>
  );
}
```

`mode` accepts `'light' | 'dark' | 'system'`. On web the provider toggles
`light` / `dark` classes on `<html>`, which is what activates the
`:root.light` / `:root.dark` blocks. On native it calls
`Appearance.setColorScheme(mode)`.

Components that render through a portal need providers above them:

- `SafeAreaView` **throws** without a `SafeAreaProvider` ancestor.
- `BottomSheet` needs a `GestureHandlerRootView` ancestor.
- Overlays (`Modal`, `Actionsheet`, `Drawer`, `Popover`, `Tooltip`, `Menu`,
  `Toast`) rely on the `OverlayProvider` / `ToastProvider` that
  `GluestackUIProvider` already supplies.

## Step 7 — Verify after copying

Work down this list; each step catches a different class of breakage.

1. **Install cleanly**
   ```bash
   npm install
   ```
   No peer-dependency failures. If you see one about `nativewind`, `.npmrc` is
   missing.

2. **Check the version alignment**
   ```bash
   npm ls nativewind react-native-css tailwindcss @gluestack-ui/core
   ```
   Expect `nativewind@5.0.0-rc.0`, `react-native-css@3.1.0-rc.0`,
   `tailwindcss@4.x`, `@gluestack-ui/core@5.0.15`. A `react-native-css` other
   than `3.1.0-rc.0` means Step 1's fix was skipped. The "invalid" marker on
   `nativewind` from `@legendapp/motion` is expected and harmless.

3. **Bundle for native**
   ```bash
   npx expo start --ios      # or --android
   ```
   Render a `Button`, `Card`, `Input` and `Badge` on one screen and confirm they
   are **styled**, not unstyled boxes. Unstyled output means `global.css` is not
   imported or `metro.config.js` is missing `withNativewind`.

4. **Check the theme actually switches.** Toggle `mode` between `light` and
   `dark` and confirm colors change. If not, the `:root.dark` / `:root.light`
   blocks are missing from `global.css` — the media query alone will not respond
   to an in-app toggle.

5. **Check the status tokens resolve.** Render
   `<Box className="bg-status-paid" />`. A transparent box means the
   `@theme inline` block did not come across, so the utilities were never
   generated.

6. **Typecheck**
   ```bash
   npx tsc --noEmit
   ```
   **Expect roughly 58 pre-existing errors inside `components/ui/`** — these
   are upstream gluestack-ui v5 type defects against Expo SDK 57's React Native
   types, not something the copy introduced. The concentration is `chat-ai`
   (33) and `bottomsheet` (11); the rest are 1–4 each in `checkbox`,
   `date-time-picker`, `modal`, `menu`, `badge`, `avatar` and `alert-dialog`.
   Deleting components you don't ship removes most of them. See
   `docs/ASSUMPTIONS.md` for the full breakdown and options.

   Add `"**/USAGE_EXAMPLE.tsx"` to `tsconfig.json`'s `exclude` — gluestack ships
   demo files inside `components/ui/accordion/` that do not compile and that
   nothing imports.

7. **Known-broken before you debug it**
   - `expo start --web` crashes with
     `Cannot read properties of undefined (reading 'default')`. This is the
     upstream NativeWind v5 web bug, reproducible in a bare Expo app. Not
     caused by the copy.
   - `CheckboxGroup` throws on web. Works on native. Upstream bug — details in
     `docs/ASSUMPTIONS.md`.

## What not to copy

| Path | Why |
| --- | --- |
| `stories/` | Design reference. Stays here. |
| `.storybook/` | Storybook config, including a web-only Babel workaround that is wrong for an app build. |
| `App.tsx`, `index.ts` | Smoke-test harness, not a product surface. |
| `.github/workflows/` | Publishes this repo's Storybook to Pages. |
| `scripts/gen-tokens-doc.mjs` | Regenerates this repo's token table. |
| `docs/` | Copy for reference if useful, but it documents this repo. |

## Keeping in sync

There is no automation. When design changes a token or a component here:

1. Design changes `global.css` (or a `components/ui/` file) and runs
   `npm run docs:tokens`.
2. Design tells engineering what changed.
3. Engineering copies the changed files and diffs before committing.

For token-only changes — the common case — this is a single-file copy of
`global.css`. `docs/TOKENS.md` is generated from that file, so it is the
authoritative record of what the values are at any commit.
