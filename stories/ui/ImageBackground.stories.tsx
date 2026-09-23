import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Heading } from '@/components/ui/heading';
import { ImageBackground } from '@/components/ui/image-background';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * Inline 16x16 grey checkerboard. Stories must never fetch a remote image —
 * Storybook is read offline and the static build is served from GitHub Pages.
 */
const PLACEHOLDER_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mPYhwR6kAAucYZBqIEYRcjig1HDaDwMCg0AJ3rvEGSkpH4AAAAASUVORK5CYII=';

const RESIZE_MODES = ['cover', 'contain', 'stretch', 'repeat', 'center'] as const;

const meta = {
  title: 'UI/ImageBackground',
  component: ImageBackground,
  argTypes: {
    resizeMode: { control: 'select', options: RESIZE_MODES },
  },
  args: {
    resizeMode: 'cover',
  },
  render: (args) => (
    <ImageBackground
      {...args}
      source={{ uri: PLACEHOLDER_IMAGE }}
      className="h-32 w-64 overflow-hidden rounded-lg"
    >
      <VStack space="xs" className="flex-1 justify-end p-3">
        <Heading size="sm" className="text-foreground">
          Title
        </Heading>
        <Text size="xs" className="text-muted-foreground">
          Description
        </Text>
      </VStack>
    </ImageBackground>
  ),
} satisfies Meta<typeof ImageBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ResizeModes: Story = {
  render: () => (
    <>
      <Note>
        The image is an inline base64 placeholder (a 16x16 checkerboard), not a network
        request, so each resize mode visibly scales or tiles the same source.
      </Note>
      <Showcase>
        {RESIZE_MODES.map((resizeMode) => (
          <Labeled key={resizeMode} label={resizeMode}>
            <ImageBackground
              resizeMode={resizeMode}
              source={{ uri: PLACEHOLDER_IMAGE }}
              className="h-24 w-64 overflow-hidden rounded-lg border border-border"
            />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const WithContent: Story = {
  render: () => (
    <>
      <Note>
        ImageBackground exposes no variants of its own — it is the React Native
        component with className support. Children lay out on top of the image, and
        `imageClassName` targets the image layer only.
      </Note>
      <Showcase>
        <Labeled label="centred content">
          <ImageBackground
            source={{ uri: PLACEHOLDER_IMAGE }}
            className="h-32 w-64 items-center justify-center overflow-hidden rounded-lg"
          >
            <Text className="rounded-md bg-card px-3 py-1 font-medium text-card-foreground">
              Overlay
            </Text>
          </ImageBackground>
        </Labeled>
        <Labeled label="bottom-aligned content">
          <ImageBackground
            source={{ uri: PLACEHOLDER_IMAGE }}
            className="h-32 w-64 justify-end overflow-hidden rounded-lg"
          >
            <VStack space="xs" className="bg-card/90 p-3">
              <Heading size="sm" className="text-card-foreground">
                Title
              </Heading>
              <Text size="xs" className="text-muted-foreground">
                Description
              </Text>
            </VStack>
          </ImageBackground>
        </Labeled>
        <Labeled label="rounded image layer">
          <ImageBackground
            source={{ uri: PLACEHOLDER_IMAGE }}
            imageClassName="rounded-2xl"
            className="h-32 w-64 items-center justify-center"
          >
            <Text className="rounded-md bg-card px-3 py-1 font-medium text-card-foreground">
              imageClassName
            </Text>
          </ImageBackground>
        </Labeled>
      </Showcase>
    </>
  ),
};
