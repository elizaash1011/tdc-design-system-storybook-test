import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { ChevronDownIcon } from '@/components/ui/icon';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['sm', 'md', 'lg', 'xl'] as const;
const VARIANTS = ['underlined', 'outline', 'rounded'] as const;
const OPTIONS = ['Option A', 'Option B', 'Option C'] as const;

/**
 * `size` and `variant` live on `SelectTrigger`, while the state props live on
 * `Select`, so this wrapper takes both and is what the Controls panel drives.
 */
type SelectExampleProps = React.ComponentProps<typeof Select> &
  Pick<React.ComponentProps<typeof SelectTrigger>, 'size' | 'variant'> & {
    /**
     * `Select` reads `isReadOnly` at runtime (it disables the underlying
     * control) but leaves it out of its exported prop types, so it is declared
     * here to keep it reviewable.
     */
    isReadOnly?: boolean;
  };

function SelectExample({ size, variant, ...props }: SelectExampleProps) {
  return (
    <Select {...props} className="w-full max-w-sm">
      <SelectTrigger size={size} variant={variant} className="w-full">
        <SelectInput placeholder="Placeholder" />
        <SelectIcon as={ChevronDownIcon} className="mr-3 ml-auto" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {OPTIONS.map((option) => (
            <SelectItem key={option} label={option} value={option} />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

/** Controlled form, with a readout so the selection is visible outside the trigger. */
function SelectControlled() {
  const [value, setValue] = React.useState('');

  return (
    <VStack space="sm" className="w-full max-w-sm">
      <SelectExample selectedValue={value} onValueChange={setValue} />
      <Text size="sm" className="text-muted-foreground">
        selectedValue: {value || '—'}
      </Text>
    </VStack>
  );
}

/** State axes the source actually supports on `Select`. */
const STATES: { label: string; props: Partial<SelectExampleProps> }[] = [
  { label: 'default', props: {} },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isInvalid', props: { isInvalid: true } },
  { label: 'isReadOnly', props: { isReadOnly: true } },
  { label: 'isRequired', props: { isRequired: true } },
  { label: 'isFocused', props: { isFocused: true } },
  { label: 'isHovered', props: { isHovered: true } },
  { label: 'with a selection', props: { defaultValue: 'Option B', initialLabel: 'Option B' } },
];

const meta = {
  title: 'UI/Select',
  component: SelectExample,
  argTypes: {
    size: { control: 'select', options: SIZES },
    variant: { control: 'select', options: VARIANTS },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isFocused: { control: 'boolean' },
    isHovered: { control: 'boolean' },
  },
  args: {
    size: 'md',
    variant: 'outline',
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    isReadOnly: false,
    isFocused: false,
    isHovered: false,
  },
  render: (args) => <SelectExample {...args} />,
} satisfies Meta<typeof SelectExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size} className="w-full max-w-sm">
          <SelectExample size={size} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Variants: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant} className="w-full max-w-sm">
          <SelectExample variant={variant} />
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
          <SelectExample {...state.props} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Open: Story = {
  render: () => (
    <Showcase>
      <Note>
        The dropdown cannot be shown statically — click the trigger to open it.
        On web the portal renders an invisible native select overlaying the
        trigger, so the open list is the browser's own dropdown; on native the
        same markup renders the actionsheet (backdrop, drag indicator, items).
      </Note>
      <Labeled label="full composition" className="w-full max-w-sm">
        <SelectExample />
      </Labeled>
      <Labeled label="one item disabled" className="w-full max-w-sm">
        <Select className="w-full max-w-sm">
          <SelectTrigger className="w-full">
            <SelectInput placeholder="Placeholder" />
            <SelectIcon as={ChevronDownIcon} className="mr-3 ml-auto" />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Option A" value="Option A" />
              <SelectItem label="Option B (disabled)" value="Option B" isDisabled />
              <SelectItem label="Option C" value="Option C" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </Labeled>
    </Showcase>
  ),
};

export const Controlled: Story = {
  render: () => (
    <Showcase>
      <Labeled label="selectedValue + onValueChange">
        <SelectControlled />
      </Labeled>
    </Showcase>
  ),
};
