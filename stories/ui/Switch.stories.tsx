import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['sm', 'md', 'lg'] as const;

/**
 * `Switch` wraps the platform switch, so its only tva axis is `size` (a scale
 * transform). Everything else is state: `data-[checked|disabled|invalid|focus]`.
 */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof Switch>> }[] = [
  { label: 'off', props: { value: false } },
  { label: 'on', props: { value: true } },
  { label: 'isDisabled — off', props: { value: false, isDisabled: true } },
  { label: 'isDisabled — on', props: { value: true, isDisabled: true } },
  { label: 'isInvalid — off', props: { value: false, isInvalid: true } },
  { label: 'isInvalid — on', props: { value: true, isInvalid: true } },
];

/**
 * Keeps the switch clickable while still honouring the `value` control, so the
 * Controls panel and direct interaction both work.
 */
function SwitchControl({ value, ...props }: React.ComponentProps<typeof Switch>) {
  const [checked, setChecked] = React.useState(Boolean(value));

  React.useEffect(() => {
    setChecked(Boolean(value));
  }, [value]);

  return <Switch {...props} value={checked} onValueChange={setChecked} />;
}

/** The usual product shape: a switch next to its label. */
function SwitchWithLabel() {
  const [checked, setChecked] = React.useState(true);

  return (
    <HStack space="md" className="items-center">
      <Switch value={checked} onValueChange={setChecked} />
      <Text className="text-foreground">Label</Text>
    </HStack>
  );
}

const meta = {
  title: 'UI/Switch',
  component: Switch,
  argTypes: {
    size: { control: 'select', options: SIZES },
    value: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    size: 'md',
    value: false,
    isDisabled: false,
    isInvalid: false,
  },
  render: (args) => <SwitchControl {...args} />,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      <Note>
        Sizes are scale transforms — sm is 0.75x and lg is 1.25x the platform
        switch, so the hit area scales with them.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Switch size={size} value />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const States: Story = {
  render: () => (
    <Showcase>
      {STATES.map((state) => (
        <Labeled key={state.label} label={state.label}>
          <Switch {...state.props} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Showcase>
      <Labeled label="interactive">
        <SwitchWithLabel />
      </Labeled>
    </Showcase>
  ),
};
