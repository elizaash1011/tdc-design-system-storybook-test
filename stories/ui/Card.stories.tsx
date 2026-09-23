import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Showcase } from '../helpers';

const SIZES = ['default', 'sm'] as const;

const meta = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    size: { control: 'select', options: SIZES },
  },
  args: {
    size: 'default',
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <VStack space="xs">
        <Heading size="md">Title</Heading>
        <Text size="sm" className="text-muted-foreground">
          Description explaining what this card contains.
        </Text>
      </VStack>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Card size={size} className="w-80">
            <VStack space="xs">
              <Heading size="md">Title</Heading>
              <Text size="sm" className="text-muted-foreground">
                Description explaining what this card contains.
              </Text>
            </VStack>
          </Card>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Sections: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Card size={size} className="w-80">
            <VStack space="xs">
              <Text size="xs" className="uppercase tracking-wide text-muted-foreground">
                Overline
              </Text>
              <Heading size="lg">Title</Heading>
            </VStack>
            <Text size="sm" className="text-muted-foreground">
              The card lays its children out in a column, so each block relies on the
              card gap rather than its own margins.
            </Text>
            <VStack space="xs" className="rounded-md bg-muted p-3">
              <Text size="sm" className="font-medium text-foreground">
                Nested block
              </Text>
              <Text size="xs" className="text-muted-foreground">
                Secondary detail
              </Text>
            </VStack>
          </Card>
        </Labeled>
      ))}
    </Showcase>
  ),
};
