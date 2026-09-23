import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { CircleIcon } from '@/components/ui/icon';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['sm', 'md', 'lg'] as const;
const OPTIONS = ['Option A', 'Option B', 'Option C'] as const;

/** Per-radio states. `data-[disabled]` and `data-[invalid]` are the only ones the tva styles. */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof Radio>> }[] = [
  { label: 'default', props: {} },
  { label: 'isInvalid', props: { isInvalid: true } },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isHovered', props: { isHovered: true } },
];

/** `RadioGroup` is controlled, so every interactive story needs state around it. */
function RadioGroupExample({
  size,
  selected = 'Option A',
  ...groupProps
}: React.ComponentProps<typeof RadioGroup> & {
  size?: (typeof SIZES)[number];
  selected?: string;
}) {
  const [value, setValue] = React.useState(selected);

  return (
    <RadioGroup {...groupProps} value={value} onChange={setValue}>
      {OPTIONS.map((option) => (
        <Radio key={option} value={option} size={size}>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>{option}</RadioLabel>
        </Radio>
      ))}
    </RadioGroup>
  );
}

/** A single radio, still inside a group because that is the only way it works. */
function RadioControl(props: React.ComponentProps<typeof Radio>) {
  const [value, setValue] = React.useState('option-a');

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio {...props}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  );
}

const meta = {
  title: 'UI/Radio',
  component: Radio,
  argTypes: {
    size: { control: 'select', options: SIZES },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    value: 'option-a',
    size: 'md',
    isDisabled: false,
    isInvalid: false,
  },
  render: (args) => <RadioControl {...args} />,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      <Note>
        Size is set on each Radio, not on the group — it flows down to the
        indicator, icon and label through context.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <RadioGroup value="Option A">
            <Radio value="Option A" size={size}>
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Label</RadioLabel>
            </Radio>
          </RadioGroup>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const States: Story = {
  render: () => (
    <Showcase>
      {STATES.map((state) => (
        <Labeled key={state.label} label={`${state.label} — unselected / selected`}>
          <RadioGroup value="Option B">
            <Radio value="Option A" {...state.props}>
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Unselected</RadioLabel>
            </Radio>
            <Radio value="Option B" {...state.props}>
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Selected</RadioLabel>
            </Radio>
          </RadioGroup>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Group: Story = {
  render: () => (
    <Showcase>
      <Labeled label="interactive group">
        <RadioGroupExample />
      </Labeled>
    </Showcase>
  ),
};

export const GroupStates: Story = {
  render: () => (
    <Showcase>
      <Note>
        A group passes its state down to every radio inside it. RadioGroup
        supports isDisabled, isInvalid and isReadOnly.
      </Note>
      <Labeled label="isDisabled">
        <RadioGroup value="Option A" isDisabled>
          {OPTIONS.map((option) => (
            <Radio key={option} value={option}>
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>{option}</RadioLabel>
            </Radio>
          ))}
        </RadioGroup>
      </Labeled>
      <Labeled label="isInvalid">
        <RadioGroup value="Option A" isInvalid>
          {OPTIONS.map((option) => (
            <Radio key={option} value={option}>
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>{option}</RadioLabel>
            </Radio>
          ))}
        </RadioGroup>
      </Labeled>
      <Labeled label="isReadOnly">
        <RadioGroup value="Option A" isReadOnly>
          {OPTIONS.map((option) => (
            <Radio key={option} value={option}>
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>{option}</RadioLabel>
            </Radio>
          ))}
        </RadioGroup>
      </Labeled>
    </Showcase>
  ),
};
