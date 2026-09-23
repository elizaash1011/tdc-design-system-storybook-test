import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { FlatList } from '@/components/ui/flat-list';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Note, Showcase, Labeled } from '../helpers';

// ListEmptyComponent must NOT be rooted in `Box`. VirtualizedList clones the
// element with `style: [inversionStyle, element.props.style]` — an array — and
// on web `Box` renders a raw <div>, so React DOM tries `div.style[0] = …` and
// throws "Indexed property setter is not supported". `View` maps to
// react-native-web's View, which flattens array styles.
// ListHeaderComponent / ListFooterComponent are unaffected: their array style
// goes on the wrapping cell, not on the caller's element.

/**
 * `FlatList` is a thin wrapper over react-native's `FlatList` that applies a set
 * of Android performance defaults (`removeClippedSubviews`, batching, window
 * size). It exposes no visual variants of its own — everything you see here is
 * the RN primitive plus theme tokens on the rows.
 */

type Item = { id: string; label: string };

const ITEMS: Item[] = Array.from({ length: 20 }, (_, i) => ({
  id: `item-${i + 1}`,
  label: `Item ${i + 1}`,
}));

function Row({ label }: { label: string }) {
  return (
    <Box className="border-b border-border px-4 py-3">
      <Text className="text-foreground">{label}</Text>
    </Box>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <Box className="mr-2 rounded-lg border border-border bg-muted px-4 py-3">
      <Text className="text-foreground">{label}</Text>
    </Box>
  );
}

/** A bordered, fixed-height frame so the scroll boundary is visible. */
function ListFrame({
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
  title: 'UI/FlatList',
  component: FlatList,
  // The barrel re-exports react-native's FlatList without its generic
  // parameter, so props land as `unknown` and the callbacks have to narrow.
  args: {
    data: ITEMS,
    keyExtractor: (item: unknown) => (item as Item).id,
    renderItem: ({ item }: { item: unknown }) => <Row label={(item as Item).label} />,
  },
  render: (args) => (
    <ListFrame>
      <FlatList {...args} className="flex-1" />
    </ListFrame>
  ),
} satisfies Meta<typeof FlatList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  render: () => (
    <ListFrame className="h-20">
      <FlatList
        horizontal
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Chip label={item.label} />}
        showsHorizontalScrollIndicator={false}
        className="flex-1 p-2"
      />
    </ListFrame>
  ),
};

export const HeaderAndFooter: Story = {
  render: () => (
    <ListFrame>
      <FlatList
        data={ITEMS.slice(0, 8)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Row label={item.label} />}
        ListHeaderComponent={
          <Box className="border-b border-border bg-muted px-4 py-3">
            <Text className="font-semibold text-foreground">Header</Text>
          </Box>
        }
        ListFooterComponent={
          <Box className="px-4 py-3">
            <Text size="sm" className="text-muted-foreground">
              Footer
            </Text>
          </Box>
        }
        className="flex-1"
      />
    </ListFrame>
  ),
};

export const Empty: Story = {
  render: () => (
    <ListFrame>
      <FlatList
        data={[] as Item[]}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => <Row label={item.label} />}
        ListEmptyComponent={
          <View className="items-center justify-center px-6 py-10">
            <Text className="text-muted-foreground">No items</Text>
          </View>
        }
        className="flex-1"
      />
    </ListFrame>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        `FlatList` here is a wrapper over the react-native primitive. On Android
        it pre-applies performance defaults (`removeClippedSubviews`,
        `maxToRenderPerBatch`, `initialNumToRender`, `windowSize`); on iOS and
        web it passes props straight through. Those defaults are invisible in
        the browser.
      </Note>
      <Note>
        The component exposes no `size` or `variant` props — there is nothing
        themeable on the list itself. All colour in these stories comes from the
        row and container classNames (`bg-card`, `border-border`,
        `text-foreground`).
      </Note>
      <Note>
        A second export, `RNFlatList`, is the unmodified react-native
        `FlatList`. Use it when you need to opt out of the Android defaults.
      </Note>
      <Labeled label="RNFlatList escape hatch">
        <Text size="sm" className="text-muted-foreground">
          {`import { RNFlatList } from '@/components/ui/flat-list';`}
        </Text>
      </Labeled>
    </Showcase>
  ),
};
