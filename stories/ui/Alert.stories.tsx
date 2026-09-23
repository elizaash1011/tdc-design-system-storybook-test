import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import { AlertCircleIcon, InfoIcon } from '@/components/ui/icon';
import { Labeled, Showcase } from '../helpers';

const VARIANTS = ['default', 'destructive'] as const;

const meta = {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
  },
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args} className="w-80">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of the current state.</AlertText>
    </Alert>
  ),
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Alert variant={variant} className="w-80">
            <AlertIcon as={variant === 'destructive' ? AlertCircleIcon : InfoIcon} />
            <AlertText>Description of the current state.</AlertText>
          </Alert>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const TextOnly: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Alert variant={variant} className="w-80">
            <AlertText>Description without a leading icon.</AlertText>
          </Alert>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const WrappingText: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Alert variant={variant} className="w-80">
            <AlertIcon as={InfoIcon} />
            <AlertText>
              A longer description that wraps onto several lines, so the leading icon
              stays aligned to the first line of text.
            </AlertText>
          </Alert>
        </Labeled>
      ))}
    </Showcase>
  ),
};
