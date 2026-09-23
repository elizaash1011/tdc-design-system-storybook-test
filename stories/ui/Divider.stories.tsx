import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const ORIENTATIONS = ['horizontal', 'vertical'] as const;

const meta = {
  title: 'UI/Divider',
  component: Divider,
  argTypes: {
    orientation: { control: 'select', options: ORIENTATIONS },
  },
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <VStack space="md" className="w-64">
      <Text className="text-foreground">Item one</Text>
      <Divider {...args} />
      <Text className="text-foreground">Item two</Text>
    </VStack>
  ),
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Orientation: Story = {
  render: () => (
    <Showcase>
      <Note>
        A vertical divider is one pixel wide and full height, so it only shows
        up inside a parent with a fixed height.
      </Note>
      <Labeled label="horizontal" className="w-64">
        <VStack space="md" className="w-64">
          <Text className="text-foreground">Item one</Text>
          <Divider orientation="horizontal" />
          <Text className="text-foreground">Item two</Text>
        </VStack>
      </Labeled>
      <Labeled label="vertical">
        <HStack space="md" className="h-10 items-center">
          <Text className="text-foreground">Item one</Text>
          <Divider orientation="vertical" />
          <Text className="text-foreground">Item two</Text>
        </HStack>
      </Labeled>
    </Showcase>
  ),
};

export const InCard: Story = {
  render: () => (
    <Showcase>
      <Labeled label="separating list rows" className="w-64">
        <VStack className="w-64 rounded-lg border border-border bg-card">
          <Text className="p-3 text-foreground">Item one</Text>
          <Divider />
          <Text className="p-3 text-foreground">Item two</Text>
          <Divider />
          <Text className="p-3 text-foreground">Item three</Text>
        </VStack>
      </Labeled>
    </Showcase>
  ),
};
