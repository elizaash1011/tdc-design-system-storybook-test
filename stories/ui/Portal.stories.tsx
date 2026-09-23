import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Portal } from '@/components/ui/portal';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Note } from '../helpers';

/**
 * Portal has no styling of its own — it only relocates its children into the
 * app-level overlay container. Everything visible below is plain Box/Text.
 * The wrapper lives at module scope (hooks may not be called inside a story
 * `render`).
 */
function PortalExample({ initialOpen = false }: { initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <>
      <VStack space="md" className="items-start">
        <Text className="text-muted-foreground">
          This paragraph stays in the normal document flow.
        </Text>
        <Button onPress={() => setIsOpen(true)}>
          <ButtonText>Show portalled content</ButtonText>
        </Button>
      </VStack>
      <Portal isOpen={isOpen}>
        <Box className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center">
          <Box className="w-full max-w-sm rounded-md border border-border bg-card p-6">
            <VStack space="sm" className="items-start">
              <Heading size="sm" className="text-foreground">
                Portalled content
              </Heading>
              <Text size="sm" className="text-muted-foreground">
                Rendered at the root of the overlay container, above the rest of
                the tree, regardless of where it sits in the component tree.
              </Text>
              <Button variant="outline" onPress={() => setIsOpen(false)}>
                <ButtonText>Close</ButtonText>
              </Button>
            </VStack>
          </Box>
        </Box>
      </Portal>
    </>
  );
}

/** Two portals open at once — the later one paints on top. */
function PortalLayeredExample() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Show both layers</ButtonText>
      </Button>
      <Portal isOpen={isOpen}>
        <Box className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center">
          <Box className="h-48 w-full max-w-sm rounded-md border border-border bg-muted p-4">
            <Text size="sm" className="text-muted-foreground">
              First portal
            </Text>
          </Box>
        </Box>
      </Portal>
      <Portal isOpen={isOpen}>
        <Box className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center">
          <Box className="w-full max-w-xs rounded-md border border-border bg-card p-4">
            <VStack space="sm" className="items-start">
              <Text size="sm" className="text-foreground">
                Second portal, painted on top
              </Text>
              <Button variant="outline" onPress={() => setIsOpen(false)}>
                <ButtonText>Close</ButtonText>
              </Button>
            </VStack>
          </Box>
        </Box>
      </Portal>
    </>
  );
}

const meta = {
  title: 'UI/Portal',
  component: Portal,
  render: () => <PortalExample />,
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Note>
        Portal is structural: it has no variants, no tokens and no visual style.
        It takes `isOpen` and mounts its children into the overlay container
        that `GluestackUIProvider` sets up, which is how Modal, Drawer,
        Actionsheet, Popover, Menu and Toast all escape their parent&apos;s
        layout and clipping.
      </Note>
      <PortalExample />
    </>
  ),
};

export const Open: Story = {
  render: () => <PortalExample initialOpen />,
};

export const Layered: Story = {
  render: () => (
    <>
      <Note>
        Portals stack in mount order, so a second portal paints over the first.
        `animationPreset` only applies when `useRNModal` is set, which is the
        native-only code path.
      </Note>
      <PortalLayeredExample />
    </>
  ),
};
