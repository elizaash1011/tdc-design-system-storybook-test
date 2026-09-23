import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { Note, Showcase } from '../helpers';

/**
 * `ScrollView` is a direct re-export of react-native's `ScrollView`. There are
 * no gluestack variants, sizes or data-states — only the RN props.
 *
 * A `ScrollView` has no intrinsic height, so every story frames it in a
 * bordered, fixed-height container to make the scroll boundary visible.
 *
 * `FILL` below is layout-only insurance: because this module re-exports the RN
 * primitive with `export ... from 'react-native'` rather than importing it,
 * NativeWind's babel rewrite does not wrap it, so a `className` on the
 * ScrollView itself may be dropped. All colour still comes from theme tokens on
 * the surrounding `Box` and the rows.
 */
const FILL = { flex: 1 } as const;

const ROWS = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
const COLUMNS = Array.from({ length: 10 }, (_, i) => `Column ${i + 1}`);

function Row({ label }: { label: string }) {
  return (
    <Box className="border-b border-border px-4 py-3">
      <Text className="text-foreground">{label}</Text>
    </Box>
  );
}

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Box
      className={`w-full overflow-hidden rounded-lg border border-border bg-card ${className ?? 'h-64'}`}
    >
      {children}
    </Box>
  );
}

const meta = {
  title: 'UI/ScrollView',
  component: ScrollView,
  render: (args) => (
    <Frame>
      <ScrollView {...args} className="flex-1" style={FILL}>
        {ROWS.map((label) => (
          <Row key={label} label={label} />
        ))}
      </ScrollView>
    </Frame>
  ),
} satisfies Meta<typeof ScrollView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  render: () => (
    <Frame className="h-24">
      <ScrollView horizontal className="flex-1" style={FILL}>
        <Box className="flex-row p-3">
          {COLUMNS.map((label) => (
            <Box
              key={label}
              className="mr-2 justify-center rounded-lg border border-border bg-muted px-4 py-3"
            >
              <Text className="text-foreground">{label}</Text>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Frame>
  ),
};

export const NoScrollIndicator: Story = {
  render: () => (
    <Frame>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        style={FILL}
      >
        {ROWS.map((label) => (
          <Row key={label} label={label} />
        ))}
      </ScrollView>
    </Frame>
  ),
};

export const StickyHeader: Story = {
  render: () => (
    <Frame>
      <ScrollView stickyHeaderIndices={[0]} className="flex-1" style={FILL}>
        <Box className="border-b border-border bg-muted px-4 py-3">
          <Text className="font-semibold text-foreground">Sticky header</Text>
        </Box>
        {ROWS.map((label) => (
          <Row key={label} label={label} />
        ))}
      </ScrollView>
    </Frame>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        `ScrollView`. It has no variants, sizes or theme tokens of its own; the
        borders and surfaces in these stories come from the wrapping container.
      </Note>
      <Note>
        On web, `ScrollView` maps to an overflow-scrolling div. Momentum
        scrolling, bounce, `scrollIndicatorInsets` and
        `keyboardDismissMode` are native-only, so the feel differs from a
        device even though layout and content match.
      </Note>
      <Note>
        Because the barrel re-exports the primitive rather than importing it,
        NativeWind does not wrap this component — a `className` set directly on
        the `ScrollView` may not apply. Style the container and the children
        instead, which is what these stories do.
      </Note>
    </Showcase>
  ),
};
