import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Button, ButtonText } from '@/components/ui/button';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['sm', 'md', 'lg', 'full'] as const;
const ANCHORS = ['left', 'right', 'top', 'bottom'] as const;

type DrawerSize = (typeof SIZES)[number];
type DrawerAnchor = (typeof ANCHORS)[number];

/**
 * Drawer is an overlay, so it needs open state to be visible. The wrapper lives
 * at module scope (hooks may not be called inside a story `render`).
 */
function DrawerExample({
  initialOpen = false,
  size = 'md',
  anchor = 'left',
}: {
  initialOpen?: boolean;
  size?: DrawerSize;
  anchor?: DrawerAnchor;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={size}
        anchor={anchor}
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Heading size="md" className="text-foreground">
              Title
            </Heading>
            <DrawerCloseButton onPress={() => setIsOpen(false)}>
              <Icon as={CloseIcon} size="md" className="text-muted-foreground" />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <Text className="text-muted-foreground">
              Supporting copy explaining what this panel is for.
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" onPress={() => setIsOpen(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={() => setIsOpen(false)}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

/** One drawer, opened with whichever variant value the reader picks. */
function DrawerVariantExample({
  axis,
}: {
  axis: 'size' | 'anchor';
}) {
  const [openSize, setOpenSize] = React.useState<DrawerSize | null>(null);
  const [openAnchor, setOpenAnchor] = React.useState<DrawerAnchor | null>(null);

  const isOpen = axis === 'size' ? openSize !== null : openAnchor !== null;
  const close = () => {
    setOpenSize(null);
    setOpenAnchor(null);
  };

  const values: readonly string[] = axis === 'size' ? SIZES : ANCHORS;

  return (
    <>
      <Showcase>
        {values.map((value) => (
          <Labeled key={value} label={value}>
            <Button
              variant="outline"
              onPress={() => {
                if (axis === 'size') {
                  setOpenSize(value as DrawerSize);
                } else {
                  setOpenAnchor(value as DrawerAnchor);
                }
              }}
            >
              <ButtonText>Open {value}</ButtonText>
            </Button>
          </Labeled>
        ))}
      </Showcase>
      <Drawer
        isOpen={isOpen}
        onClose={close}
        size={axis === 'size' ? (openSize ?? 'md') : 'md'}
        anchor={axis === 'anchor' ? (openAnchor ?? 'left') : 'left'}
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Heading size="md" className="text-foreground">
              {axis}={axis === 'size' ? openSize : openAnchor}
            </Heading>
            <DrawerCloseButton onPress={close}>
              <Icon as={CloseIcon} size="md" className="text-muted-foreground" />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <Text className="text-muted-foreground">
              {axis === 'size'
                ? 'Size controls how much of the screen the panel covers.'
                : 'Anchor controls which edge the panel slides in from.'}
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button onPress={close}>
              <ButtonText>Close</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  render: () => <DrawerExample />,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <DrawerExample initialOpen />,
};

export const Sizes: Story = {
  render: () => (
    <>
      <Note>
        Only one drawer can be open at a time, so each button opens the drawer at
        a different `size` value (anchored left). Close it to try the next one.
      </Note>
      <DrawerVariantExample axis="size" />
    </>
  ),
};

export const Anchors: Story = {
  render: () => (
    <>
      <Note>
        Each button opens the drawer from a different edge via `anchor`, at size
        `md`. Close it to try the next one.
      </Note>
      <DrawerVariantExample axis="anchor" />
    </>
  ),
};

export const AnchoredRight: Story = {
  render: () => <DrawerExample initialOpen anchor="right" size="sm" />,
};

export const AnchoredBottom: Story = {
  render: () => <DrawerExample initialOpen anchor="bottom" size="sm" />,
};
