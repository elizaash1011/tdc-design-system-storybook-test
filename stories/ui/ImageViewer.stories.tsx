import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import {
  ImageViewer,
  ImageViewerCloseButton,
  ImageViewerContent,
  ImageViewerCounter,
  ImageViewerNavigation,
  ImageViewerTrigger,
  type ImageItem,
} from '@/components/ui/image-viewer';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * Inline 8x8 PNG placeholders. Storybook's static build is served from GitHub
 * Pages and may be read offline, so nothing here may reach the network.
 */
const PLACEHOLDER_ONE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGklEQVR42mO4dOn6qlWbMEkGrKJAkmFQ6gAATvCQIfUI4msAAAAASUVORK5CYII=';
const PLACEHOLDER_TWO =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAIElEQVR42mOYNnspEOUV1wIRMpsBpwSmEISNW4IOdgAACWBmgQsLUmMAAAAASUVORK5CYII=';
const PLACEHOLDER_THREE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAFElEQVR42mOIis+0cfTGJBmGlgQA/EE9QSsqxcwAAAAASUVORK5CYII=';

const IMAGES: ImageItem[] = [
  { url: PLACEHOLDER_ONE, alt: 'Placeholder one' },
  { url: PLACEHOLDER_TWO, alt: 'Placeholder two' },
  { url: PLACEHOLDER_THREE, alt: 'Placeholder three' },
];

const SINGLE_IMAGE: ImageItem[] = [IMAGES[0]];

function Thumbnail({ item, label }: { item: ImageItem; label: string }) {
  return (
    <Box className="items-center gap-1">
      <Image
        source={{ uri: item.url }}
        alt={item.alt ?? label}
        size="sm"
        className="rounded-md border border-border"
      />
      <Text size="xs" className="text-muted-foreground">
        {label}
      </Text>
    </Box>
  );
}

const meta = {
  title: 'UI/ImageViewer',
  component: ImageViewer,
  args: {
    images: IMAGES,
    initialIndex: 0,
  },
  argTypes: {
    initialIndex: { control: { type: 'number', min: 0, max: 2 } },
  },
  render: (args) => (
    <Showcase className="w-full">
      <Note>
        ImageViewer is marked alpha upstream in gluestack-ui v5 and its API may
        change. The three images are inline `data:` URI placeholders — 8x8 PNGs
        embedded in the story file — because the static Storybook build must
        work offline and fetch nothing from the network.
      </Note>
      <Labeled label="press a thumbnail to open" className="w-full">
        <ImageViewer {...args}>
          <ImageViewerTrigger>
            <HStack space="md" className="items-end">
              {IMAGES.map((item, index) => (
                <Thumbnail key={item.url} item={item} label={`Image ${index + 1}`} />
              ))}
            </HStack>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
  ),
} satisfies Meta<typeof ImageViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleImage: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        With one image, `ImageViewerNavigation` renders no arrows — both the
        previous and next buttons are conditional on there being somewhere to
        go.
      </Note>
      <Labeled label="one image" className="w-full">
        <ImageViewer images={SINGLE_IMAGE}>
          <ImageViewerTrigger>
            <Thumbnail item={SINGLE_IMAGE[0]} label="Image 1" />
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
  ),
};

export const InitialIndex: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `initialIndex` picks which image the overlay opens on; the counter
        reflects it immediately.
      </Note>
      <Labeled label="initialIndex=2" className="w-full">
        <ImageViewer images={IMAGES} initialIndex={2}>
          <ImageViewerTrigger>
            <HStack space="md" className="items-end">
              {IMAGES.map((item, index) => (
                <Thumbnail key={item.url} item={item} label={`Image ${index + 1}`} />
              ))}
            </HStack>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `defaultOpen` mounts the overlay immediately, which is the only way to
        review the open state statically. Close it with the ✕ button or the Esc
        key; Left/Right arrows move between images.
      </Note>
      <Labeled label="defaultOpen" className="w-full">
        <ImageViewer images={IMAGES} defaultOpen>
          <ImageViewerTrigger>
            <Text className="text-foreground">Reopen viewer</Text>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
  ),
};

export const ContentPartsOnly: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        The overlay chrome is opt-in: `ImageViewerContent` renders the current
        image and nothing else, so close / navigation / counter are each added
        by hand. This example omits the counter.
      </Note>
      <Labeled label="no counter" className="w-full">
        <ImageViewer images={IMAGES}>
          <ImageViewerTrigger>
            <HStack space="md" className="items-end">
              {IMAGES.map((item, index) => (
                <Thumbnail key={item.url} item={item} label={`Image ${index + 1}`} />
              ))}
            </HStack>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
  ),
};
