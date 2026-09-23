import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const VARIANTS = ['sharp', 'circular', 'rounded'] as const;
const SPEEDS = [1, 2, 3, 4] as const;
const GAPS = [1, 2, 3, 4] as const;
const LINE_COUNTS = [1, 2, 3, 4] as const;

const ALPHA_NOTE =
  'Skeleton is marked alpha upstream in gluestack-ui, so its API may change between releases.';

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    speed: { control: 'select', options: SPEEDS },
    isLoaded: { control: 'boolean' },
  },
  args: {
    variant: 'rounded',
    speed: 4,
    isLoaded: false,
  },
  render: (args) => (
    <Skeleton {...args} className="h-16 w-64">
      <Text className="text-foreground">Loaded content</Text>
    </Skeleton>
  ),
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <>
      <Note>
        {ALPHA_NOTE} The base style is `w-full h-full`, so every example sets its own
        dimensions through className.
      </Note>
      <Showcase>
        {VARIANTS.map((variant) => (
          <Labeled key={variant} label={variant}>
            <Skeleton variant={variant} className="h-16 w-16" />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Speeds: Story = {
  render: () => (
    <>
      <Note>
        {ALPHA_NOTE} `speed` maps to the pulse animation duration — 1 is the fastest
        and 4 the slowest.
      </Note>
      <Showcase>
        {SPEEDS.map((speed) => (
          <Labeled key={speed} label={`speed={${speed}}`}>
            <Skeleton speed={speed} className="h-8 w-64" />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Loaded: Story = {
  render: () => (
    <>
      <Note>
        {ALPHA_NOTE} While `isLoaded` is false the placeholder renders; once true the
        children render in its place.
      </Note>
      <Showcase>
        <Labeled label="isLoaded={false}">
          <Skeleton isLoaded={false} className="h-16 w-64">
            <Text className="text-foreground">Loaded content</Text>
          </Skeleton>
        </Labeled>
        <Labeled label="isLoaded">
          <Skeleton isLoaded className="h-16 w-64">
            <Text className="text-foreground">Loaded content</Text>
          </Skeleton>
        </Labeled>
      </Showcase>
    </>
  ),
};

export const TextLines: Story = {
  render: () => (
    <>
      <Note>
        {ALPHA_NOTE} `SkeletonText` repeats a line for each `_lines` entry; the line
        height comes from className.
      </Note>
      <Showcase>
        {LINE_COUNTS.map((lines) => (
          <Labeled key={lines} label={`_lines={${lines}}`}>
            <SkeletonText _lines={lines} className="h-3 w-64" />
          </Labeled>
        ))}
        <Labeled label="no _lines (single block)">
          <SkeletonText className="h-3 w-64" />
        </Labeled>
      </Showcase>
    </>
  ),
};

export const TextGaps: Story = {
  render: () => (
    <>
      <Note>{ALPHA_NOTE} `gap` controls the spacing between repeated lines.</Note>
      <Showcase>
        {GAPS.map((gap) => (
          <Labeled key={gap} label={`gap={${gap}}`}>
            <SkeletonText _lines={3} gap={gap} className="h-3 w-64" />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const TextSpeeds: Story = {
  render: () => (
    <>
      <Note>{ALPHA_NOTE} `SkeletonText` takes the same `speed` scale as `Skeleton`.</Note>
      <Showcase>
        {SPEEDS.map((speed) => (
          <Labeled key={speed} label={`speed={${speed}}`}>
            <SkeletonText _lines={2} speed={speed} className="h-3 w-64" />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const TextLoaded: Story = {
  render: () => (
    <>
      <Note>
        {ALPHA_NOTE} `SkeletonText` swaps to its children on `isLoaded`, the same way
        `Skeleton` does.
      </Note>
      <Showcase>
        <Labeled label="isLoaded={false}">
          <SkeletonText _lines={3} className="h-3 w-64" />
        </Labeled>
        <Labeled label="isLoaded">
          <SkeletonText _lines={3} isLoaded className="h-3 w-64">
            <Text className="text-foreground">Loaded content</Text>
          </SkeletonText>
        </Labeled>
      </Showcase>
    </>
  ),
};

export const Composed: Story = {
  render: () => (
    <>
      <Note>
        {ALPHA_NOTE} A typical placeholder: a circular avatar, a title line and a
        block of body lines.
      </Note>
      <Showcase>
        <Labeled label="list row">
          <HStack space="md" className="w-80 items-center">
            <Skeleton variant="circular" className="h-12 w-12" />
            <VStack space="sm" className="flex-1">
              <SkeletonText _lines={1} className="h-4 w-32" />
              <SkeletonText _lines={2} gap={2} className="h-3 w-full" />
            </VStack>
          </HStack>
        </Labeled>
        <Labeled label="card">
          <VStack
            space="md"
            className="w-80 rounded-xl border border-border bg-card p-4"
          >
            <Skeleton variant="rounded" className="h-32 w-full" />
            <SkeletonText _lines={1} className="h-4 w-40" />
            <SkeletonText _lines={3} gap={2} className="h-3 w-full" />
          </VStack>
        </Labeled>
      </Showcase>
    </>
  ),
};
