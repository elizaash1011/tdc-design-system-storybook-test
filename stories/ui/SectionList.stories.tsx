import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { SectionList } from '@/components/ui/section-list';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Note, Showcase } from '../helpers';

// ListEmptyComponent must NOT be rooted in `Box` — VirtualizedList clones it
// with an array `style`, and web `Box` is a raw <div>, which React DOM cannot
// apply an array style to. See the note in FlatList.stories.tsx.

/**
 * `SectionList` is a direct re-export of react-native's `SectionList`. It has
 * no gluestack variants or theme props — the section headers and rows below are
 * ordinary views styled with theme tokens.
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
type SectionData = { title: string; data: Item[] };

const SECTIONS: SectionData[] = ['A', 'B', 'C', 'D'].map((letter, s) => ({
  title: `Section ${letter}`,
  data: Array.from({ length: 5 }, (_, i) => ({
    id: `${letter}-${i + 1}`,
    label: `Item ${s * 5 + i + 1}`,
  })),
}));

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

function SectionHeader({ title }: { title: string }) {
  return (
    <Box className="border-b border-border bg-muted px-4 py-2">
      <Text size="xs" className="uppercase tracking-wide text-muted-foreground">
        {title}
      </Text>
    </Box>
  );
}

function Row({ label }: { label: string }) {
  return (
    <Box className="border-b border-border px-4 py-3">
      <Text className="text-foreground">{label}</Text>
    </Box>
  );
}

const meta = {
  title: 'UI/SectionList',
  component: SectionList,
  // The barrel re-exports react-native's SectionList without its generic
  // parameters, so props land as `unknown` and the callbacks have to narrow.
  args: {
    sections: SECTIONS,
    keyExtractor: (item: unknown) => (item as Item).id,
    renderItem: ({ item }: { item: unknown }) => <Row label={(item as Item).label} />,
    renderSectionHeader: ({ section }: { section: unknown }) => (
      <SectionHeader title={(section as SectionData).title} />
    ),
  },
  render: (args) => (
    <Frame>
      <SectionList {...args} className="flex-1" style={FILL} />
    </Frame>
  ),
} satisfies Meta<typeof SectionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StickySectionHeaders: Story = {
  render: () => (
    <Frame>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Row label={item.label} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} />
        )}
        stickySectionHeadersEnabled
        className="flex-1"
        style={FILL}
      />
    </Frame>
  ),
};

export const WithSectionFooter: Story = {
  render: () => (
    <Frame>
      <SectionList
        sections={SECTIONS.slice(0, 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Row label={item.label} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} />
        )}
        renderSectionFooter={({ section }) => (
          <Box className="border-b border-border px-4 py-2">
            <Text size="xs" className="text-muted-foreground">
              {section.data.length} items
            </Text>
          </Box>
        )}
        className="flex-1"
        style={FILL}
      />
    </Frame>
  ),
};

export const Empty: Story = {
  render: () => (
    <Frame>
      <SectionList
        sections={[] as SectionData[]}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => <Row label={item.label} />}
        ListEmptyComponent={
          <View className="items-center justify-center px-6 py-10">
            <Text className="text-muted-foreground">No sections</Text>
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
        `SectionList`. It exposes no variants, sizes or data-states — only the
        RN props.
      </Note>
      <Note>
        `stickySectionHeadersEnabled` defaults to true on iOS and false
        elsewhere. On web the sticky behaviour is emulated and can drift by a
        pixel or two while scrolling; check the real feel on a device.
      </Note>
      <Note>
        `className` is not reliable on this component. NativeWind v5 only wraps
        a fixed set of RN components, `SectionList` is not one of them, and this
        barrel re-exports rather than imports the primitive — so style the
        container and the rows instead, as these stories do.
      </Note>
    </Showcase>
  ),
};
