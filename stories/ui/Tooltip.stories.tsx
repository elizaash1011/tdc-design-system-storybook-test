import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
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

const TEXT_SIZES = [
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
] as const;

type TooltipPlacement = (typeof PLACEMENTS)[number];
type TooltipTextSize = (typeof TEXT_SIZES)[number];

/**
 * Tooltip is hover/press driven, so it needs open state to be visible. The
 * wrapper lives at module scope (hooks may not be called inside a story
 * `render`).
 */
function TooltipExample({
  initialOpen = false,
  placement = 'bottom',
}: {
  initialOpen?: boolean;
  placement?: TooltipPlacement;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <Box className="h-48 w-full items-center justify-center">
      <Tooltip
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement={placement}
        trigger={(triggerProps) => (
          <Button variant="outline" {...triggerProps}>
            <ButtonText>Hover me</ButtonText>
          </Button>
        )}
      >
        <TooltipContent>
          <TooltipText>Tooltip label</TooltipText>
        </TooltipContent>
      </Tooltip>
    </Box>
  );
}

/** A tooltip pinned open, so the reader does not have to hover to see it. */
function PinnedTooltip({
  label,
  placement = 'right',
  size,
}: {
  label: string;
  placement?: TooltipPlacement;
  size?: TooltipTextSize;
}) {
  return (
    <Tooltip
      isOpen
      placement={placement}
      trigger={(triggerProps) => (
        <Button size="sm" variant="outline" {...triggerProps}>
          <ButtonText>Anchor</ButtonText>
        </Button>
      )}
    >
      <TooltipContent>
        <TooltipText size={size}>{label}</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
}

/** One anchor, shown at whichever placement the reader picks. */
function TooltipPlacementExample() {
  const [placement, setPlacement] = React.useState<TooltipPlacement>('bottom');

  return (
    <>
      <Showcase className="mb-4">
        {PLACEMENTS.map((value) => (
          <Labeled key={value} label={value}>
            <Button
              size="sm"
              variant="outline"
              onPress={() => setPlacement(value)}
            >
              <ButtonText>Show {value}</ButtonText>
            </Button>
          </Labeled>
        ))}
      </Showcase>
      <Box className="h-56 w-full items-center justify-center rounded-md border border-border bg-muted">
        <Tooltip
          isOpen
          placement={placement}
          trigger={(triggerProps) => (
            <Button {...triggerProps}>
              <ButtonText>Anchor</ButtonText>
            </Button>
          )}
        >
          <TooltipContent>
            <TooltipText>placement={placement}</TooltipText>
          </TooltipContent>
        </Tooltip>
      </Box>
    </>
  );
}

/** Uncontrolled, with a long open delay. */
function TooltipDelayExample() {
  return (
    <Box className="h-32 w-full items-center justify-center">
      <Tooltip
        openDelay={1000}
        closeDelay={200}
        placement="top"
        trigger={(triggerProps) => (
          <Button variant="outline" {...triggerProps}>
            <ButtonText>Hover and wait</ButtonText>
          </Button>
        )}
      >
        <TooltipContent>
          <TooltipText>Shown after 1s</TooltipText>
        </TooltipContent>
      </Tooltip>
    </Box>
  );
}

// `component` is the wrapper, not `Tooltip` itself — Tooltip requires `trigger`
// and `children`, which every story supplies through a wrapper anyway. This also
// exposes the wrapper's knobs (initialOpen, placement) as controls.
const meta = {
  title: 'UI/Tooltip',
  component: TooltipExample,
} satisfies Meta<typeof TooltipExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <TooltipExample initialOpen />,
};

export const Placements: Story = {
  render: () => (
    <>
      <Note>
        Only the pressed placement is shown, because every value anchors to the
        same trigger. `shouldFlip` is on by default, so a placement with no room
        flips to the opposite side.
      </Note>
      <TooltipPlacementExample />
    </>
  ),
};

export const TextSizes: Story = {
  render: () => (
    <>
      <Note>
        Each row is its own tooltip pinned open (`isOpen`) so all `TooltipText`
        sizes can be read at once. The largest sizes are tall enough to crowd
        their neighbours.
      </Note>
      <Showcase>
        {TEXT_SIZES.map((size) => (
          <Labeled key={size} label={size} className="h-16 justify-center">
            <PinnedTooltip label={`Size ${size}`} size={size} />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <>
      <Note>
        `openDelay` defaults to 350ms and `closeDelay` to 0. This example waits
        a full second before showing.
      </Note>
      <TooltipDelayExample />
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <Note>
        With `isDisabled` the trigger still renders but the tooltip never opens.
      </Note>
      <Box className="h-32 w-full items-center justify-center">
        <Tooltip
          isDisabled
          placement="top"
          trigger={(triggerProps) => (
            <Button variant="outline" {...triggerProps}>
              <ButtonText>Hover me</ButtonText>
            </Button>
          )}
        >
          <TooltipContent>
            <TooltipText>Never shown</TooltipText>
          </TooltipContent>
        </Tooltip>
      </Box>
      <Text size="sm" className="text-muted-foreground">
        Nothing appears on hover.
      </Text>
    </>
  ),
};
