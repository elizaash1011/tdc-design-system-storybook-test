import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Labeled, Showcase } from '../helpers';

const VARIANTS = ['default'] as const;
const SIZES = ['sm', 'md', 'lg', 'xl'] as const;

/**
 * `size` only drives the input's text size; the box keeps its `h-[100px]`
 * base height, which is why the four sizes differ in type scale only.
 */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof Textarea>> }[] = [
  { label: 'default', props: {} },
  { label: 'isFocused', props: { isFocused: true } },
  { label: 'isHovered', props: { isHovered: true } },
  { label: 'isInvalid', props: { isInvalid: true } },
  { label: 'isInvalid + isFocused', props: { isInvalid: true, isFocused: true } },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isReadOnly', props: { isReadOnly: true } },
  { label: 'isRequired', props: { isRequired: true } },
];

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    size: { control: 'select', options: SIZES },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isFocused: { control: 'boolean' },
    isHovered: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'md',
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    isFocused: false,
    isHovered: false,
  },
  render: (args) => (
    <Textarea {...args} className="max-w-sm">
      <TextareaInput placeholder="Placeholder" />
    </Textarea>
  ),
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant} className="w-full max-w-sm">
          <Textarea variant={variant}>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size} className="w-full max-w-sm">
          <Textarea size={size}>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const States: Story = {
  render: () => (
    <Showcase>
      {STATES.map((state) => (
        <Labeled key={state.label} label={state.label} className="w-full max-w-sm">
          <Textarea {...state.props}>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Content: Story = {
  render: () => (
    <Showcase>
      <Labeled label="placeholder" className="w-full max-w-sm">
        <Textarea>
          <TextareaInput placeholder="Placeholder" />
        </Textarea>
      </Labeled>
      <Labeled label="defaultValue" className="w-full max-w-sm">
        <Textarea>
          <TextareaInput defaultValue={'Line one\nLine two\nLine three'} />
        </Textarea>
      </Labeled>
      <Labeled label="defaultValue + isReadOnly" className="w-full max-w-sm">
        <Textarea isReadOnly>
          <TextareaInput defaultValue={'Line one\nLine two'} />
        </Textarea>
      </Labeled>
      <Labeled label="defaultValue + isDisabled" className="w-full max-w-sm">
        <Textarea isDisabled>
          <TextareaInput defaultValue={'Line one\nLine two'} />
        </Textarea>
      </Labeled>
    </Showcase>
  ),
};
