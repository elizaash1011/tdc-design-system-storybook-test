import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { KeyboardAvoidingView } from '@/components/ui/keyboard-avoiding-view';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * `KeyboardAvoidingView` is a direct re-export of react-native's
 * `KeyboardAvoidingView`. It listens for keyboard frame events and resizes,
 * pads or shifts itself so focused inputs stay visible.
 *
 * It has no gluestack variants — `behavior`, `keyboardVerticalOffset` and
 * `enabled` are the whole API. Nothing about it is themeable, so all colour in
 * these stories comes from the surrounding views.
 */

const FILL = { flex: 1 } as const;

const BEHAVIORS = ['height', 'position', 'padding'] as const;

const ROWS = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

function Row({ label }: { label: string }) {
  return (
    <Box className="border-b border-border px-4 py-3">
      <Text className="text-foreground">{label}</Text>
    </Box>
  );
}

/**
 * A phone-sized frame: scrolling content above, a composer pinned below. This
 * is the layout `KeyboardAvoidingView` exists for.
 */
function Composer({
  behavior,
}: {
  behavior?: (typeof BEHAVIORS)[number];
}) {
  return (
    <Box className="h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card">
      <KeyboardAvoidingView behavior={behavior} style={FILL}>
        <ScrollView className="flex-1" style={FILL}>
          {ROWS.map((label) => (
            <Row key={label} label={label} />
          ))}
        </ScrollView>
        <Box className="border-t border-border bg-background p-3">
          <Input>
            <InputField placeholder="Type a message" />
          </Input>
        </Box>
      </KeyboardAvoidingView>
    </Box>
  );
}

const meta = {
  title: 'UI/KeyboardAvoidingView',
  component: KeyboardAvoidingView,
  argTypes: {
    behavior: { control: 'select', options: BEHAVIORS },
    enabled: { control: 'boolean' },
    keyboardVerticalOffset: { control: 'number' },
  },
  args: {
    behavior: 'padding',
    enabled: true,
    keyboardVerticalOffset: 0,
  },
  render: (args) => (
    <Box className="h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card">
      <KeyboardAvoidingView {...args} style={FILL}>
        <ScrollView className="flex-1" style={FILL}>
          {ROWS.map((label) => (
            <Row key={label} label={label} />
          ))}
        </ScrollView>
        <Box className="border-t border-border bg-background p-3">
          <Input>
            <InputField placeholder="Type a message" />
          </Input>
        </Box>
      </KeyboardAvoidingView>
    </Box>
  ),
} satisfies Meta<typeof KeyboardAvoidingView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        There is no on-screen keyboard in a desktop browser, so this component
        never receives a keyboard frame event and never moves. Focusing the
        input below does nothing visible. What the story does confirm is the
        layout it wraps: scrolling content that flexes, composer pinned to the
        bottom. The avoidance itself has to be checked in a simulator.
      </Note>
      <Composer behavior="padding" />
    </VStack>
  ),
};

export const Behaviors: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `behavior` decides how the view gets out of the keyboard&apos;s way:
        `padding` adds bottom padding, `height` shrinks the view, `position`
        translates it. The recommended default is `padding` on iOS and
        `height` on Android. All three look identical on web.
      </Note>
      {BEHAVIORS.map((behavior) => (
        <Labeled key={behavior} label={behavior} className="w-full">
          <Composer behavior={behavior} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Disabled: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `enabled={false}` turns the avoidance off without changing the tree —
        useful when a screen is behind a modal. Indistinguishable from enabled
        on web.
      </Note>
      <Box className="h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card">
        <KeyboardAvoidingView behavior="padding" enabled={false} style={FILL}>
          <ScrollView className="flex-1" style={FILL}>
            {ROWS.map((label) => (
              <Row key={label} label={label} />
            ))}
          </ScrollView>
          <Box className="border-t border-border bg-background p-3">
            <Input>
              <InputField placeholder="Type a message" />
            </Input>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </VStack>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        `KeyboardAvoidingView`. It has no variants, sizes, data-states or theme
        props.
      </Note>
      <Note>
        Web: no on-screen keyboard exists, so the component is inert. Every
        `behavior` renders the same and `keyboardVerticalOffset` has no effect.
      </Note>
      <Note>
        `keyboardVerticalOffset` compensates for chrome the component cannot
        measure — a navigation header or tab bar above/below it. Getting it
        wrong shows up as a gap or a clipped input, and only on a device.
      </Note>
      <Note>
        This repo also depends on `react-native-keyboard-controller`, whose
        `KeyboardAvoidingView` / `KeyboardStickyView` track the keyboard frame
        continuously instead of snapping. Prefer those for chat-style
        composers; this export is the RN baseline.
      </Note>
    </Showcase>
  ),
};
