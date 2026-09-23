import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const ORIENTATIONS = ['horizontal', 'vertical'] as const;
const REVERSED = [false, true] as const;

/** The only states the tva styles are `data-[disabled]` and `data-[hover]` (on the thumb). */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof Slider>> }[] = [
  { label: 'default', props: {} },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isReadOnly', props: { isReadOnly: true } },
];

/** The track/filled-track/thumb composition, shared by every story below. */
function SliderBody() {
  return (
    <>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </>
  );
}

/**
 * Controlled slider with a value readout. The uncontrolled form (`defaultValue`)
 * is what the Default story uses, so both paths are covered.
 */
function SliderControlled() {
  const [value, setValue] = React.useState(40);

  return (
    <VStack space="sm" className="w-full max-w-sm">
      <Slider value={value} onChange={setValue}>
        <SliderBody />
      </Slider>
      <Text size="sm" className="text-muted-foreground">
        value: {Math.round(value)}
      </Text>
    </VStack>
  );
}

const meta = {
  title: 'UI/Slider',
  component: Slider,
  argTypes: {
    orientation: { control: 'select', options: ORIENTATIONS },
    isReversed: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    defaultValue: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    step: { control: 'number' },
  },
  args: {
    orientation: 'horizontal',
    isReversed: false,
    isDisabled: false,
    isReadOnly: false,
    defaultValue: 40,
    minValue: 0,
    maxValue: 100,
    step: 1,
  },
  render: (args) => (
    <VStack className={args.orientation === 'vertical' ? 'h-48' : 'w-full max-w-sm'}>
      <Slider {...args}>
        <SliderBody />
      </Slider>
    </VStack>
  ),
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Orientations: Story = {
  render: () => (
    <Showcase>
      <Note>
        The vertical slider stretches to its parent height, so it needs a
        container with a fixed height to be visible.
      </Note>
      {ORIENTATIONS.map((orientation) => (
        <Labeled key={orientation} label={orientation}>
          <VStack className={orientation === 'vertical' ? 'h-48' : 'w-full max-w-sm'}>
            <Slider orientation={orientation} defaultValue={40}>
              <SliderBody />
            </Slider>
          </VStack>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Reversed: Story = {
  render: () => (
    <Showcase>
      {REVERSED.map((isReversed) => (
        <Labeled key={String(isReversed)} label={`isReversed: ${isReversed}`}>
          <VStack className="w-full max-w-sm">
            <Slider isReversed={isReversed} defaultValue={40}>
              <SliderBody />
            </Slider>
          </VStack>
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
          <VStack className="w-full max-w-sm">
            <Slider {...state.props} defaultValue={40}>
              <SliderBody />
            </Slider>
          </VStack>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Steps: Story = {
  render: () => (
    <Showcase>
      <Labeled label="step: 1">
        <VStack className="w-full max-w-sm">
          <Slider defaultValue={40} step={1}>
            <SliderBody />
          </Slider>
        </VStack>
      </Labeled>
      <Labeled label="step: 25">
        <VStack className="w-full max-w-sm">
          <Slider defaultValue={50} step={25}>
            <SliderBody />
          </Slider>
        </VStack>
      </Labeled>
      <Labeled label="minValue: -50, maxValue: 50">
        <VStack className="w-full max-w-sm">
          <Slider defaultValue={0} minValue={-50} maxValue={50}>
            <SliderBody />
          </Slider>
        </VStack>
      </Labeled>
    </Showcase>
  ),
};

export const Controlled: Story = {
  render: () => (
    <Showcase>
      <Labeled label="value + onChange">
        <SliderControlled />
      </Labeled>
    </Showcase>
  ),
};
