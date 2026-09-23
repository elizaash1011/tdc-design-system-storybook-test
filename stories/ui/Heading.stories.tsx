import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Heading } from '@/components/ui/heading';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as const;

const meta = {
  title: 'UI/Heading',
  component: Heading,
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
    size: 'lg',
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    sub: false,
    highlight: false,
    isTruncated: false,
  },
  render: (args) => <Heading {...args}>Section heading</Heading>,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      <Note>
        Each size maps to a semantic heading level: 3xl–5xl render an h1, 2xl an
        h2, xl an h3, lg an h4, md an h5, xs–sm an h6.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Heading size={size}>Section heading</Heading>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Styles: Story = {
  render: () => (
    <Showcase>
      <Labeled label="default">
        <Heading size="lg">Section heading</Heading>
      </Labeled>
      <Labeled label="bold">
        <Heading size="lg" bold>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="italic">
        <Heading size="lg" italic>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="underline">
        <Heading size="lg" underline>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="strikeThrough">
        <Heading size="lg" strikeThrough>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="sub">
        <Heading size="lg" sub>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="highlight">
        <Heading size="lg" highlight>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="isTruncated" className="w-40">
        <Heading size="lg" isTruncated>
          A section heading long enough to be cut off
        </Heading>
      </Labeled>
    </Showcase>
  ),
};
