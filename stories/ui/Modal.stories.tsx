import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['xs', 'sm', 'md', 'lg', 'full'] as const;

type ModalSize = (typeof SIZES)[number];

/**
 * Modal is an overlay, so it needs open state to be visible. The wrapper lives
 * at module scope (hooks may not be called inside a story `render`).
 */
function ModalExample({
  initialOpen = false,
  size = 'md',
}: {
  initialOpen?: boolean;
  size?: ModalSize;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open modal</ButtonText>
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-foreground">
              Title
            </Heading>
            <ModalCloseButton onPress={() => setIsOpen(false)}>
              <Icon as={CloseIcon} size="md" className="text-muted-foreground" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text className="text-muted-foreground">
              Supporting copy explaining what this dialog is for.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onPress={() => setIsOpen(false)}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={() => setIsOpen(false)}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

/** One modal, opened at whichever size the reader picks. */
function ModalSizeExample() {
  const [openSize, setOpenSize] = React.useState<ModalSize | null>(null);

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
      <Modal
        isOpen={openSize !== null}
        onClose={() => setOpenSize(null)}
        size={openSize ?? 'md'}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-foreground">
              size={openSize ?? 'md'}
            </Heading>
            <ModalCloseButton onPress={() => setOpenSize(null)}>
              <Icon as={CloseIcon} size="md" className="text-muted-foreground" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text className="text-muted-foreground">
              Each size caps the content width differently.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setOpenSize(null)}>
              <ButtonText>Close</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

/** Body only — no header or footer slots. */
function ModalMinimalExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open modal</ButtonText>
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
        <ModalBackdrop />
        <ModalContent>
          <ModalBody>
            <Text className="text-foreground">
              A modal can be body-only when there is nothing to title or confirm.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onPress={() => setIsOpen(false)}>
              <ButtonText>Dismiss</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const meta = {
  title: 'UI/Modal',
  component: Modal,
  render: () => <ModalExample />,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  render: () => <ModalExample initialOpen />,
};

export const Sizes: Story = {
  render: () => (
    <>
      <Note>
        Only one modal can be open at a time, so each button opens the modal at a
        different `size` value. Close it to try the next one.
      </Note>
      <ModalSizeExample />
    </>
  ),
};

export const BodyOnly: Story = {
  render: () => <ModalMinimalExample />,
};
