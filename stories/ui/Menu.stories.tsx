import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { CopyIcon, EditIcon, Icon, TrashIcon } from '@/components/ui/icon';
import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from '@/components/ui/menu';
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

const ITEMS = ['Item one', 'Item two', 'Item three'] as const;

const ICON_ITEMS = [
  { label: 'Edit', icon: EditIcon },
  { label: 'Duplicate', icon: CopyIcon },
] as const;

type MenuPlacement = (typeof PLACEMENTS)[number];

/**
 * Menu is an overlay driven by its `trigger` render prop, so it needs open
 * state to be visible. The wrapper lives at module scope (hooks may not be
 * called inside a story `render`).
 */
function MenuExample({
  initialOpen = false,
  placement = 'bottom left',
}: {
  initialOpen?: boolean;
  placement?: MenuPlacement;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <Box className="h-64 w-full items-center justify-center">
      <Menu
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement={placement}
        trigger={(triggerProps) => (
          <Button variant="outline" {...triggerProps}>
            <ButtonText>Open menu</ButtonText>
          </Button>
        )}
      >
        {ITEMS.map((item) => (
          <MenuItem key={item} textValue={item}>
            <MenuItemLabel>{item}</MenuItemLabel>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

/** One trigger, opened at whichever placement the reader picks. */
function MenuPlacementExample() {
  const [placement, setPlacement] = React.useState<MenuPlacement>('bottom left');
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
        <Menu
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
          <MenuItem key="placement" textValue={placement}>
            <MenuItemLabel>placement={placement}</MenuItemLabel>
          </MenuItem>
          {ITEMS.map((item) => (
            <MenuItem key={item} textValue={item}>
              <MenuItemLabel>{item}</MenuItemLabel>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

/** Icons, a separator, and a disabled key. */
function MenuCompositionExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Box className="h-72 w-full items-center justify-center">
      <Menu
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement="bottom left"
        disabledKeys={['Delete']}
        trigger={(triggerProps) => (
          <Button variant="outline" {...triggerProps}>
            <ButtonText>Open menu</ButtonText>
          </Button>
        )}
      >
        {ICON_ITEMS.map((item) => (
          <MenuItem key={item.label} textValue={item.label}>
            <Icon
              as={item.icon}
              size="sm"
              className="mr-2 text-popover-foreground"
            />
            <MenuItemLabel>{item.label}</MenuItemLabel>
          </MenuItem>
        ))}
        <MenuSeparator />
        <MenuItem key="Delete" textValue="Delete">
          <Icon as={TrashIcon} size="sm" className="mr-2 text-popover-foreground" />
          <MenuItemLabel>Delete (disabled)</MenuItemLabel>
        </MenuItem>
      </Menu>
    </Box>
  );
}

/** Enough items to scroll — the menu caps its height at 300px. */
function MenuScrollableExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Box className="h-80 w-full items-center justify-center">
      <Menu
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        placement="bottom left"
        trigger={(triggerProps) => (
          <Button variant="outline" {...triggerProps}>
            <ButtonText>Open menu</ButtonText>
          </Button>
        )}
      >
        {Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`).map(
          (item) => (
            <MenuItem key={item} textValue={item}>
              <MenuItemLabel>{item}</MenuItemLabel>
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );
}

// `component` is the wrapper, not `Menu` itself. Menu requires `trigger` and
// `children`, so typing stories against it would force every story to restate
// those args even though each one renders through a wrapper. Pointing at the
// wrapper also puts its real knobs (initialOpen, placement) in the Controls panel.
const meta = {
  title: 'UI/Menu',
  component: MenuExample,
} satisfies Meta<typeof MenuExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <MenuExample initialOpen />,
};

export const Placements: Story = {
  render: () => (
    <>
      <Note>
        Only one menu can be open at a time, so each button repositions the
        single anchored menu below. `shouldFlip` is on by default, so a
        placement with no room flips to the opposite side.
      </Note>
      <MenuPlacementExample />
    </>
  ),
};

export const WithIconsAndSeparator: Story = {
  render: () => (
    <>
      <Note>
        Items keyed in `disabledKeys` render at 40% opacity and ignore presses.
      </Note>
      <MenuCompositionExample />
    </>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <>
      <Note>
        The menu caps its height at 300px and scrolls beyond that. Items are the
        icon-free default shape.
      </Note>
      <MenuScrollableExample />
    </>
  ),
};
