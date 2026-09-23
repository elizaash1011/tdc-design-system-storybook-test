import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import {
  Calendar,
  CalendarBody,
  CalendarDayText,
  CalendarFooter,
  CalendarGrid,
  CalendarHeader,
  CalendarHeaderMonthSelect,
  CalendarHeaderNextButton,
  CalendarHeaderPrevButton,
  CalendarHeaderTitle,
  CalendarHeaderYearSelect,
  CalendarWeekDaysHeader,
  type DayState,
} from '@/components/ui/calendar';
import { ChevronLeftIcon, ChevronRightIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Section, Showcase } from '../helpers';

/**
 * `calendarStyle` in calendar/styles.tsx declares a `size` variant, but
 * `CalendarRoot` only forwards `class`, so a `size` prop never reaches the
 * tva. The classNames below are the variant's own values, applied by hand, so
 * the padding/gap scale is still reviewable against Figma.
 */
const SIZES = [
  { name: 'sm', className: 'p-2 gap-2' },
  { name: 'md', className: 'p-2 gap-1' },
  { name: 'lg', className: 'p-6 gap-6' },
] as const;

/** Dates are relative to today so the `today` day-state is always on screen. */
const TODAY = new Date();

function dayOffset(days: number) {
  const date = new Date(TODAY);
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * The composition every story reuses. `CalendarGrid` and
 * `CalendarWeekDaysHeader` auto-render from context when given no children, so
 * only the header chrome has to be spelled out.
 */
function MonthComposition() {
  return (
    <>
      <CalendarHeader>
        <CalendarHeaderPrevButton>
          <Icon as={ChevronLeftIcon} size="sm" className="text-foreground" />
        </CalendarHeaderPrevButton>
        <CalendarHeaderTitle />
        <CalendarHeaderNextButton>
          <Icon as={ChevronRightIcon} size="sm" className="text-foreground" />
        </CalendarHeaderNextButton>
      </CalendarHeader>
      <CalendarWeekDaysHeader />
      <CalendarBody>
        <CalendarGrid />
      </CalendarBody>
    </>
  );
}

/** Days carrying an indicator dot, by day-of-month. */
const MARKED_DAYS = [4, 11, 19] as const;

/**
 * `renderDay` is the supported hook for per-day content. Returning null falls
 * back to the default day rendering, so only marked days are customised.
 */
function renderDayWithIndicator(date: Date, state: DayState) {
  if (state.isOutsideMonth) return null;
  if (!MARKED_DAYS.includes(date.getDate() as (typeof MARKED_DAYS)[number])) {
    return null;
  }

  return (
    <>
      <CalendarDayText state={state}>{date.getDate()}</CalendarDayText>
      <Box className="absolute bottom-1 h-1 w-1 rounded-full bg-primary" />
    </>
  );
}

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  argTypes: {
    showWeekNumbers: { control: 'boolean' },
    showOutsideDays: { control: 'boolean' },
    fixedWeeks: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    firstDayOfWeek: { control: 'select', options: [0, 1] },
  },
  args: {
    showWeekNumbers: false,
    showOutsideDays: true,
    fixedWeeks: false,
    isDisabled: false,
    isReadOnly: false,
    firstDayOfWeek: 0,
  },
  render: (args) => (
    <Showcase>
      <Note>
        Calendar is marked alpha upstream in gluestack-ui v5. Its composition
        and prop names may change in a later release, so treat this page as a
        snapshot rather than a stable contract.
      </Note>
      <Calendar {...args}>
        <MonthComposition />
      </Calendar>
    </Showcase>
  ),
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      <Note>
        The `size` variant lives in calendar/styles.tsx but the root component
        never forwards it, so these three apply the variant&apos;s own padding
        and gap classes directly.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size.name} label={size.name}>
          <Calendar className={size.className}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const DayStates: Story = {
  render: () => (
    <Showcase>
      <Note>
        The eight day-states are driven by the calendar&apos;s own selection and
        constraint props, not by a prop on the day. Each example below puts one
        or two of them on screen; `default` and `today` are visible in every
        one.
      </Note>

      <Section title="selected / today / outside-month">
        <Labeled label="mode=single, defaultValue=today">
          <Calendar mode="single" defaultValue={TODAY}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>

      <Section title="disabled">
        <Labeled label="disabledDates">
          <Calendar
            mode="single"
            disabledDates={[dayOffset(1), dayOffset(2), dayOffset(3)]}
          >
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>

      <Section title="range-start / range-middle / range-end">
        <Labeled label="mode=range">
          <Calendar
            mode="range"
            defaultValue={{ from: dayOffset(-3), to: dayOffset(3) }}
          >
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>

      <Section title="outside-month hidden">
        <Labeled label="showOutsideDays=false">
          <Calendar mode="single" showOutsideDays={false}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>
    </Showcase>
  ),
};

export const Modes: Story = {
  render: () => (
    <Showcase>
      <Labeled label="single">
        <Calendar mode="single" defaultValue={TODAY}>
          <MonthComposition />
        </Calendar>
      </Labeled>
      <Labeled label="multiple">
        <Calendar
          mode="multiple"
          defaultValue={[dayOffset(-2), TODAY, dayOffset(4)]}
        >
          <MonthComposition />
        </Calendar>
      </Labeled>
      <Labeled label="range">
        <Calendar
          mode="range"
          defaultValue={{ from: dayOffset(-4), to: dayOffset(2) }}
        >
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
  ),
};

export const WeekNumbers: Story = {
  render: () => (
    <Showcase>
      <Labeled label="showWeekNumbers + firstDayOfWeek=1">
        <Calendar mode="single" showWeekNumbers firstDayOfWeek={1} fixedWeeks>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
  ),
};

export const DayIndicators: Story = {
  render: () => (
    <Showcase>
      <Note>
        This uses `renderDay` rather than the `markers` prop. `markers` is
        looked up with `date.toISOString()` inside the week renderer but written
        with a local-timezone key elsewhere, so marker keys silently miss for
        any viewer west of UTC. `renderDay` has no such problem and lets the dot
        use a theme token.
      </Note>
      <Labeled label="renderDay indicator dots">
        <Calendar mode="single" renderDay={renderDayWithIndicator}>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
  ),
};

export const MonthYearPicker: Story = {
  render: () => (
    <Showcase>
      <Note>
        The month and year selects open a `Menu`, so this story depends on the
        overlay provider that wraps every story.
      </Note>
      <Labeled label="enableMonthYearPicker">
        <Calendar
          mode="single"
          enableMonthYearPicker
          minYear={TODAY.getFullYear() - 2}
          maxYear={TODAY.getFullYear() + 2}
        >
          <CalendarHeader>
            <CalendarHeaderPrevButton>
              <Icon as={ChevronLeftIcon} size="sm" className="text-foreground" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderMonthSelect />
            <CalendarHeaderYearSelect />
            <CalendarHeaderNextButton>
              <Icon as={ChevronRightIcon} size="sm" className="text-foreground" />
            </CalendarHeaderNextButton>
          </CalendarHeader>
          <CalendarWeekDaysHeader />
          <CalendarBody>
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
      </Labeled>
    </Showcase>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Showcase>
      <Labeled label="CalendarFooter">
        <Calendar mode="single" defaultValue={TODAY}>
          <MonthComposition />
          <CalendarFooter>
            <Text size="sm" className="text-muted-foreground">
              Footer slot — put confirm/clear actions here.
            </Text>
          </CalendarFooter>
        </Calendar>
      </Labeled>
    </Showcase>
  ),
};

export const DisabledAndReadOnly: Story = {
  render: () => (
    <Showcase>
      <Note>
        `isDisabled` also disables the month navigation buttons, which is where
        the `data-[disabled=true]` style on the header button shows up.
        `isReadOnly` blocks selection but leaves navigation live.
      </Note>
      <Labeled label="isDisabled">
        <Calendar mode="single" defaultValue={TODAY} isDisabled>
          <MonthComposition />
        </Calendar>
      </Labeled>
      <Labeled label="isReadOnly">
        <Calendar mode="single" defaultValue={TODAY} isReadOnly>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
  ),
};
