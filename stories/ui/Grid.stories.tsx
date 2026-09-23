import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Grid, GridItem } from '@/components/ui/grid';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * Column counts and spans are declared as literal class strings so the
 * Tailwind/NativeWind scanner can see them — `grid-cols-${n}` would never be
 * generated.
 */
const COLUMNS = ['grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-6'] as const;
const SPANS = ['col-span-1', 'col-span-2', 'col-span-3', 'col-span-6'] as const;
const GAPS = ['gap-0', 'gap-2', 'gap-4', 'gap-6'] as const;

/** Visible filler so each grid cell can be seen. */
function Cell({ label }: { label: string }) {
  return (
    <Text
      size="sm"
      className="rounded-sm border border-border bg-muted px-2 py-3 text-center text-muted-foreground"
    >
      {label}
    </Text>
  );
}

const CELLS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'] as const;

const meta = {
  title: 'UI/Grid',
  component: Grid,
  argTypes: {
    className: { control: 'text' },
    _extra: { control: 'object' },
  },
  args: {
    className: 'gap-3',
    _extra: { className: 'grid-cols-3' },
  },
  render: (args) => (
    <Grid {...args}>
      {CELLS.map((label) => (
        <GridItem key={label} _extra={{ className: 'col-span-1' }}>
          <Cell label={label} />
        </GridItem>
      ))}
    </Grid>
  ),
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Columns: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        The column count is passed through the _extra style prop, as a
        grid-cols-N class. Each GridItem declares its own col-span-N the same
        way, and the gap comes from a gap-N class on the Grid itself.
      </Note>
      {COLUMNS.map((columns) => (
        <Labeled key={columns} label={columns} className="w-full">
          <Grid className="gap-3" _extra={{ className: columns }}>
            {CELLS.map((label) => (
              <GridItem key={label} _extra={{ className: 'col-span-1' }}>
                <Cell label={label} />
              </GridItem>
            ))}
          </Grid>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const ColumnSpan: Story = {
  render: () => (
    <Showcase className="w-full">
      {SPANS.map((span) => (
        <Labeled key={span} label={`${span} of 6`} className="w-full">
          <Grid className="gap-3" _extra={{ className: 'grid-cols-6' }}>
            <GridItem _extra={{ className: span }}>
              <Cell label={span} />
            </GridItem>
          </Grid>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Gap: Story = {
  render: () => (
    <Showcase className="w-full">
      {GAPS.map((gap) => (
        <Labeled key={gap} label={gap} className="w-full">
          <Grid className={gap} _extra={{ className: 'grid-cols-3' }}>
            {CELLS.map((label) => (
              <GridItem key={label} _extra={{ className: 'col-span-1' }}>
                <Cell label={label} />
              </GridItem>
            ))}
          </Grid>
        </Labeled>
      ))}
    </Showcase>
  ),
};
