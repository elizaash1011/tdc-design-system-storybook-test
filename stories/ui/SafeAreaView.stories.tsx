import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Note, Showcase } from '../helpers';

/**
 * `SafeAreaView` is a direct re-export of `react-native-safe-area-context`'s
 * `SafeAreaView` — not react-native's deprecated one. It reads the device
 * insets from context and turns them into padding (or margin, with
 * `mode="margin"`) on the chosen `edges`.
 *
 * It has no gluestack variants. The only props that matter are `edges` and
 * `mode`. NativeWind does not wrap this component (it comes straight from
 * node_modules), so `className` on the `SafeAreaView` itself is not applied —
 * every story keeps colour and spacing on child `Box`es instead.
 */

const FULL_WIDTH = { width: '100%' } as const;

/**
 * The component throws without a `SafeAreaProvider` ancestor, and the
 * Storybook preview decorator does not supply one — so each story brings its
 * own.
 */
function WithProvider({ children }: { children: React.ReactNode }) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}

function Content({ label }: { label: string }) {
  return (
    <Box className="rounded-md border border-border bg-card p-4">
      <Text className="text-foreground">{label}</Text>
      <Text size="sm" className="text-muted-foreground">
        Content inside the safe area
      </Text>
    </Box>
  );
}

/** The dashed outer box marks the region the insets would eat into. */
function InsetFrame({ children }: { children: React.ReactNode }) {
  return (
    <Box className="w-full rounded-lg border border-dashed border-border bg-muted p-2">
      {children}
    </Box>
  );
}

const meta = {
  title: 'UI/SafeAreaView',
  component: SafeAreaView,
  render: (args) => (
    <WithProvider>
      <InsetFrame>
        <SafeAreaView {...args} style={FULL_WIDTH}>
          <Content label="SafeAreaView" />
        </SafeAreaView>
      </InsetFrame>
    </WithProvider>
  ),
} satisfies Meta<typeof SafeAreaView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        Safe-area insets are all zero in a desktop browser — there is no notch,
        home indicator or status bar to avoid — so this renders as an ordinary
        view with no extra padding. The dashed `bg-muted` frame marks where the
        inset padding would appear on a device.
      </Note>
      <WithProvider>
        <InsetFrame>
          <SafeAreaView style={FULL_WIDTH}>
            <Content label="All edges (default)" />
          </SafeAreaView>
        </InsetFrame>
      </WithProvider>
    </VStack>
  ),
};

export const Edges: Story = {
  render: () => (
    <WithProvider>
      <Showcase className="w-full">
        {(['top', 'bottom', 'left', 'right'] as const).map((edge) => (
          <VStack key={edge} space="xs" className="w-full">
            <Text
              size="xs"
              className="uppercase tracking-wide text-muted-foreground"
            >
              {edge}
            </Text>
            <InsetFrame>
              <SafeAreaView edges={[edge]} style={FULL_WIDTH}>
                <Content label={`edges: ${edge}`} />
              </SafeAreaView>
            </InsetFrame>
          </VStack>
        ))}
      </Showcase>
    </WithProvider>
  ),
};

export const MarginMode: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `mode="margin"` adds the insets as margin instead of padding, so a
        background on the content stops at the safe area rather than bleeding
        into it. Identical to the default `mode="padding"` on web, where every
        inset is zero.
      </Note>
      <WithProvider>
        <InsetFrame>
          <SafeAreaView
            mode="margin"
            edges={['top', 'bottom']}
            style={FULL_WIDTH}
          >
            <Content label="mode: margin" />
          </SafeAreaView>
        </InsetFrame>
      </WithProvider>
    </VStack>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        Native-only behaviour: on iOS and Android the insets come from the
        device (notch, dynamic island, home indicator, Android status and
        navigation bars). In the browser every inset resolves to 0, so nothing
        in these stories shifts — the component still renders, it just has
        nothing to avoid.
      </Note>
      <Note>
        The component throws without a `SafeAreaProvider` ancestor. The
        Storybook preview decorator only supplies `GluestackUIProvider`, so
        these stories add `SafeAreaProvider` themselves; real screens get it
        from the app root.
      </Note>
      <Note>
        `className` does not reach this component — it is re-exported from
        node_modules, which NativeWind&apos;s babel rewrite deliberately skips.
        Put theme classes on a child view, as `Content` does here.
      </Note>
      <Note>
        There are no variants, sizes or data-states; the only meaningful props
        are `edges` and `mode`.
      </Note>
    </Showcase>
  ),
};
