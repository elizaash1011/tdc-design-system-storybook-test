import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['small', 'large'] as const;
const NUMERIC_SIZES = [16, 24, 40] as const;
const COLORS = [
  'text-foreground',
  'text-muted-foreground',
  'text-primary',
  'text-destructive',
] as const;

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select', options: SIZES },
    animating: { control: 'boolean' },
  },
  args: {
    size: 'small',
    animating: true,
  },
  render: (args) => <Spinner {...args} />,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <>
      <Note>
        Spinner declares no style variants — it is the React Native
        `ActivityIndicator`, so `size` takes the platform values `small` and `large`.
      </Note>
      <Showcase>
        {SIZES.map((size) => (
          <Labeled key={size} label={size}>
            <Spinner size={size} />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const NumericSizes: Story = {
  render: () => (
    <Showcase>
      {NUMERIC_SIZES.map((size) => (
        <Labeled key={size} label={`size={${size}}`}>
          <Spinner size={size} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <Note>
        The spinner maps a text colour class onto the native `color` prop, so it takes
        theme tokens through className.
      </Note>
      <Showcase>
        {COLORS.map((color) => (
          <Labeled key={color} label={color}>
            <Spinner size="large" className={color} />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Animating: Story = {
  render: () => (
    <Showcase>
      <Labeled label="animating">
        <Spinner size="large" animating />
      </Labeled>
      <Labeled label="animating={false}">
        <Spinner size="large" animating={false} />
      </Labeled>
      <Labeled label="animating={false} + hidesWhenStopped={false}">
        <Spinner size="large" animating={false} hidesWhenStopped={false} />
      </Labeled>
    </Showcase>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <Showcase>
      <Labeled label="inline">
        <HStack space="sm" className="items-center">
          <Spinner size="small" />
          <Text size="sm" className="text-muted-foreground">
            Loading
          </Text>
        </HStack>
      </Labeled>
      <Labeled label="in a surface">
        <HStack
          space="sm"
          className="items-center rounded-md border border-border bg-card px-3 py-2"
        >
          <Spinner size="small" className="text-primary" />
          <Text size="sm" className="text-card-foreground">
            Loading
          </Text>
        </HStack>
      </Labeled>
    </Showcase>
  ),
};
