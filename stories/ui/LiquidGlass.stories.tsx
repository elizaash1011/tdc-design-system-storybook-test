import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { GlassContainer, GlassView } from '@/components/ui/liquid-glass';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const GLASS_STYLES = ['clear', 'regular', 'none'] as const;

/**
 * Something with enough structure behind the glass that a blur is visible.
 * Tokens only, so the backdrop re-reads correctly in both themes.
 */
function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <Box className="h-44 w-full max-w-sm overflow-hidden rounded-xl bg-muted p-3">
      <VStack space="xs">
        {[0, 1, 2, 3].map((row) => (
          <HStack key={row} space="xs">
            {[0, 1, 2, 3, 4].map((column) => (
              <Box
                key={column}
                className={
                  (row + column) % 2 === 0
                    ? 'h-8 flex-1 rounded-md bg-primary/60'
                    : 'h-8 flex-1 rounded-md bg-accent'
                }
              />
            ))}
          </HStack>
        ))}
      </VStack>
      {children}
    </Box>
  );
}

const meta = {
  title: 'UI/LiquidGlass',
  component: GlassView,
  argTypes: {
    glassEffectStyle: { control: 'select', options: GLASS_STYLES },
    isInteractive: { control: 'boolean' },
    colorScheme: { control: 'select', options: ['auto', 'light', 'dark'] },
  },
  args: {
    glassEffectStyle: 'regular',
    isInteractive: false,
    colorScheme: 'auto',
  },
  render: (args) => (
    <Showcase className="w-full">
      <Note>
        LiquidGlass is marked alpha upstream in gluestack-ui v5 and its API may
        change. It wraps `expo-glass-effect`, which is iOS-only: on web (and on
        Android) `GlassView` and `GlassContainer` fall back to a plain View —
        the wrapper substitutes `bg-background/40 backdrop-blur-md`, so what you
        see in the browser is a CSS blur approximation, not the real liquid
        glass material. `glassEffectStyle`, `tintColor`, `isInteractive`, and
        `colorScheme` have no effect outside iOS.
      </Note>
      <Labeled label="GlassView over content" className="w-full">
        <Backdrop>
          <GlassView
            {...args}
            className="absolute inset-x-6 bottom-6 items-center justify-center rounded-xl border border-border p-4"
          >
            <Text className="text-foreground">Glass panel</Text>
          </GlassView>
        </Backdrop>
      </Labeled>
    </Showcase>
  ),
} satisfies Meta<typeof GlassView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const GlassStyles: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        The three `glassEffectStyle` values render identically here. They only
        diverge on iOS, where the native material is applied.
      </Note>
      {GLASS_STYLES.map((glassEffectStyle) => (
        <Labeled key={glassEffectStyle} label={glassEffectStyle} className="w-full">
          <Backdrop>
            <GlassView
              glassEffectStyle={glassEffectStyle}
              className="absolute inset-x-6 bottom-6 items-center justify-center rounded-xl border border-border p-4"
            >
              <Text className="text-foreground">{glassEffectStyle}</Text>
            </GlassView>
          </Backdrop>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Container: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `GlassContainer` groups glass children so that, on iOS, they merge into
        each other once they come within `spacing` points. On web it is a plain
        transparent wrapper, so the two panels simply sit side by side.
      </Note>
      <Labeled label="GlassContainer spacing=20" className="w-full">
        <Backdrop>
          <GlassContainer
            spacing={20}
            className="absolute inset-x-4 bottom-6 flex-row justify-between"
          >
            <GlassView className="h-16 w-24 items-center justify-center rounded-xl border border-border">
              <Text size="sm" className="text-foreground">
                One
              </Text>
            </GlassView>
            <GlassView className="h-16 w-24 items-center justify-center rounded-xl border border-border">
              <Text size="sm" className="text-foreground">
                Two
              </Text>
            </GlassView>
          </GlassContainer>
        </Backdrop>
      </Labeled>
    </Showcase>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Showcase className="w-full">
      <Labeled label="rounded-full / rounded-xl / square" className="w-full">
        <Backdrop>
          <HStack
            space="md"
            className="absolute inset-x-4 bottom-6 items-center justify-center"
          >
            <GlassView className="h-16 w-16 items-center justify-center rounded-full border border-border" />
            <GlassView className="h-16 w-16 items-center justify-center rounded-xl border border-border" />
            <GlassView className="h-16 w-16 items-center justify-center border border-border" />
          </HStack>
        </Backdrop>
      </Labeled>
    </Showcase>
  ),
};
