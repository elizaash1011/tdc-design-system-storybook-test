import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { VirtualizedList } from '@/components/ui/virtualized-list';
import { Note, Showcase } from '../helpers';

// ListEmptyComponent must NOT be rooted in `Box` — VirtualizedList clones it
// with an array `style`, and web `Box` is a raw <div>, which React DOM cannot
// apply an array style to. See the note in FlatList.stories.tsx.

/**
 * `VirtualizedList` is a direct re-export of react-native's `VirtualizedList`
 * — the low-level base that `FlatList` and `SectionList` are built on.
 *
 * Unlike `FlatList` it does not take `data` as an array it walks for you: you
 * must supply `getItemCount` and `getItem` so the list can pull items on
 * demand. Every story below supplies `getItem`, `getItemCount`, `renderItem`
 * and `keyExtractor`.
 */

/**
 * Layout-only insurance: this module re-exports the RN primitive with
 * `export ... from 'react-native'` rather than importing it, so NativeWind's
 * babel rewrite does not wrap it and a `className` set directly on the list may
 * be dropped. All colour still comes from theme tokens on the container and
 * rows.
 */
const FILL = { flex: 1 } as const;

type Item = { id: string; label: string };

const COUNT = 200;

/** Items are generated on demand rather than held in an array. */
const getItem = (_data: unknown, index: number): Item => ({
  id: `item-${index + 1}`,
  label: `Item ${index + 1}`,
});

const getItemCount = () => COUNT;

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
  title: 'UI/VirtualizedList',
  component: VirtualizedList,
  // The barrel re-exports react-native's VirtualizedList without its generic
  // parameter, so props land as `unknown` and the callbacks have to narrow.
  args: {
    data: null,
    getItem,
    getItemCount,
    keyExtractor: (item: unknown) => (item as Item).id,
    renderItem: ({ item }: { item: unknown }) => <Row label={(item as Item).label} />,
  },
  render: (args) => (
    <Frame>
      <VirtualizedList {...args} className="flex-1" style={FILL} />
    </Frame>
  ),
} satisfies Meta<typeof VirtualizedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FixedItemLayout: Story = {
  render: () => (
    <Frame>
      <VirtualizedList
        data={null}
        getItem={getItem}
        getItemCount={getItemCount}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => <Row label={item.label} />}
        // Rows are a known height, so the list can skip measurement.
        getItemLayout={(_data, index) => ({
          length: 45,
          offset: 45 * index,
          index,
        })}
        initialNumToRender={12}
        windowSize={5}
        className="flex-1"
        style={FILL}
      />
    </Frame>
  ),
};

export const HeaderAndFooter: Story = {
  render: () => (
    <Frame>
      <VirtualizedList
        data={null}
        getItem={getItem}
        getItemCount={() => 12}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => <Row label={item.label} />}
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
        style={FILL}
      />
    </Frame>
  ),
};

export const Empty: Story = {
  render: () => (
    <Frame>
      <VirtualizedList
        data={null}
        getItem={getItem}
        getItemCount={() => 0}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => <Row label={item.label} />}
        ListEmptyComponent={
          <View className="items-center justify-center px-6 py-10">
            <Text className="text-muted-foreground">No items</Text>
          </View>
        }
        className="flex-1"
        style={FILL}
      />
    </Frame>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        `VirtualizedList`. It has no variants, sizes or theme props — it is
        pure list machinery. Prefer `FlatList` or `SectionList` unless you
        specifically need the lower-level API.
      </Note>
      <Note>
        `data` is opaque here: it is handed back to `getItem` untouched, so
        these stories pass `null` and generate rows from the index. The list
        length comes from `getItemCount`, not from `data.length`.
      </Note>
      <Note>
        Virtualisation windows behave differently on web than on native —
        react-native-web renders into a scrolling div and cell recycling is less
        aggressive. Row counts and blank-space behaviour should be verified on a
        device.
      </Note>
      <Note>
        Because the barrel re-exports the primitive rather than importing it,
        NativeWind does not wrap this component — a `className` set directly on
        the list may not apply. Style the container and the rows instead, which
        is what these stories do.
      </Note>
    </Showcase>
  ),
};
