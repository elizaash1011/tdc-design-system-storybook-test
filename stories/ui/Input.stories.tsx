import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { EyeIcon, SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * `Input` exposes no size/variant axes — its tva has a base only. Everything
 * worth reviewing is a state, driven by the props below and reflected as
 * `data-[focus|invalid|disabled|readonly|required]` on the root.
 */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof Input>> }[] = [
  { label: 'default', props: {} },
  { label: 'isFocused', props: { isFocused: true } },
  { label: 'isInvalid', props: { isInvalid: true } },
  { label: 'isInvalid + isFocused', props: { isInvalid: true, isFocused: true } },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isReadOnly', props: { isReadOnly: true } },
  { label: 'isRequired', props: { isRequired: true } },
];

const meta = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isFocused: { control: 'boolean' },
    isHovered: { control: 'boolean' },
  },
  args: {
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    isFocused: false,
    isHovered: false,
  },
  render: (args) => (
    <Input {...args} className="max-w-sm">
      <InputField placeholder="Placeholder" />
    </Input>
  ),
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <Showcase>
      {STATES.map((state) => (
        <Labeled key={state.label} label={state.label} className="w-full max-w-sm">
          <Input {...state.props}>
            <InputField placeholder="Placeholder" />
          </Input>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Content: Story = {
  render: () => (
    <Showcase>
      <Labeled label="placeholder" className="w-full max-w-sm">
        <Input>
          <InputField placeholder="Placeholder" />
        </Input>
      </Labeled>
      <Labeled label="defaultValue" className="w-full max-w-sm">
        <Input>
          <InputField defaultValue="Value" />
        </Input>
      </Labeled>
      <Labeled label="defaultValue + isReadOnly" className="w-full max-w-sm">
        <Input isReadOnly>
          <InputField defaultValue="Value" />
        </Input>
      </Labeled>
      <Labeled label="defaultValue + isDisabled" className="w-full max-w-sm">
        <Input isDisabled>
          <InputField defaultValue="Value" />
        </Input>
      </Labeled>
      <Labeled label='type="password"' className="w-full max-w-sm">
        <Input>
          <InputField type="password" defaultValue="Password" />
        </Input>
      </Labeled>
    </Showcase>
  ),
};

export const WithSlots: Story = {
  render: () => (
    <Showcase>
      <Note>
        InputSlot is pressable and focuses the field by default; InputIcon takes
        an icon through the as prop.
      </Note>
      <Labeled label="leading icon" className="w-full max-w-sm">
        <Input>
          <InputSlot>
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Placeholder" />
        </Input>
      </Labeled>
      <Labeled label="trailing icon" className="w-full max-w-sm">
        <Input>
          <InputField placeholder="Placeholder" />
          <InputSlot>
            <InputIcon as={EyeIcon} />
          </InputSlot>
        </Input>
      </Labeled>
      <Labeled label="both" className="w-full max-w-sm">
        <Input>
          <InputSlot>
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Placeholder" />
          <InputSlot>
            <InputIcon as={EyeIcon} />
          </InputSlot>
        </Input>
      </Labeled>
    </Showcase>
  ),
};
