import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDownIcon } from '@/components/ui/icon';
import { Labeled, Note, Showcase } from '../helpers';

const TYPES = ['single', 'multiple'] as const;

const ITEMS = [
  { value: 'one', title: 'Section one', body: 'Body copy for the first section.' },
  { value: 'two', title: 'Section two', body: 'Body copy for the second section.' },
  { value: 'three', title: 'Section three', body: 'Body copy for the third section.' },
] as const;

/**
 * One item, assembled the way the component is meant to be used: the icon is a
 * single ChevronDownIcon and `AccordionIcon` rotates it on expand, so stories
 * never swap icons by hand.
 */
function Item({
  value,
  title,
  body,
  isDisabled,
}: {
  value: string;
  title: string;
  body: string;
  isDisabled?: boolean;
}) {
  return (
    <AccordionItem
      value={value}
      isDisabled={isDisabled}
      className="border-b border-border"
    >
      <AccordionHeader>
        <AccordionTrigger>
          <AccordionTitleText>{title}</AccordionTitleText>
          <AccordionIcon as={ChevronDownIcon} />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        <AccordionContentText>{body}</AccordionContentText>
      </AccordionContent>
    </AccordionItem>
  );
}

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  argTypes: {
    type: { control: 'select', options: TYPES },
    isCollapsible: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    type: 'single',
    isCollapsible: true,
    isDisabled: false,
  },
  render: (args) => (
    <Accordion {...args} className="max-w-sm rounded-lg border border-border bg-card px-4">
      {ITEMS.map((item) => (
        <Item key={item.value} value={item.value} title={item.title} body={item.body} />
      ))}
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Types: Story = {
  render: () => (
    <Showcase>
      {TYPES.map((type) => (
        <Labeled key={type} label={type} className="w-full max-w-sm">
          <Accordion
            type={type}
            isCollapsible
            defaultValue={['one']}
            className="rounded-lg border border-border bg-card px-4"
          >
            {ITEMS.map((item) => (
              <Item
                key={item.value}
                value={item.value}
                title={item.title}
                body={item.body}
              />
            ))}
          </Accordion>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Showcase>
      <Note>
        `defaultValue` takes an array of item values even when `type` is
        &quot;single&quot;.
      </Note>
      <Labeled label="defaultValue=[two]" className="w-full max-w-sm">
        <Accordion
          type="single"
          isCollapsible
          defaultValue={['two']}
          className="rounded-lg border border-border bg-card px-4"
        >
          {ITEMS.map((item) => (
            <Item
              key={item.value}
              value={item.value}
              title={item.title}
              body={item.body}
            />
          ))}
        </Accordion>
      </Labeled>
    </Showcase>
  ),
};

export const NotCollapsible: Story = {
  render: () => (
    <Showcase>
      <Note>
        {'With `isCollapsible={false}` the open item cannot be closed by '}
        pressing its own trigger — one section always stays expanded.
      </Note>
      <Labeled label="isCollapsible=false" className="w-full max-w-sm">
        <Accordion
          type="single"
          isCollapsible={false}
          defaultValue={['one']}
          className="rounded-lg border border-border bg-card px-4"
        >
          {ITEMS.map((item) => (
            <Item
              key={item.value}
              value={item.value}
              title={item.title}
              body={item.body}
            />
          ))}
        </Accordion>
      </Labeled>
    </Showcase>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Showcase>
      <Note>
        `data-[disabled=true]` is the only data-state the trigger styles, and it
        drops the trigger to 40% opacity. It can come from the whole accordion
        or from a single item.
      </Note>
      <Labeled label="item isDisabled" className="w-full max-w-sm">
        <Accordion
          type="single"
          isCollapsible
          className="rounded-lg border border-border bg-card px-4"
        >
          <Item value="one" title="Section one" body="Body copy for the first section." />
          <Item
            value="two"
            title="Section two (disabled)"
            body="Body copy for the second section."
            isDisabled
          />
          <Item value="three" title="Section three" body="Body copy for the third section." />
        </Accordion>
      </Labeled>
      <Labeled label="accordion isDisabled" className="w-full max-w-sm">
        <Accordion
          type="single"
          isCollapsible
          isDisabled
          className="rounded-lg border border-border bg-card px-4"
        >
          {ITEMS.map((item) => (
            <Item
              key={item.value}
              value={item.value}
              title={item.title}
              body={item.body}
            />
          ))}
        </Accordion>
      </Labeled>
    </Showcase>
  ),
};
