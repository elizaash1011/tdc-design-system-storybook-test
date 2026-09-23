import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Labeled, Note, Showcase } from '../helpers';

const ORIENTATIONS = ['horizontal', 'vertical'] as const;
const VALUES = [0, 25, 50, 100] as const;

const meta = {
  title: 'UI/Progress',
  component: Progress,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    orientation: { control: 'select', options: ORIENTATIONS },
  },
  args: {
    value: 50,
    orientation: 'horizontal',
  },
  render: (args) => (
    <Box className={args.orientation === 'vertical' ? 'h-40' : 'w-64'}>
      <Progress {...args}>
        <ProgressFilledTrack />
      </Progress>
    </Box>
  ),
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Values: Story = {
  render: () => (
    <Showcase>
      {VALUES.map((value) => (
        <Labeled key={value} label={`value={${value}}`}>
          <Box className="w-64">
            <Progress value={value}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Orientation: Story = {
  render: () => (
    <>
      <Note>
        The vertical track is `h-full`, so it only shows up inside a parent with a
        fixed height.
      </Note>
      <Showcase>
        <Labeled label="horizontal">
          <Box className="w-64">
            <Progress orientation="horizontal" value={60}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
        <Labeled label="vertical">
          <Box className="h-40">
            <Progress orientation="vertical" value={60}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
      </Showcase>
    </>
  ),
};

export const VerticalValues: Story = {
  render: () => (
    <Showcase>
      <Labeled label="0 / 25 / 50 / 100">
        <HStack space="lg" className="h-40">
          {VALUES.map((value) => (
            <Progress key={value} orientation="vertical" value={value}>
              <ProgressFilledTrack />
            </Progress>
          ))}
        </HStack>
      </Labeled>
    </Showcase>
  ),
};

export const CustomRange: Story = {
  render: () => (
    <>
      <Note>
        `min` and `max` rescale the value, so the same `value` fills a different
        proportion of the track.
      </Note>
      <Showcase>
        <Labeled label="min=0 max=100 value=30">
          <Box className="w-64">
            <Progress min={0} max={100} value={30}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
        <Labeled label="min=0 max=50 value=30">
          <Box className="w-64">
            <Progress min={0} max={50} value={30}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
        <Labeled label="min=20 max=40 value=30">
          <Box className="w-64">
            <Progress min={20} max={40} value={30}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
      </Showcase>
    </>
  ),
};

const THICKNESSES = [
  { label: 'h-1', className: 'h-1' },
  { label: 'h-2 (default)', className: 'h-2' },
  { label: 'h-3', className: 'h-3' },
  { label: 'h-4', className: 'h-4' },
] as const;

export const Thickness: Story = {
  render: () => (
    <Showcase>
      {THICKNESSES.map((thickness) => (
        <Labeled key={thickness.label} label={thickness.label}>
          <Box className="w-64">
            <Progress value={60} className={thickness.className}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
      ))}
    </Showcase>
  ),
};
