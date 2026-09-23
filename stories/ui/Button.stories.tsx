import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Button, ButtonGroup, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { Labeled, Showcase } from '../helpers';

const VARIANTS = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
const SIZES = ['default', 'sm', 'lg', 'icon'] as const;

const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    size: { control: 'select', options: SIZES },
    isDisabled: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'default',
    isDisabled: false,
  },
  render: (args) => (
    <Button {...args}>
      <ButtonText>Button</ButtonText>
    </Button>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Button variant={variant}>
            <ButtonText>Button</ButtonText>
          </Button>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Button size={size}>
            <ButtonText>Button</ButtonText>
          </Button>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Button variant={variant} isDisabled>
            <ButtonText>Disabled</ButtonText>
          </Button>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Loading: Story = {
  render: () => (
    <Showcase>
      <Labeled label="default">
        <Button isDisabled>
          <ButtonSpinner />
          <ButtonText>Loading</ButtonText>
        </Button>
      </Labeled>
      <Labeled label="outline">
        <Button variant="outline" isDisabled>
          <ButtonSpinner />
          <ButtonText>Loading</ButtonText>
        </Button>
      </Labeled>
    </Showcase>
  ),
};

export const Group: Story = {
  render: () => (
    <Showcase>
      <Labeled label="spaced">
        <ButtonGroup space="sm">
          <Button variant="outline">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button>
            <ButtonText>Save</ButtonText>
          </Button>
        </ButtonGroup>
      </Labeled>
      <Labeled label="attached">
        <ButtonGroup isAttached>
          <Button variant="outline">
            <ButtonText>Left</ButtonText>
          </Button>
          <Button variant="outline">
            <ButtonText>Right</ButtonText>
          </Button>
        </ButtonGroup>
      </Labeled>
    </Showcase>
  ),
};
