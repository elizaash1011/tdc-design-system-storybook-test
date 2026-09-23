import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';

import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import '@/global.css';

/**
 * Smoke-test screen for the TDC design system.
 *
 * This app target exists only to prove the gluestack-ui + NativeWind toolchain
 * bundles and renders. The real deliverable of this repo is Storybook
 * (`npm run storybook`), which is where the full component set is exercised.
 */
export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  return (
    <GluestackUIProvider mode={mode}>
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="p-6 gap-6"
      >
        <VStack space="md">
          <Heading size="2xl">TDC Design System</Heading>
          <Text className="text-muted-foreground">
            gluestack-ui v5 smoke test — Button, Card, Input, Badge.
          </Text>
          <Button
            variant="outline"
            size="sm"
            onPress={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
          >
            <ButtonText>Toggle {mode === 'light' ? 'dark' : 'light'} mode</ButtonText>
          </Button>
        </VStack>

        <Card size="default" className="gap-4">
          <Heading size="lg">Card</Heading>
          <Text className="text-muted-foreground">
            A Card wrapping an Input, a Badge row and Buttons.
          </Text>

          <Input>
            <InputField placeholder="Member ID" />
          </Input>

          <VStack space="sm">
            <Badge variant="default">
              <BadgeText>Default</BadgeText>
            </Badge>
            <Badge variant="secondary">
              <BadgeText>Secondary</BadgeText>
            </Badge>
            <Badge variant="destructive">
              <BadgeText>Destructive</BadgeText>
            </Badge>
            <Badge variant="outline">
              <BadgeText>Outline</BadgeText>
            </Badge>
          </VStack>

          <VStack space="sm">
            <Button variant="default">
              <ButtonText>Default</ButtonText>
            </Button>
            <Button variant="secondary">
              <ButtonText>Secondary</ButtonText>
            </Button>
            <Button variant="destructive">
              <ButtonText>Destructive</ButtonText>
            </Button>
            <Button variant="outline">
              <ButtonText>Outline</ButtonText>
            </Button>
            <Button isDisabled>
              <ButtonText>Disabled</ButtonText>
            </Button>
          </VStack>
        </Card>

        <StatusBar style="auto" />
      </ScrollView>
    </GluestackUIProvider>
  );
}
