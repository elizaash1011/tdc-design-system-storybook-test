import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  Tabs,
  TabsContent,
  TabsContentWrapper,
  TabsIndicator,
  TabsList,
  TabsTrigger,
  TabsTriggerIcon,
  TabsTriggerText,
} from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { BellIcon, SettingsIcon, StarIcon } from '@/components/ui/icon';
import { Labeled, Note, Showcase } from '../helpers';

const VARIANTS = ['filled', 'underlined'] as const;
const ORIENTATIONS = ['horizontal', 'vertical'] as const;

const PANELS = [
  { value: 'one', label: 'One', body: 'Panel one content.' },
  { value: 'two', label: 'Two', body: 'Panel two content.' },
  { value: 'three', label: 'Three', body: 'Panel three content.' },
] as const;

/**
 * The full composition. `TabsIndicator` has to be a direct child of
 * `TabsList` — the list pulls it out by displayName and renders it behind the
 * triggers, which is what lets the animated indicator slide between them.
 */
function Panels() {
  return (
    <>
      <TabsList>
        {PANELS.map((panel) => (
          <TabsTrigger key={panel.value} value={panel.value}>
            <TabsTriggerText>{panel.label}</TabsTriggerText>
          </TabsTrigger>
        ))}
        <TabsIndicator />
      </TabsList>
      <TabsContentWrapper>
        {PANELS.map((panel) => (
          <TabsContent key={panel.value} value={panel.value}>
            <Text className="text-foreground">{panel.body}</Text>
          </TabsContent>
        ))}
      </TabsContentWrapper>
    </>
  );
}

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    orientation: { control: 'select', options: ORIENTATIONS },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'filled',
    orientation: 'horizontal',
    defaultValue: 'one',
    disabled: false,
  },
  render: (args) => (
    <Showcase className="w-full">
      <Note>
        Tabs is marked alpha upstream in gluestack-ui v5. Its API — the
        `TabsContentWrapper` layer, the indicator layout contract, and the
        variant names — may change in a later release, so treat this page as a
        snapshot rather than a stable contract.
      </Note>
      <Tabs {...args} className="max-w-sm">
        <Panels />
      </Tabs>
    </Showcase>
  ),
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Showcase className="w-full">
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant} className="w-full max-w-sm">
          <Tabs variant={variant} defaultValue="one">
            <Panels />
          </Tabs>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Orientations: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        A horizontal `TabsList` renders its triggers inside a FlatList so they
        can scroll; a vertical one renders them directly. That difference is why
        the two orientations lay out slightly differently.
      </Note>
      {ORIENTATIONS.map((orientation) => (
        <Labeled key={orientation} label={orientation} className="w-full max-w-sm">
          <Tabs orientation={orientation} defaultValue="one">
            <Panels />
          </Tabs>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Showcase className="w-full">
      <Labeled label="icon + label" className="w-full max-w-sm">
        <Tabs defaultValue="one" className="max-w-sm">
          <TabsList>
            <TabsTrigger value="one">
              <TabsTriggerIcon as={StarIcon} />
              <TabsTriggerText>One</TabsTriggerText>
            </TabsTrigger>
            <TabsTrigger value="two">
              <TabsTriggerIcon as={BellIcon} />
              <TabsTriggerText>Two</TabsTriggerText>
            </TabsTrigger>
            <TabsTrigger value="three">
              <TabsTriggerIcon as={SettingsIcon} />
              <TabsTriggerText>Three</TabsTriggerText>
            </TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContentWrapper>
            {PANELS.map((panel) => (
              <TabsContent key={panel.value} value={panel.value}>
                <Text className="text-foreground">{panel.body}</Text>
              </TabsContent>
            ))}
          </TabsContentWrapper>
        </Tabs>
      </Labeled>
    </Showcase>
  ),
};

export const States: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        The trigger styles three data-states: `selected` (full-contrast label),
        `hover` (hover a label to see it lift to 90% contrast), and `disabled`
        (40% opacity). Disabled applies per trigger or to the whole tab set.
      </Note>
      <Labeled label="trigger disabled" className="w-full max-w-sm">
        <Tabs defaultValue="one">
          <TabsList>
            <TabsTrigger value="one">
              <TabsTriggerText>One</TabsTriggerText>
            </TabsTrigger>
            <TabsTrigger value="two" disabled>
              <TabsTriggerText>Two</TabsTriggerText>
            </TabsTrigger>
            <TabsTrigger value="three">
              <TabsTriggerText>Three</TabsTriggerText>
            </TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContentWrapper>
            {PANELS.map((panel) => (
              <TabsContent key={panel.value} value={panel.value}>
                <Text className="text-foreground">{panel.body}</Text>
              </TabsContent>
            ))}
          </TabsContentWrapper>
        </Tabs>
      </Labeled>
      <Labeled label="tabs disabled" className="w-full max-w-sm">
        <Tabs defaultValue="one" disabled>
          <Panels />
        </Tabs>
      </Labeled>
    </Showcase>
  ),
};
