import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge';
import { CheckIcon } from '@/components/ui/icon';
import { Labeled, Showcase } from '../helpers';

const VARIANTS = ['default', 'secondary', 'destructive', 'outline'] as const;

const meta = {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
  },
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Badge {...args}>
      <BadgeText>Label</BadgeText>
    </Badge>
  ),
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Badge variant={variant}>
            <BadgeText>Label</BadgeText>
          </Badge>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Badge variant={variant} className="gap-1">
            <BadgeIcon as={CheckIcon} />
            <BadgeText>Label</BadgeText>
          </Badge>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Badge variant={variant}>
            <BadgeIcon as={CheckIcon} />
          </Badge>
        </Labeled>
      ))}
    </Showcase>
  ),
};
