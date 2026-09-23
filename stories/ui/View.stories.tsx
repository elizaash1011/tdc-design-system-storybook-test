import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Labeled, Note, Showcase } from '../helpers';

const DIRECTIONS = ['flex-col', 'flex-row', 'flex-row-reverse'] as const;
const PADDING = ['p-0', 'p-2', 'p-4', 'p-6'] as const;

/** Visible filler so the view's bounds and arrangement can be seen. */
function Item({ label }: { label: string }) {
  return (
    <View className="rounded-sm border border-border bg-muted px-3 py-2">
      <Text size="sm" className="text-muted-foreground">
        {label}
      </Text>
    </View>
  );
}

const meta = {
  title: 'UI/View',
  component: View,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: 'gap-2 rounded-lg border border-border bg-card p-4',
  },
  render: (args) => (
    <View {...args}>
      <Item label="Item one" />
      <Item label="Item two" />
    </View>
  ),
} satisfies Meta<typeof View>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Direction: Story = {
  render: () => (
    <Showcase>
      <Note>
        View is React Native&apos;s own view re-exported unchanged — it has no
        variants, so every axis below is plain className layout. Children stack
        vertically by default.
      </Note>
      {DIRECTIONS.map((direction) => (
        <Labeled key={direction} label={direction}>
          <View
            className={`gap-2 rounded-lg border border-border bg-card p-4 ${direction}`}
          >
            <Item label="Item one" />
            <Item label="Item two" />
          </View>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Padding: Story = {
  render: () => (
    <Showcase>
      {PADDING.map((padding) => (
        <Labeled key={padding} label={padding}>
          <View className={`rounded-lg border border-border bg-card ${padding}`}>
            <Item label="Item one" />
          </View>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Nested: Story = {
  render: () => (
    <Showcase>
      <Labeled label="view inside view">
        <View className="rounded-lg border border-border bg-card p-4">
          <View className="gap-2 rounded-md border border-border bg-background p-4">
            <Item label="Item one" />
            <Item label="Item two" />
          </View>
        </View>
      </Labeled>
    </Showcase>
  ),
};
