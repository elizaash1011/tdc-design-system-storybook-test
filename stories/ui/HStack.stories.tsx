import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Labeled, Showcase } from '../helpers';

const SPACES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
const ALIGNMENTS = ['items-start', 'items-center', 'items-end'] as const;

/** Visible filler so the stack's spacing and order can be seen. */
function Item({ label }: { label: string }) {
  return (
    <Box className="rounded-sm border border-border bg-muted px-3 py-2">
      <Text size="sm" className="text-muted-foreground">
        {label}
      </Text>
    </Box>
  );
}

const meta = {
  title: 'UI/HStack',
  component: HStack,
  argTypes: {
    space: { control: 'select', options: SPACES },
    reversed: { control: 'boolean' },
  },
  args: {
    space: 'md',
    reversed: false,
  },
  render: (args) => (
    <HStack {...args}>
      <Item label="One" />
      <Item label="Two" />
      <Item label="Three" />
    </HStack>
  ),
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Space: Story = {
  render: () => (
    <Showcase>
      {SPACES.map((space) => (
        <Labeled key={space} label={space}>
          <HStack space={space}>
            <Item label="One" />
            <Item label="Two" />
            <Item label="Three" />
          </HStack>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Reversed: Story = {
  render: () => (
    <Showcase>
      <Labeled label="reversed: false">
        <HStack space="md">
          <Item label="One" />
          <Item label="Two" />
          <Item label="Three" />
        </HStack>
      </Labeled>
      <Labeled label="reversed: true">
        <HStack space="md" reversed>
          <Item label="One" />
          <Item label="Two" />
          <Item label="Three" />
        </HStack>
      </Labeled>
    </Showcase>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Showcase>
      {ALIGNMENTS.map((alignment) => (
        <Labeled key={alignment} label={alignment}>
          <HStack
            space="md"
            className={`h-24 w-64 rounded-lg border border-border bg-card p-2 ${alignment}`}
          >
            <Item label="One" />
            <Item label="Two" />
          </HStack>
        </Labeled>
      ))}
    </Showcase>
  ),
};
