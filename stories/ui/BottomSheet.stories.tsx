import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetContent,
  BottomSheetDragIndicator,
  BottomSheetFooter,
  BottomSheetItem,
  BottomSheetItemText,
  BottomSheetPortal,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetTrigger,
} from '@/components/ui/bottomsheet';
import type { BottomSheetRef } from '@/components/ui/bottomsheet';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Note, Showcase } from '../helpers';

/**
 * `BottomSheet` wraps `@gorhom/bottom-sheet` and is marked React Native / Expo
 * only upstream. It needs `react-native-gesture-handler` (for the pan gesture)
 * and `react-native-reanimated` worklets, neither of which behaves the same in
 * the browser — so treat every story here as "may not render on web" and verify
 * on a simulator.
 *
 * Composition, from the source:
 *
 * - `BottomSheet` — context root; holds the ref, visibility and snap index.
 *   Renders no view of its own.
 * - `BottomSheetTrigger` — pressable that calls `handleOpen(index)`.
 * - `BottomSheetPortal` — mounts the gorhom sheet inside a gluestack `Overlay`.
 *   Returns `null` until the trigger opens it, so nothing shows at rest.
 * - `BottomSheetDragIndicator` — the grab handle (`handleComponent`).
 * - `BottomSheetBackdrop` — the dimmer (`backdropComponent`).
 * - `BottomSheetContent` / `BottomSheetFooter` — the padded body and the
 *   bordered footer.
 * - `BottomSheetItem` + `BottomSheetItemText` — menu rows; close on select by
 *   default.
 * - `BottomSheetScrollView`, `BottomSheetFlatList`, `BottomSheetSectionList`,
 *   `BottomSheetTextInput` — gorhom's gesture-aware scrollers and input.
 *
 * There are no `size` or `variant` props: `snapPoints` is how you size a sheet.
 */

const FILL = { flex: 1 } as const;

/**
 * `GestureHandlerRootView` must be an ancestor of the sheet. It comes from
 * node_modules, so NativeWind does not wrap it and it is sized with `style`;
 * the visible surface is the `Box` around it.
 */
function SheetStage({ children }: { children: React.ReactNode }) {
  return (
    <Box className="h-96 w-full overflow-hidden rounded-lg border border-border bg-card">
      <GestureHandlerRootView style={FILL}>
        <Box className="flex-1 items-center justify-center p-6">{children}</Box>
      </GestureHandlerRootView>
    </Box>
  );
}

function BasicSheetExample() {
  return (
    <SheetStage>
      <BottomSheet>
        <BottomSheetTrigger>
          <Text className="text-foreground">Open bottom sheet</Text>
        </BottomSheetTrigger>

        <BottomSheetPortal
          snapPoints={['40%']}
          backdropComponent={BottomSheetBackdrop}
          handleComponent={BottomSheetDragIndicator}
        >
          <BottomSheetContent>
            <Text className="text-lg font-semibold text-foreground">
              Bottom sheet
            </Text>
            <Text size="sm" className="text-muted-foreground">
              Drag the handle down, tap the backdrop, or press Escape on web to
              dismiss.
            </Text>
          </BottomSheetContent>
        </BottomSheetPortal>
      </BottomSheet>
    </SheetStage>
  );
}

function MenuSheetExample() {
  return (
    <SheetStage>
      <BottomSheet>
        <BottomSheetTrigger>
          <Text className="text-foreground">Open menu sheet</Text>
        </BottomSheetTrigger>

        <BottomSheetPortal
          snapPoints={['45%']}
          backdropComponent={BottomSheetBackdrop}
          handleComponent={BottomSheetDragIndicator}
        >
          <BottomSheetContent>
            {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((label) => (
              <BottomSheetItem key={label}>
                <BottomSheetItemText>{label}</BottomSheetItemText>
              </BottomSheetItem>
            ))}
            <BottomSheetItem closeOnSelect={false}>
              <BottomSheetItemText>
                Item 5 (stays open on select)
              </BottomSheetItemText>
            </BottomSheetItem>
          </BottomSheetContent>
        </BottomSheetPortal>
      </BottomSheet>
    </SheetStage>
  );
}

function SnapPointsExample() {
  return (
    <SheetStage>
      <BottomSheet defaultSnapIndex={0}>
        <HStack space="sm">
          <BottomSheetTrigger index={0}>
            <Text className="text-foreground">Open at 25%</Text>
          </BottomSheetTrigger>
          <BottomSheetTrigger index={1}>
            <Text className="text-foreground">Open at 75%</Text>
          </BottomSheetTrigger>
        </HStack>

        <BottomSheetPortal
          snapPoints={['25%', '75%']}
          backdropComponent={BottomSheetBackdrop}
          handleComponent={BottomSheetDragIndicator}
        >
          <BottomSheetContent>
            <Text className="text-lg font-semibold text-foreground">
              Two snap points
            </Text>
            <Text size="sm" className="text-muted-foreground">
              Each trigger passes a different `index`, so the same sheet opens
              at a different height.
            </Text>
          </BottomSheetContent>
        </BottomSheetPortal>
      </BottomSheet>
    </SheetStage>
  );
}

function ScrollableSheetExample() {
  return (
    <SheetStage>
      <BottomSheet>
        <BottomSheetTrigger>
          <Text className="text-foreground">Open scrollable sheet</Text>
        </BottomSheetTrigger>

        <BottomSheetPortal
          snapPoints={['60%']}
          backdropComponent={BottomSheetBackdrop}
          handleComponent={BottomSheetDragIndicator}
        >
          <BottomSheetScrollView>
            {Array.from({ length: 20 }, (_, i) => (
              <Box
                key={i}
                className="border-b border-border px-4 py-3"
              >
                <Text className="text-foreground">Item {i + 1}</Text>
              </Box>
            ))}
          </BottomSheetScrollView>
        </BottomSheetPortal>
      </BottomSheet>
    </SheetStage>
  );
}

function FooterAndInputExample() {
  return (
    <SheetStage>
      <BottomSheet>
        <BottomSheetTrigger>
          <Text className="text-foreground">Open form sheet</Text>
        </BottomSheetTrigger>

        <BottomSheetPortal
          snapPoints={['50%']}
          backdropComponent={BottomSheetBackdrop}
          handleComponent={BottomSheetDragIndicator}
          footerComponent={(props) => (
            <BottomSheetFooter {...props}>
              <HStack space="sm" className="justify-end">
                <Button variant="outline">
                  <ButtonText>Cancel</ButtonText>
                </Button>
                <Button>
                  <ButtonText>Save</ButtonText>
                </Button>
              </HStack>
            </BottomSheetFooter>
          )}
        >
          <BottomSheetContent>
            <Text className="text-lg font-semibold text-foreground">
              Form sheet
            </Text>
            <BottomSheetTextInput placeholder="Label" />
            <Text size="sm" className="text-muted-foreground">
              `BottomSheetTextInput` is gorhom&apos;s keyboard-aware input; the
              footer stays pinned above it.
            </Text>
          </BottomSheetContent>
        </BottomSheetPortal>
      </BottomSheet>
    </SheetStage>
  );
}

/** Imperative control via the `BottomSheetRef` handle on the root. */
function ImperativeExample() {
  const ref = React.useRef<BottomSheetRef>(null);

  return (
    <VStack space="md" className="w-full items-start">
      <SheetStage>
        <BottomSheet ref={ref}>
          <HStack space="sm">
            <Button size="sm" onPress={() => ref.current?.open()}>
              <ButtonText>open()</ButtonText>
            </Button>
            <Button size="sm" variant="outline" onPress={() => ref.current?.expand()}>
              <ButtonText>expand()</ButtonText>
            </Button>
            <Button size="sm" variant="outline" onPress={() => ref.current?.close()}>
              <ButtonText>close()</ButtonText>
            </Button>
          </HStack>

          <BottomSheetPortal
            snapPoints={['30%', '80%']}
            backdropComponent={BottomSheetBackdrop}
            handleComponent={BottomSheetDragIndicator}
          >
            <BottomSheetContent>
              <Text className="text-lg font-semibold text-foreground">
                Imperative control
              </Text>
              <Text size="sm" className="text-muted-foreground">
                `open`, `close`, `snapToIndex`, `expand` and `collapse` are
                exposed on the ref.
              </Text>
            </BottomSheetContent>
          </BottomSheetPortal>
        </BottomSheet>
      </SheetStage>
    </VStack>
  );
}

const meta = {
  title: 'UI/BottomSheet',
  component: BottomSheet,
  render: () => <BasicSheetExample />,
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        React Native / Expo only upstream. This component is built on
        `@gorhom/bottom-sheet` plus `react-native-gesture-handler` and
        reanimated worklets; it may not render or animate at all in the browser.
        If the sheet does open on web, the drag gesture and spring timing will
        not match a device. Treat this story as a smoke test and verify the real
        thing in a simulator.
      </Note>
      <Note>
        `BottomSheetPortal` returns `null` until the trigger opens the sheet, so
        nothing is visible at rest — that is correct, not a broken story. When
        it does open it mounts into a gluestack `Overlay`, which covers the whole
        preview frame rather than just the bordered box.
      </Note>
      <BasicSheetExample />
    </VStack>
  ),
};

export const MenuItems: Story = {
  render: () => <MenuSheetExample />,
};

export const SnapPoints: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `snapPoints` is the sizing API — there is no `size` prop. The root also
        takes `defaultSnapIndex`, and each `BottomSheetTrigger` can override it
        with `index`.
      </Note>
      <SnapPointsExample />
    </VStack>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        Use `BottomSheetScrollView` (or `BottomSheetFlatList` /
        `BottomSheetSectionList`) rather than a plain scroller, so the sheet can
        tell a content scroll apart from a dismiss drag. That handoff is
        gesture-handler work and is the most likely thing to misbehave on web.
      </Note>
      <ScrollableSheetExample />
    </VStack>
  ),
};

export const FooterAndInput: Story = {
  render: () => <FooterAndInputExample />,
};

export const ImperativeRef: Story = {
  render: () => <ImperativeExample />,
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        Required ancestors: a `GestureHandlerRootView` (supplied by each story
        here) and the `OverlayProvider` that `GluestackUIProvider` already
        installs. Without the gesture root the sheet mounts but cannot be
        dragged.
      </Note>
      <Note>
        There are no tva `size` or `variant` props. The only styling hooks are
        `className`, `backgroundClassName` and `handleIndicatorClassName` on
        `BottomSheetPortal`, plus `className` on content, items and the footer.
        The backdrop is fixed at `bg-black opacity-50` in the source, which does
        not change between light and dark mode.
      </Note>
      <Note>
        `BottomSheetItem` carries the only data-state in this component:
        `data-[focus=true]` for keyboard focus, plus hover and active styling.
        It closes the sheet on press unless you pass
        `closeOnSelect={false}`.
      </Note>
      <Note>
        On web `BottomSheetContent` wraps its children in a focus scope and
        binds Escape to close; on native it renders them directly. Pass
        `focusScope={false}` to opt out.
      </Note>
    </Showcase>
  ),
};
