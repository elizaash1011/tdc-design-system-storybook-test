import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from '@/components/ui/avatar';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * Inline 16x16 grey checkerboard. Stories must never fetch a remote image —
 * Storybook is read offline and the static build is served from GitHub Pages.
 */
const PLACEHOLDER_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mPYhwR6kAAucYZBqIEYRcjig1HDaDwMCg0AJ3rvEGSkpH4AAAAASUVORK5CYII=';

/** Avatar has no `size` variant — dimensions come from className. */
const SIZE_CLASSES = [
  { label: 'h-6 w-6', className: 'h-6 w-6' },
  { label: 'h-8 w-8', className: 'h-8 w-8' },
  { label: 'h-12 w-12 (default)', className: '' },
  { label: 'h-16 w-16', className: 'h-16 w-16' },
  { label: 'h-24 w-24', className: 'h-24 w-24' },
] as const;

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallbackText>AB</AvatarFallbackText>
    </Avatar>
  ),
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fallback: Story = {
  render: () => (
    <Showcase>
      <Labeled label="two letters">
        <Avatar>
          <AvatarFallbackText>AB</AvatarFallbackText>
        </Avatar>
      </Labeled>
      <Labeled label="one letter">
        <Avatar>
          <AvatarFallbackText>A</AvatarFallbackText>
        </Avatar>
      </Labeled>
      <Labeled label="empty">
        <Avatar />
      </Labeled>
    </Showcase>
  ),
};

export const WithImage: Story = {
  render: () => (
    <>
      <Note>
        The image is an inline base64 placeholder, not a network request, so the story
        renders in an offline or statically hosted Storybook.
      </Note>
      <Showcase>
        <Labeled label="image over fallback">
          <Avatar>
            <AvatarFallbackText>AB</AvatarFallbackText>
            <AvatarImage source={{ uri: PLACEHOLDER_IMAGE }} />
          </Avatar>
        </Labeled>
        <Labeled label="fallback only">
          <Avatar>
            <AvatarFallbackText>AB</AvatarFallbackText>
          </Avatar>
        </Labeled>
      </Showcase>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Note>
        Avatar exposes no `size` variant — the base style is a fixed `h-12 w-12`, so
        other sizes are set with className.
      </Note>
      <Showcase>
        {SIZE_CLASSES.map((size) => (
          <Labeled key={size.label} label={size.label}>
            <Avatar className={size.className}>
              <AvatarFallbackText>AB</AvatarFallbackText>
            </Avatar>
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Showcase>
      <Labeled label="fallback + badge">
        <Avatar>
          <AvatarFallbackText>AB</AvatarFallbackText>
          <AvatarBadge />
        </Avatar>
      </Labeled>
      <Labeled label="image + badge">
        <Avatar>
          <AvatarFallbackText>AB</AvatarFallbackText>
          <AvatarImage source={{ uri: PLACEHOLDER_IMAGE }} alt="Placeholder" />
          <AvatarBadge />
        </Avatar>
      </Labeled>
    </Showcase>
  ),
};

export const Group: Story = {
  render: () => (
    <Showcase>
      <Labeled label="three avatars">
        <AvatarGroup>
          <Avatar>
            <AvatarFallbackText>AB</AvatarFallbackText>
          </Avatar>
          <Avatar>
            <AvatarFallbackText>CD</AvatarFallbackText>
          </Avatar>
          <Avatar>
            <AvatarFallbackText>EF</AvatarFallbackText>
          </Avatar>
        </AvatarGroup>
      </Labeled>
      <Labeled label="with overflow count">
        <AvatarGroup>
          <Avatar>
            <AvatarFallbackText>AB</AvatarFallbackText>
          </Avatar>
          <Avatar>
            <AvatarFallbackText>CD</AvatarFallbackText>
          </Avatar>
          <Avatar>
            <AvatarFallbackText>EF</AvatarFallbackText>
          </Avatar>
          <Avatar>
            <AvatarFallbackText>+3</AvatarFallbackText>
          </Avatar>
        </AvatarGroup>
      </Labeled>
    </Showcase>
  ),
};
