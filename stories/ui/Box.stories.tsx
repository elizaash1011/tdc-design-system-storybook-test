import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const PADDING = ['p-0', 'p-2', 'p-4', 'p-6'] as const;
const RADII = ['rounded-none', 'rounded-md', 'rounded-lg', 'rounded-full'] as const;

/** Visible filler so the (otherwise invisible) Box bounds can be seen. */
function Filler({ label = 'Content' }: { label?: string }) {
  return (
    <Box className="rounded-sm bg-muted px-3 py-2">
      <Text size="sm" className="text-muted-foreground">
        {label}
      </Text>
    </Box>
  );
}

const meta = {
  title: 'UI/Box',
  component: Box,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: 'rounded-lg border border-border bg-card p-4',
  },
  render: (args) => (
    <Box {...args}>
      <Filler />
    </Box>
  ),
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Padding: Story = {
  render: () => (
    <Showcase>
      <Note>
        Box has no style variants of its own — it is a plain view styled entirely
        through className, shown here with a card background and border.
      </Note>
      {PADDING.map((padding) => (
        <Labeled key={padding} label={padding}>
          <Box className={`rounded-lg border border-border bg-card ${padding}`}>
            <Filler />
          </Box>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Radius: Story = {
  render: () => (
    <Showcase>
      {RADII.map((radius) => (
        <Labeled key={radius} label={radius}>
          <Box className={`h-20 w-20 border border-border bg-muted ${radius}`} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Nested: Story = {
  render: () => (
    <Showcase>
      <Labeled label="box inside box">
        <Box className="rounded-lg border border-border bg-card p-4">
          <Box className="rounded-md border border-border bg-background p-4">
            <Filler label="Inner content" />
          </Box>
        </Box>
      </Labeled>
    </Showcase>
  ),
};
