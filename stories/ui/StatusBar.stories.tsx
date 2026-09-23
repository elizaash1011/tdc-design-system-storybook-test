import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { StatusBar } from '@/components/ui/status-bar';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * `StatusBar` is a direct re-export of react-native's `StatusBar`. It renders
 * nothing of its own on any platform — it is a declarative controller for the
 * OS status bar (its text colour, background and visibility).
 *
 * On web react-native-web's implementation is literally `() => null` with
 * no-op statics, so there is nothing to see in Storybook. The stories below
 * mount it to prove it is harmless and to document the props, with a mock strip
 * standing in for the real bar.
 */

/** A stand-in for the OS status bar so the prop meanings are visible. */
function MockBar({
  label,
  hidden,
  dark,
}: {
  label: string;
  hidden?: boolean;
  dark?: boolean;
}) {
  return (
    <VStack className="w-64 overflow-hidden rounded-lg border border-border">
      <Box
        className={`h-7 flex-row items-center justify-between px-3 ${
          hidden ? 'bg-muted' : dark ? 'bg-foreground' : 'bg-card'
        }`}
      >
        {!hidden && (
          <>
            <Text
              size="xs"
              className={dark ? 'text-background' : 'text-foreground'}
            >
              9:41
            </Text>
            <Text
              size="xs"
              className={dark ? 'text-background' : 'text-foreground'}
            >
              ▮▮▮
            </Text>
          </>
        )}
      </Box>
      <Box className="bg-background p-4">
        <Text size="sm" className="text-muted-foreground">
          {label}
        </Text>
      </Box>
    </VStack>
  );
}

const meta = {
  title: 'UI/StatusBar',
  component: StatusBar,
  render: (args) => (
    <VStack space="md" className="items-start">
      <StatusBar {...args} />
      <MockBar label="StatusBar mounted (renders nothing on web)" />
    </VStack>
  ),
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="items-start">
      <Note>
        `StatusBar` renders nothing on web — react-native-web implements it as a
        component that returns `null`, with `setBarStyle`, `setHidden`,
        `setBackgroundColor`, `setTranslucent` and
        `setNetworkActivityIndicatorVisible` all no-ops. It is mounted below;
        the strip is a mock, not the component.
      </Note>
      <StatusBar barStyle="default" />
      <MockBar label="Mounted <StatusBar /> — nothing rendered" />
    </VStack>
  ),
};

export const BarStyles: Story = {
  render: () => (
    <Showcase>
      <Note>
        `barStyle` controls the colour of the OS status bar content. Only
        visible on a device or simulator.
      </Note>
      <Labeled label="light-content">
        <StatusBar barStyle="light-content" />
        <MockBar label="Light text on a dark bar" dark />
      </Labeled>
      <Labeled label="dark-content">
        <StatusBar barStyle="dark-content" />
        <MockBar label="Dark text on a light bar" />
      </Labeled>
    </Showcase>
  ),
};

export const Hidden: Story = {
  render: () => (
    <Showcase>
      <Note>
        `hidden` removes the OS status bar entirely. No effect on web.
      </Note>
      <Labeled label="hidden">
        <StatusBar hidden />
        <MockBar label="No status bar" hidden />
      </Labeled>
    </Showcase>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s `StatusBar`.
        It has no variants, sizes, data-states or theme tokens — and no visual
        output of its own at all.
      </Note>
      <Note>
        Platform split: `barStyle`, `networkActivityIndicatorVisible` and
        `showHideTransition` are iOS-only; `backgroundColor` and `translucent`
        are Android-only. `hidden` and `animated` apply to both.
      </Note>
      <Note>
        `backgroundColor` takes a raw colour value, not a theme token, so it
        cannot follow light/dark mode automatically. Drive it from the resolved
        theme colour at the app root rather than hardcoding it in a screen.
      </Note>
      <Note>
        The project also depends on `expo-status-bar`, whose `StatusBar` picks a
        sensible `style` from the active colour scheme. Prefer that at the app
        root; this export is the raw RN primitive.
      </Note>
    </Showcase>
  ),
};
