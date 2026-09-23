# `components/tdc/` — TDC-specific components

This folder is intentionally empty. It is the home for **TDC's own composite
components**, as opposed to `components/ui/`, which holds the unmodified
gluestack-ui primitives added by the gluestack CLI.

## Why the split

`components/ui/` is CLI-managed. Running `npx gluestack-ui@latest add <name>` or
`upgrade` can rewrite files there, so anything hand-written in that folder is at
risk of being overwritten. `components/tdc/` is never touched by the CLI, which
makes it the safe place for our own work.

## What belongs here (planned — none built yet)

These were identified as TDC-specific and are **out of scope for this pass**:

| Component | Purpose |
| --- | --- |
| Balances card | Member's current plan balances (elections, spent, remaining) |
| MERP journey band | Progress band showing the member's stage in the MERP journey |
| Claim status timeline | Vertical timeline of a claim's status transitions |
| Action item alerts | Prompts for things the member must act on |
| SOB table | Schedule of Benefits comparison table |
| Desktop left rail | Persistent desktop navigation rail |

## Conventions when adding one

1. One folder per component: `components/tdc/balances-card/index.tsx`.
2. Compose from `components/ui/` primitives — don't reach for raw
   `react-native` views when a themed primitive exists.
3. Style with `className` and **theme tokens only** (`bg-card`,
   `text-muted-foreground`, `bg-status-paid`). No hardcoded hex values: a
   literal color won't respond to light/dark mode and won't survive the
   rebrand when the placeholder theme is replaced with TDC values.
4. For variants, use `tva()` from `@gluestack-ui/utils/nativewind-utils`, the
   same pattern the `components/ui/` files use. See the Card example in the
   root `README.md`.
5. Add a story at `stories/tdc/<ComponentName>.stories.tsx`. The `Tokens`,
   `UI`, `TDC` sidebar order is already configured in
   `.storybook/preview.tsx`.

## Status tokens

Claim and transaction status should use the five semantic tokens rather than
picking a color per screen:

`status-needs-action`, `status-in-review`, `status-paid`, `status-resolved`,
`status-denied`

They are defined in `global.css` and listed in `docs/TOKENS.md`. All five are
currently **placeholders** using the Tailwind default palette.
