import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['h-20 w-40', 'h-32 w-64', 'h-40 w-full'] as const;

const meta = {
  title: 'UI/Center',
  component: Center,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: 'h-32 w-64 rounded-lg border border-border bg-card',
  },
  render: (args) => (
    <Center {...args}>
      <Text className="text-muted-foreground">Centered</Text>
    </Center>
  ),
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      <Note>
        Center has no style variants — it always applies justify-center and
        items-center. The outer border below marks the container it centers
        within.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Center className={`rounded-lg border border-border bg-card ${size}`}>
            <Box className="rounded-sm bg-muted px-3 py-2">
              <Text size="sm" className="text-muted-foreground">
                Centered
              </Text>
            </Box>
          </Center>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const MultipleChildren: Story = {
  render: () => (
    <Showcase>
      <Labeled label="stacked children">
        <Center className="h-40 w-64 rounded-lg border border-border bg-card">
          <Text className="text-foreground">Item one</Text>
          <Text size="sm" className="text-muted-foreground">
            Item two
          </Text>
        </Center>
      </Labeled>
    </Showcase>
  ),
};
