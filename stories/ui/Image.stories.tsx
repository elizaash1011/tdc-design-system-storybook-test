import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * Inline 16x16 grey checkerboard. Stories must never fetch a remote image —
 * Storybook is read offline and the static build is served from GitHub Pages.
 */
const PLACEHOLDER_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mPYhwR6kAAucYZBqIEYRcjig1HDaDwMCg0AJ3rvEGSkpH4AAAAASUVORK5CYII=';

const SIZES = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full', 'none'] as const;

const meta = {
  title: 'UI/Image',
  component: Image,
  argTypes: {
    size: { control: 'select', options: SIZES },
  },
  args: {
    size: 'md',
  },
  render: (args) => (
    <Image {...args} source={{ uri: PLACEHOLDER_IMAGE }} alt="Placeholder" />
  ),
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <>
      <Note>
        The image is an inline base64 placeholder, not a network request, so the story
        renders in an offline or statically hosted Storybook. `full` fills its parent
        and `none` applies no dimensions, so both are shown inside a sized box.
      </Note>
      <Showcase>
        {SIZES.map((size) => (
          <Labeled key={size} label={size}>
            {size === 'full' || size === 'none' ? (
              <Box className="h-20 w-20">
                <Image
                  size={size}
                  className={size === 'none' ? 'h-full w-full' : undefined}
                  source={{ uri: PLACEHOLDER_IMAGE }}
                  alt="Placeholder"
                />
              </Box>
            ) : (
              <Image size={size} source={{ uri: PLACEHOLDER_IMAGE }} alt="Placeholder" />
            )}
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Showcase>
      <Labeled label="square">
        <Image size="lg" source={{ uri: PLACEHOLDER_IMAGE }} alt="Placeholder" />
      </Labeled>
      <Labeled label="rounded">
        <Image
          size="lg"
          className="rounded-xl"
          source={{ uri: PLACEHOLDER_IMAGE }}
          alt="Placeholder"
        />
      </Labeled>
      <Labeled label="circular">
        <Image
          size="lg"
          className="rounded-full"
          source={{ uri: PLACEHOLDER_IMAGE }}
          alt="Placeholder"
        />
      </Labeled>
      <Labeled label="bordered">
        <Image
          size="lg"
          className="rounded-md border border-border"
          source={{ uri: PLACEHOLDER_IMAGE }}
          alt="Placeholder"
        />
      </Labeled>
    </Showcase>
  ),
};
