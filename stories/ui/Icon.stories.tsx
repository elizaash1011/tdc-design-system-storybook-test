import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import {
  AddIcon,
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  CircleIcon,
  ClockIcon,
  CloseCircleIcon,
  CloseIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  Icon,
  InfoIcon,
  LinkIcon,
  LoaderIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MessageCircleIcon,
  MoonIcon,
  PaperclipIcon,
  PhoneIcon,
  PlayIcon,
  Repeat1Icon,
  RemoveIcon,
  RepeatIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  SunIcon,
  ThreeDotsIcon,
  TrashIcon,
  UnlockIcon,
} from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const;

/**
 * Every named icon exported by `components/ui/icon`. The designer compares this
 * grid against the Figma icon set, so the list is explicit rather than derived.
 */
const ALL_ICONS = [
  { name: 'AddIcon', icon: AddIcon },
  { name: 'AlertCircleIcon', icon: AlertCircleIcon },
  { name: 'ArrowUpIcon', icon: ArrowUpIcon },
  { name: 'ArrowDownIcon', icon: ArrowDownIcon },
  { name: 'ArrowRightIcon', icon: ArrowRightIcon },
  { name: 'ArrowLeftIcon', icon: ArrowLeftIcon },
  { name: 'AtSignIcon', icon: AtSignIcon },
  { name: 'BellIcon', icon: BellIcon },
  { name: 'CalendarDaysIcon', icon: CalendarDaysIcon },
  { name: 'CheckIcon', icon: CheckIcon },
  { name: 'CheckCircleIcon', icon: CheckCircleIcon },
  { name: 'ChevronUpIcon', icon: ChevronUpIcon },
  { name: 'ChevronDownIcon', icon: ChevronDownIcon },
  { name: 'ChevronLeftIcon', icon: ChevronLeftIcon },
  { name: 'ChevronRightIcon', icon: ChevronRightIcon },
  { name: 'ChevronsLeftIcon', icon: ChevronsLeftIcon },
  { name: 'ChevronsRightIcon', icon: ChevronsRightIcon },
  { name: 'ChevronsUpDownIcon', icon: ChevronsUpDownIcon },
  { name: 'CircleIcon', icon: CircleIcon },
  { name: 'ClockIcon', icon: ClockIcon },
  { name: 'CloseIcon', icon: CloseIcon },
  { name: 'CloseCircleIcon', icon: CloseCircleIcon },
  { name: 'CopyIcon', icon: CopyIcon },
  { name: 'DownloadIcon', icon: DownloadIcon },
  { name: 'EditIcon', icon: EditIcon },
  { name: 'EyeIcon', icon: EyeIcon },
  { name: 'EyeOffIcon', icon: EyeOffIcon },
  { name: 'FavouriteIcon', icon: FavouriteIcon },
  { name: 'GlobeIcon', icon: GlobeIcon },
  { name: 'GripVerticalIcon', icon: GripVerticalIcon },
  { name: 'HelpCircleIcon', icon: HelpCircleIcon },
  { name: 'InfoIcon', icon: InfoIcon },
  { name: 'LinkIcon', icon: LinkIcon },
  { name: 'ExternalLinkIcon', icon: ExternalLinkIcon },
  { name: 'LoaderIcon', icon: LoaderIcon },
  { name: 'LockIcon', icon: LockIcon },
  { name: 'MailIcon', icon: MailIcon },
  { name: 'MenuIcon', icon: MenuIcon },
  { name: 'MessageCircleIcon', icon: MessageCircleIcon },
  { name: 'MoonIcon', icon: MoonIcon },
  { name: 'PaperclipIcon', icon: PaperclipIcon },
  { name: 'PhoneIcon', icon: PhoneIcon },
  { name: 'PlayIcon', icon: PlayIcon },
  { name: 'RemoveIcon', icon: RemoveIcon },
  { name: 'RepeatIcon', icon: RepeatIcon },
  { name: 'Repeat1Icon', icon: Repeat1Icon },
  { name: 'SearchIcon', icon: SearchIcon },
  { name: 'SettingsIcon', icon: SettingsIcon },
  { name: 'ShareIcon', icon: ShareIcon },
  { name: 'SlashIcon', icon: SlashIcon },
  { name: 'StarIcon', icon: StarIcon },
  { name: 'SunIcon', icon: SunIcon },
  { name: 'ThreeDotsIcon', icon: ThreeDotsIcon },
  { name: 'TrashIcon', icon: TrashIcon },
  { name: 'UnlockIcon', icon: UnlockIcon },
] as const;

const meta = {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'select', options: SIZES },
  },
  args: {
    size: 'md',
  },
  render: (args) => <Icon as={CheckIcon} {...args} />,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <Icon as={CheckIcon} size={size} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

// A numeric `size` (e.g. size={18}) does set the SVG dimensions at runtime —
// @gluestack-ui/core's IPrimitiveIcon declares `size?: number | string` — but
// the local wrapper in components/ui/icon narrows the prop to the six variant
// names, so passing a number does not typecheck. Deliberately not shown here:
// the gallery should only demonstrate what the component's public type allows.
// To use numeric sizes, widen the prop type in components/ui/icon/index.tsx.

export const Colors: Story = {
  render: () => (
    <Showcase>
      {(
        [
          'text-foreground',
          'text-muted-foreground',
          'text-primary',
          'text-destructive',
        ] as const
      ).map((color) => (
        <Labeled key={color} label={color}>
          <Icon as={CheckIcon} size="xl" className={color} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <>
      <Note>
        Every named icon exported by `components/ui/icon`, rendered at size `xl` for
        comparison against the Figma icon set.
      </Note>
      <Box className="flex-row flex-wrap gap-4">
        {ALL_ICONS.map(({ name, icon }) => (
          <VStack
            key={name}
            space="xs"
            className="w-28 items-center rounded-md border border-border bg-card p-3"
          >
            <Icon as={icon} size="xl" />
            <Text size="2xs" className="text-center text-muted-foreground">
              {name}
            </Text>
          </VStack>
        ))}
      </Box>
    </>
  ),
};
