import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetIcon,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetScrollView,
  ActionsheetSectionHeaderText,
} from '@/components/ui/actionsheet';
import { Button, ButtonText } from '@/components/ui/button';
import { CopyIcon, EditIcon, ShareIcon, TrashIcon } from '@/components/ui/icon';
import { Note } from '../helpers';

const ITEMS = ['Item one', 'Item two', 'Item three'] as const;

const ICON_ITEMS = [
  { label: 'Edit', icon: EditIcon },
  { label: 'Duplicate', icon: CopyIcon },
  { label: 'Share', icon: ShareIcon },
  { label: 'Delete', icon: TrashIcon },
] as const;

const MANY_ITEMS = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);

/**
 * Actionsheet is an overlay, so it needs open state to be visible. The wrapper
 * lives at module scope (hooks may not be called inside a story `render`).
 */
function ActionsheetExample({ initialOpen = false }: { initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {ITEMS.map((item) => (
            <ActionsheetItem key={item} onPress={() => setIsOpen(false)}>
              <ActionsheetItemText>{item}</ActionsheetItemText>
            </ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

/** Items with a leading icon. */
function ActionsheetWithIconsExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {ICON_ITEMS.map((item) => (
            <ActionsheetItem key={item.label} onPress={() => setIsOpen(false)}>
              <ActionsheetIcon as={item.icon} />
              <ActionsheetItemText>{item.label}</ActionsheetItemText>
            </ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

/** A section header above the items, plus a disabled item. */
function ActionsheetSectionExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetSectionHeaderText>Section</ActionsheetSectionHeaderText>
          <ActionsheetItem onPress={() => setIsOpen(false)}>
            <ActionsheetItemText>Item one</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => setIsOpen(false)}>
            <ActionsheetItemText bold>Item two (bold)</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled>
            <ActionsheetItemText>Item three (disabled)</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

/** Long lists scroll inside ActionsheetScrollView; the sheet caps at 80vh. */
function ActionsheetScrollableExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetScrollView>
            {MANY_ITEMS.map((item) => (
              <ActionsheetItem key={item} onPress={() => setIsOpen(false)}>
                <ActionsheetItemText>{item}</ActionsheetItemText>
              </ActionsheetItem>
            ))}
          </ActionsheetScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

const meta = {
  title: 'UI/Actionsheet',
  component: Actionsheet,
  render: () => <ActionsheetExample />,
} satisfies Meta<typeof Actionsheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <ActionsheetExample initialOpen />,
};

export const WithIcons: Story = {
  render: () => <ActionsheetWithIconsExample />,
};

export const WithSectionHeader: Story = {
  render: () => <ActionsheetSectionExample />,
};

export const Scrollable: Story = {
  render: () => (
    <>
      <Note>
        Actionsheet has no `size` or `anchor` variant — it always docks to the
        bottom edge and caps its height at 80% of the viewport. Long lists go
        inside `ActionsheetScrollView`.
      </Note>
      <ActionsheetScrollableExample />
    </>
  ),
};
