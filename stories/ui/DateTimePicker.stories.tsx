import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  DateTimePicker,
  DateTimePickerIcon,
  DateTimePickerInput,
  DateTimePickerTrigger,
} from '@/components/ui/date-time-picker';
import { CalendarDaysIcon, ClockIcon } from '@/components/ui/icon';
import { Labeled, Note, Section, Showcase } from '../helpers';

const SIZES = ['sm', 'md', 'lg', 'xl'] as const;
const VARIANTS = ['underlined', 'outline', 'rounded'] as const;
const MODES = ['date', 'time', 'datetime'] as const;

/** Fixed so the rendered value never drifts between screenshots. */
const SAMPLE = new Date(2026, 0, 15, 9, 30);

const meta = {
  title: 'UI/DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    mode: { control: 'select', options: MODES },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: {
    mode: 'date',
    disabled: false,
    placeholder: 'Select a date',
    format: 'YYYY-MM-DD',
  },
  render: (args) => (
    <Showcase className="w-full">
      <Note>
        DateTimePicker is marked alpha upstream in gluestack-ui v5 and its API
        may change. Two further caveats on this page: the picker surface itself
        comes from @react-native-community/datetimepicker, which has no web
        support, so pressing a trigger will not open a native spinner here; and
        the component ships a separate web implementation
        (date-time-picker/index.web.tsx) that renders its own bordered input and
        ignores the Trigger / Input / Icon children below. What you see in the
        browser is therefore the web fallback, not the composition in the code.
      </Note>
      <Labeled label="trigger + input + icon" className="w-full max-w-xs">
        <DateTimePicker {...args} value={SAMPLE}>
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Labeled>
    </Showcase>
  ),
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `size` sets the trigger&apos;s minimum height and is inherited by the
        input text and the icon through the style context. It is a prop on
        `DateTimePickerTrigger`, not on the root.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size} label={size} className="w-full max-w-xs">
          <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD">
            <DateTimePickerTrigger size={size}>
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Variants: Story = {
  render: () => (
    <Showcase className="w-full">
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant} className="w-full max-w-xs">
          <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD">
            <DateTimePickerTrigger variant={variant}>
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Modes: Story = {
  render: () => (
    <Showcase className="w-full">
      <Section title="mode">
        {MODES.map((mode) => (
          <Labeled key={mode} label={mode} className="w-full max-w-xs">
            <DateTimePicker mode={mode} value={SAMPLE}>
              <DateTimePickerTrigger>
                <DateTimePickerInput />
                <DateTimePickerIcon
                  as={mode === 'time' ? ClockIcon : CalendarDaysIcon}
                  className="mr-3"
                />
              </DateTimePickerTrigger>
            </DateTimePicker>
          </Labeled>
        ))}
      </Section>
    </Showcase>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        With no `value`, the input falls back to `placeholder`, styled by
        `placeholder:text-muted-foreground`.
      </Note>
      <Labeled label="empty" className="w-full max-w-xs">
        <DateTimePicker mode="date" placeholder="Select a date">
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Labeled>
      <Labeled label="filled" className="w-full max-w-xs">
        <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD">
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Labeled>
    </Showcase>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `disabled` is read from the picker context by the trigger, which then
        renders at 40% opacity and stops opening the picker.
      </Note>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant} className="w-full max-w-xs">
          <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD" disabled>
            <DateTimePickerTrigger variant={variant}>
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </Labeled>
      ))}
    </Showcase>
  ),
};
