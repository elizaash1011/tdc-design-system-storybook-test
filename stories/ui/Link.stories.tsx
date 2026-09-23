import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { HStack } from '@/components/ui/hstack';
import { ExternalLinkIcon, Icon } from '@/components/ui/icon';
import { Link, LinkText } from '@/components/ui/link';
import { Labeled, Note, Section, Showcase } from '../helpers';

const SIZES = [
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
] as const;

const TEXT_MODIFIERS = [
  { label: 'bold', props: { bold: true } },
  { label: 'italic', props: { italic: true } },
  { label: 'underline', props: { underline: true } },
  { label: 'strikeThrough', props: { strikeThrough: true } },
  { label: 'sub', props: { sub: true } },
  { label: 'highlight', props: { highlight: true } },
] as const;

const HREF = 'https://example.com';

const meta = {
  title: 'UI/Link',
  component: Link,
  argTypes: {
    isExternal: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    href: HREF,
    isExternal: true,
    isDisabled: false,
  },
  render: (args) => (
    <Showcase>
      <Note>
        Every link on this page points at https://example.com. With
        `isExternal`, the web build adds `target=&quot;_blank&quot;` and opens a
        new tab; on native the URL is handed to the system browser. Press with
        care — these stories really do navigate.
      </Note>
      <Link {...args}>
        <LinkText>Link label</LinkText>
      </Link>
    </Showcase>
  ),
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      <Note>
        `size` is a variant on `LinkText`, not on `Link`. It defaults to `md`.
      </Note>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Link href={HREF} isExternal>
            <LinkText size={size}>Link label</LinkText>
          </Link>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const TextModifiers: Story = {
  render: () => (
    <Showcase>
      <Note>
        `highlight` resolves to `bg-yellow-500` in the component source — a raw
        Tailwind color rather than a theme token, so it will not follow a
        retheme.
      </Note>
      {TEXT_MODIFIERS.map((modifier) => (
        <Labeled key={modifier.label} label={modifier.label}>
          <Link href={HREF} isExternal>
            <LinkText {...modifier.props}>Link label</LinkText>
          </Link>
        </Labeled>
      ))}
      <Labeled label="isTruncated">
        <Link href={HREF} isExternal>
          <LinkText isTruncated className="w-32">
            A link label long enough to be truncated
          </LinkText>
        </Link>
      </Labeled>
    </Showcase>
  ),
};

export const States: Story = {
  render: () => (
    <Showcase>
      <Note>
        `LinkText` styles two interaction data-states that need a pointer to
        see: `data-[hover=true]` swaps the underline for an 80% primary colour,
        and `data-[active=true]` (press and hold) turns the label 80%
        destructive. `data-[disabled=true]` is styled on the root.
      </Note>

      <Section title="interactive">
        <Labeled label="default (hover / press me)">
          <Link href={HREF} isExternal>
            <LinkText>Link label</LinkText>
          </Link>
        </Labeled>
      </Section>

      <Section title="disabled">
        <Labeled label="isDisabled">
          <Link href={HREF} isExternal isDisabled>
            <LinkText>Link label</LinkText>
          </Link>
        </Labeled>
      </Section>
    </Showcase>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Showcase>
      <Labeled label="label + external icon">
        <Link href={HREF} isExternal>
          <HStack space="xs" className="items-center">
            <LinkText>Link label</LinkText>
            <Icon as={ExternalLinkIcon} size="sm" className="text-primary" />
          </HStack>
        </Link>
      </Labeled>
    </Showcase>
  ),
};

export const InRunningText: Story = {
  render: () => (
    <Showcase>
      <Note>
        On web the link text is laid out `inline`, so it can sit inside a
        paragraph. On native it is a plain `Text`, which does not inline the
        same way.
      </Note>
      <Labeled label="inline in a sentence">
        <HStack space="xs" className="flex-wrap items-baseline">
          <LinkText size="sm" className="text-muted-foreground no-underline">
            Read the
          </LinkText>
          <Link href={HREF} isExternal>
            <LinkText size="sm">linked document</LinkText>
          </Link>
          <LinkText size="sm" className="text-muted-foreground no-underline">
            for details.
          </LinkText>
        </HStack>
      </Labeled>
    </Showcase>
  ),
};
