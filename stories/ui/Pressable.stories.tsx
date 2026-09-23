import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const SURFACE =
  'rounded-lg border border-border bg-card px-4 py-3 data-[hover=true]:bg-muted data-[active=true]:bg-background';

const meta = {
  title: 'UI/Pressable',
  component: Pressable,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    disabled: false,
  },
  render: (args) => (
    <Pressable {...args} className={SURFACE} onPress={() => {}}>
      <Text className="text-foreground">Press me</Text>
    </Pressable>
  ),
} satisfies Meta<typeof Pressable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <Showcase>
      <Note>
        Pressable exposes hover, focus, active, disabled and focus-visible as
        data attributes, so states are styled with data-[...] classes. Hover and
        press the surfaces below, or tab to them, to see each one.
      </Note>
      <Labeled label="hover / press">
        <Pressable className={SURFACE} onPress={() => {}}>
          <Text className="text-foreground">Press me</Text>
        </Pressable>
      </Labeled>
      <Labeled label="focus ring (tab to it)">
        <Pressable
          className="rounded-lg border border-border bg-card px-4 py-3"
          onPress={() => {}}
        >
          <Text className="text-foreground">Focus me</Text>
        </Pressable>
      </Labeled>
      <Labeled label="disabled">
        <Pressable className={SURFACE} disabled onPress={() => {}}>
          <Text className="text-foreground">Disabled</Text>
        </Pressable>
      </Labeled>
    </Showcase>
  ),
};

export const RenderProp: Story = {
  render: () => (
    <Showcase>
      <Note>
        Children may be a function receiving the current interaction state, for
        cases where the styling cannot be expressed as a class.
      </Note>
      <Labeled label="children as function">
        <Pressable
          className="rounded-lg border border-border bg-card px-4 py-3"
          onPress={() => {}}
        >
          {(state) => {
            // react-native-web also supplies `hovered` and `focused` here, but
            // react-native's PressableStateCallbackType only declares `pressed`,
            // so the extras have to be read off a widened type.
            const { pressed, hovered } = state as typeof state & {
              hovered?: boolean;
            };
            return (
              <Text className="text-foreground">
                {pressed ? 'Pressed' : hovered ? 'Hovered' : 'Idle'}
              </Text>
            );
          }}
        </Pressable>
      </Labeled>
    </Showcase>
  ),
};

export const AsListRow: Story = {
  render: () => (
    <Showcase>
      <Labeled label="pressable rows" className="w-64">
        <VStack className="w-64 overflow-hidden rounded-lg border border-border bg-card">
          {['Item one', 'Item two', 'Item three'].map((label) => (
            <Pressable
              key={label}
              className="px-4 py-3 data-[hover=true]:bg-muted data-[active=true]:bg-background"
              onPress={() => {}}
            >
              <Text className="text-foreground">{label}</Text>
            </Pressable>
          ))}
        </VStack>
      </Labeled>
    </Showcase>
  ),
};
