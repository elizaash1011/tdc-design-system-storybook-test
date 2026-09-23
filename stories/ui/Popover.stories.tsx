import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import {
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const PLACEMENTS = [
  'top',
  'top left',
  'top right',
  'bottom',
  'bottom left',
  'bottom right',
  'left',
  'left top',
  'left bottom',
  'right',
  'right top',
  'right bottom',
] as const;

type PopoverPlacement = (typeof PLACEMENTS)[number];

/**
 * Popover is press driven, so it needs open state to be visible. The wrapper
 * lives at module scope (hooks may not be called inside a story `render`).
 */
function PopoverExample({
  initialOpen = false,
  placement = 'bottom',
  withArrow = false,
}: {
  initialOpen?: boolean;
  placement?: PopoverPlacement;
  withArrow?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <Box className="h-64 w-full items-center justify-center">
      <Popover
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement={placement}
        trigger={(triggerProps) => (
          <Button {...triggerProps}>
            <ButtonText>Open popover</ButtonText>
          </Button>
        )}
      >
        <PopoverBackdrop />
        <PopoverContent>
          {withArrow ? <PopoverArrow /> : null}
          <PopoverHeader>
            <Heading size="sm" className="text-popover-foreground">
              Title
            </Heading>
            <PopoverCloseButton onPress={() => setIsOpen(false)}>
              <Icon as={CloseIcon} size="sm" className="text-muted-foreground" />
            </PopoverCloseButton>
          </PopoverHeader>
          <PopoverBody className="mt-2 mb-3">
            <Text size="sm" className="text-muted-foreground">
              Supporting copy explaining what this popover is for.
            </Text>
          </PopoverBody>
          <PopoverFooter>
            <Text size="xs" className="text-muted-foreground">
              Footer
            </Text>
            <Button size="sm" variant="ghost" onPress={() => setIsOpen(false)}>
              <ButtonText>Done</ButtonText>
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

/** One anchor, opened at whichever placement the reader picks. */
function PopoverPlacementExample() {
  const [placement, setPlacement] = React.useState<PopoverPlacement>('bottom');
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Showcase className="mb-4">
        {PLACEMENTS.map((value) => (
          <Labeled key={value} label={value}>
            <Button
              size="sm"
              variant="outline"
              onPress={() => {
                setPlacement(value);
                setIsOpen(true);
              }}
            >
              <ButtonText>Show {value}</ButtonText>
            </Button>
          </Labeled>
        ))}
      </Showcase>
      <Box className="h-64 w-full items-center justify-center rounded-md border border-border bg-muted">
        <Popover
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          placement={placement}
          trigger={(triggerProps) => (
            <Button {...triggerProps}>
              <ButtonText>Anchor</ButtonText>
            </Button>
          )}
        >
          <PopoverBackdrop />
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Text size="sm" className="text-popover-foreground">
                placement={placement}
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}

/** Body copy alone, with no header, footer or arrow. */
function PopoverBodyOnlyExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Box className="h-64 w-full items-center justify-center">
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="bottom"
        onOpen={() => setIsOpen(true)}
        trigger={(triggerProps) => (
          <Button {...triggerProps}>
            <ButtonText>Open popover</ButtonText>
          </Button>
        )}
      >
        <PopoverBackdrop />
        <PopoverContent>
          <PopoverBody>
            <Text size="sm" className="text-popover-foreground">
              A short explanation with nothing else around it.
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

// `component` is the wrapper, not `Popover` itself — Popover requires `trigger`
// and `children`, which every story supplies through a wrapper anyway. This also
// exposes the wrapper's knobs (initialOpen, placement, withArrow) as controls.
const meta = {
  title: 'UI/Popover',
  component: PopoverExample,
} satisfies Meta<typeof PopoverExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <PopoverExample initialOpen />,
};

export const WithArrow: Story = {
  render: () => <PopoverExample initialOpen withArrow />,
};

export const Placements: Story = {
  render: () => (
    <>
      <Note>
        Only one popover can be open at a time, so each button repositions the
        single anchored popover below. `shouldFlip` is on by default, so a
        placement with no room flips to the opposite side.
      </Note>
      <PopoverPlacementExample />
    </>
  ),
};

export const BodyOnly: Story = {
  render: () => (
    <>
      <Note>
        The header, footer and arrow are all optional — a popover can be body
        copy alone.
      </Note>
      <PopoverBodyOnlyExample />
    </>
  ),
};
