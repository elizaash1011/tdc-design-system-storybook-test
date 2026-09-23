import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Text } from '@/components/ui/text';
import { Labeled, Showcase } from '../helpers';

const SIZES = [
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
] as const;

const meta = {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    size: { control: 'select', options: SIZES },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    strikeThrough: { control: 'boolean' },
    sub: { control: 'boolean' },
    highlight: { control: 'boolean' },
    isTruncated: { control: 'boolean' },
  },
  args: {
    size: 'md',
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    sub: false,
    highlight: false,
    isTruncated: false,
  },
  render: (args) => <Text {...args}>The quick brown fox</Text>,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Text size={size}>The quick brown fox</Text>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Styles: Story = {
  render: () => (
    <Showcase>
      <Labeled label="default">
        <Text>The quick brown fox</Text>
      </Labeled>
      <Labeled label="bold">
        <Text bold>The quick brown fox</Text>
      </Labeled>
      <Labeled label="italic">
        <Text italic>The quick brown fox</Text>
      </Labeled>
      <Labeled label="underline">
        <Text underline>The quick brown fox</Text>
      </Labeled>
      <Labeled label="strikeThrough">
        <Text strikeThrough>The quick brown fox</Text>
      </Labeled>
      <Labeled label="sub">
        <Text sub>The quick brown fox</Text>
      </Labeled>
      <Labeled label="highlight">
        <Text highlight>The quick brown fox</Text>
      </Labeled>
      <Labeled label="isTruncated" className="w-40">
        <Text isTruncated>
          The quick brown fox jumps over the lazy dog and keeps on running
        </Text>
      </Labeled>
    </Showcase>
  ),
};

export const Muted: Story = {
  render: () => (
    <Showcase>
      <Labeled label="text-foreground">
        <Text className="text-foreground">Primary body copy</Text>
      </Labeled>
      <Labeled label="text-muted-foreground">
        <Text className="text-muted-foreground">Secondary body copy</Text>
      </Labeled>
    </Showcase>
  ),
};
