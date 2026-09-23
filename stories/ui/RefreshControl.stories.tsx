import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { RefreshControl } from '@/components/ui/refresh-control';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Note, Showcase } from '../helpers';

/**
 * `RefreshControl` is a direct re-export of react-native's `RefreshControl`.
 * It is not rendered on its own — it is passed to a `ScrollView` (or
 * `FlatList`) via the `refreshControl` prop, and the scroller draws it above
 * the content when the user pulls down.
 *
 * It has no gluestack variants. Its only visual props (`tintColor`,
 * `titleColor`, `progressBackgroundColor`) take raw colour values rather than
 * theme tokens, so they are deliberately left unset here.
 */

/**
 * Layout-only insurance: the `scroll-view` barrel re-exports the RN primitive
 * rather than importing it, so NativeWind does not wrap it and a `className` on
 * the ScrollView itself may be dropped. Colour still comes from theme tokens on
 * the container and rows.
 */
const FILL = { flex: 1 } as const;

const ROWS = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

function Row({ label }: { label: string }) {
  return (
    <Box className="border-b border-border px-4 py-3">
      <Text className="text-foreground">{label}</Text>
    </Box>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Box className="h-64 w-full overflow-hidden rounded-lg border border-border bg-card">
      {children}
    </Box>
  );
}

/**
 * The realistic usage: local `refreshing` state, flipped back off when the
 * refresh finishes. The button is here because a mouse cannot perform the pull
 * gesture on web.
 */
function PullToRefreshExample() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  return (
    <VStack space="md" className="w-full items-start">
      <Frame>
        <ScrollView
          className="flex-1"
          style={FILL}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {ROWS.map((label) => (
            <Row key={label} label={label} />
          ))}
        </ScrollView>
      </Frame>
      <Button onPress={onRefresh}>
        <ButtonText>Trigger refresh</ButtonText>
      </Button>
      <Text size="sm" className="text-muted-foreground">
        refreshing: {String(refreshing)}
      </Text>
    </VStack>
  );
}

const meta = {
  title: 'UI/RefreshControl',
  component: RefreshControl,
  args: {
    refreshing: false,
  },
  render: () => <PullToRefreshExample />,
} satisfies Meta<typeof RefreshControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        Pull-to-refresh is a native gesture. In the browser there is no pull to
        perform with a mouse, and react-native-web&apos;s `RefreshControl`
        renders as a plain view that ignores `refreshing`, `tintColor` and
        `title` entirely — so no spinner appears here at any point. Use the
        button to exercise the `onRefresh` callback and the state it drives.
      </Note>
      <PullToRefreshExample />
    </VStack>
  ),
};

export const RefreshingState: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `refreshing` is pinned to true here. On iOS and Android this shows the
        platform spinner pinned above the content; on web nothing is drawn.
      </Note>
      <Frame>
        <ScrollView
          className="flex-1"
          style={FILL}
          refreshControl={<RefreshControl refreshing onRefresh={() => {}} />}
        >
          {ROWS.map((label) => (
            <Row key={label} label={label} />
          ))}
        </ScrollView>
      </Frame>
    </VStack>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        `RefreshControl`. There are no variants, sizes or data-states.
      </Note>
      <Note>
        Platform split on native: iOS supports `tintColor`, `title` and
        `titleColor`; Android supports `colors`, `progressBackgroundColor`,
        `size` and `enabled`. Passing the wrong platform&apos;s props is
        silently ignored rather than an error.
      </Note>
      <Note>
        `progressViewOffset` is the usual fix when a sticky header overlaps the
        spinner. It has no effect on web.
      </Note>
    </Showcase>
  ),
};
