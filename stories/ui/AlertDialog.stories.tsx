import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['xs', 'sm', 'md', 'lg', 'full'] as const;

type AlertDialogSize = (typeof SIZES)[number];

/**
 * AlertDialog is an overlay, so it needs open state to be visible. The wrapper
 * lives at module scope (hooks may not be called inside a story `render`).
 */
function AlertDialogExample({
  initialOpen = false,
  size = 'md',
}: {
  initialOpen?: boolean;
  size?: AlertDialogSize;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <>
      <Button variant="destructive" onPress={() => setIsOpen(true)}>
        <ButtonText>Delete item</ButtonText>
      </Button>
      <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="md" className="text-foreground">
              Are you sure?
            </Heading>
            <AlertDialogCloseButton onPress={() => setIsOpen(false)}>
              <Icon as={CloseIcon} size="md" className="text-muted-foreground" />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text className="text-muted-foreground">
              This action cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" onPress={() => setIsOpen(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button variant="destructive" onPress={() => setIsOpen(false)}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

/** One dialog, opened at whichever size the reader picks. */
function AlertDialogSizeExample() {
  const [openSize, setOpenSize] = React.useState<AlertDialogSize | null>(null);

  return (
    <>
      <Showcase>
        {SIZES.map((size) => (
          <Labeled key={size} label={size}>
            <Button variant="outline" onPress={() => setOpenSize(size)}>
              <ButtonText>Open {size}</ButtonText>
            </Button>
          </Labeled>
        ))}
      </Showcase>
      <AlertDialog
        isOpen={openSize !== null}
        onClose={() => setOpenSize(null)}
        size={openSize ?? 'md'}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="md" className="text-foreground">
              size={openSize ?? 'md'}
            </Heading>
            <AlertDialogCloseButton onPress={() => setOpenSize(null)}>
              <Icon as={CloseIcon} size="md" className="text-muted-foreground" />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text className="text-muted-foreground">
              Each size caps the content width differently.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onPress={() => setOpenSize(null)}>
              <ButtonText>Close</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

/** No close button in the header — the footer carries both choices. */
function AlertDialogWithoutCloseButtonExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="md" className="text-foreground">
              Discard changes?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text className="text-muted-foreground">
              Your edits will be lost.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" onPress={() => setIsOpen(false)}>
              <ButtonText>Keep editing</ButtonText>
            </Button>
            <Button variant="destructive" onPress={() => setIsOpen(false)}>
              <ButtonText>Discard</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  render: () => <AlertDialogExample />,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <AlertDialogExample initialOpen />,
};

export const Sizes: Story = {
  render: () => (
    <>
      <Note>
        Only one dialog can be open at a time, so each button opens the dialog at
        a different `size` value. Close it to try the next one.
      </Note>
      <AlertDialogSizeExample />
    </>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => <AlertDialogWithoutCloseButtonExample />,
};
