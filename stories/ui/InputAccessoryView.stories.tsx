import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';
import { Platform } from 'react-native';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField } from '@/components/ui/input';
import { InputAccessoryView } from '@/components/ui/input-accessory-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Note, Showcase } from '../helpers';

/**
 * `InputAccessoryView` is a direct re-export of react-native's
 * `InputAccessoryView` — the iOS-only bar that docks above the keyboard for the
 * focused `TextInput`.
 *
 * It is iOS-only in the strongest sense here: react-native-web does not export
 * `InputAccessoryView` at all, so in Storybook the imported value is
 * `undefined` and rendering it would throw "Element type is invalid". Every
 * story therefore guards on `Platform.OS === 'ios'` and shows a static preview
 * of the bar in its place.
 *
 * It has no gluestack variants — `nativeID`, `backgroundColor` and `style` are
 * the whole API.
 */

const ACCESSORY_ID = 'story-accessory-view';

const IS_IOS = Platform.OS === 'ios';

/**
 * The bar's contents, shared between the real `InputAccessoryView` on iOS and
 * the static preview elsewhere.
 */
function AccessoryBar() {
  return (
    <HStack
      space="sm"
      className="w-full items-center justify-between border-t border-border bg-muted px-3 py-2"
    >
      <Text size="sm" className="text-muted-foreground">
        Accessory bar
      </Text>
      <HStack space="sm">
        <Button size="sm" variant="ghost">
          <ButtonText>Clear</ButtonText>
        </Button>
        <Button size="sm">
          <ButtonText>Done</ButtonText>
        </Button>
      </HStack>
    </HStack>
  );
}

/**
 * The input that owns the accessory view. `inputAccessoryViewID` must match the
 * `nativeID` on the `InputAccessoryView`, and both must be mounted in the same
 * tree.
 */
function AccessoryExample() {
  return (
    <VStack space="md" className="w-full max-w-sm items-start">
      <Box className="w-full rounded-lg border border-border bg-card p-3">
        <Input>
          <InputField
            placeholder="Focus me on iOS"
            inputAccessoryViewID={ACCESSORY_ID}
          />
        </Input>
      </Box>

      {/* Real component — iOS only; undefined on web and unsupported on Android. */}
      {IS_IOS ? (
        <InputAccessoryView nativeID={ACCESSORY_ID}>
          <AccessoryBar />
        </InputAccessoryView>
      ) : null}

      {/* Static stand-in so the bar's design is reviewable off-device. */}
      <VStack space="xs" className="w-full">
        <Text size="xs" className="uppercase tracking-wide text-muted-foreground">
          preview (not the real component)
        </Text>
        <Box className="w-full overflow-hidden rounded-lg border border-border bg-card">
          <AccessoryBar />
        </Box>
      </VStack>
    </VStack>
  );
}

/**
 * `component` is deliberately omitted: on web the imported value is
 * `undefined`, and handing that to Storybook for docgen is worse than having no
 * prop table. Every story supplies its own `render`.
 */
const meta = {
  title: 'UI/InputAccessoryView',
  render: () => <AccessoryExample />,
} satisfies Meta<typeof InputAccessoryView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        iOS-only. react-native-web does not implement or export
        `InputAccessoryView`, so on web the import resolves to `undefined` and
        the component is not rendered at all here — the bar below is a static
        preview of the same children, not the component. On Android nothing
        renders either. On iOS the real bar docks above the keyboard whenever
        the input with the matching `inputAccessoryViewID` is focused.
      </Note>
      <AccessoryExample />
    </VStack>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        `InputAccessoryView`. There are no variants, sizes or data-states.
      </Note>
      <Note>
        Wiring: put the same string on the input&apos;s
        `inputAccessoryViewID` and the accessory view&apos;s `nativeID`. A
        mismatch fails silently — the bar simply never appears.
      </Note>
      <Note>
        The accessory view is positioned by the OS, not by your layout, so it
        ignores where you mount it in the tree. It also does not inherit the
        surrounding theme: `backgroundColor` takes a raw colour value, so drive
        it from the resolved theme colour rather than a token class if you need
        it to follow dark mode.
      </Note>
      <Note>
        For a cross-platform toolbar above the keyboard, use
        `react-native-keyboard-controller`&apos;s `KeyboardToolbar` /
        `KeyboardStickyView` (already a dependency) instead of this primitive.
      </Note>
    </Showcase>
  ),
};
