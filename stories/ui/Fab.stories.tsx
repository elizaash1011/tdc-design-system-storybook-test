import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Box } from '@/components/ui/box';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { AddIcon, EditIcon } from '@/components/ui/icon';
import { Labeled, Note, Showcase } from '../helpers';

const SIZES = ['sm', 'md', 'lg'] as const;
const PLACEMENTS = [
  'top left',
  'top center',
  'top right',
  'bottom left',
  'bottom center',
  'bottom right',
] as const;

/**
 * Fab is positioned `absolute`, so it only shows up inside a relatively
 * positioned parent that has an explicit height.
 */
function FabStage({ children }: { children: React.ReactNode }) {
  return (
    <Box className="relative h-64 w-full rounded-md border border-border bg-muted">
      {children}
    </Box>
  );
}

const meta = {
  title: 'UI/Fab',
  component: Fab,
  render: () => (
    <FabStage>
      <Fab>
        <FabIcon as={AddIcon} />
        <FabLabel>Action</FabLabel>
      </Fab>
    </FabStage>
  ),
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <FabStage>
            <Fab size={size}>
              <FabIcon as={AddIcon} />
              <FabLabel>Action</FabLabel>
            </Fab>
          </FabStage>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Placements: Story = {
  render: () => (
    <>
      <Note>
        All six `placement` values in one stage — each Fab pins itself to a
        different corner or edge of the relatively positioned parent.
      </Note>
      <FabStage>
        {PLACEMENTS.map((placement) => (
          <Fab key={placement} size="sm" placement={placement}>
            <FabLabel>{placement}</FabLabel>
          </Fab>
        ))}
      </FabStage>
    </>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <FabStage>
            <Fab size={size}>
              <FabIcon as={EditIcon} />
            </Fab>
          </FabStage>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const LabelOnly: Story = {
  render: () => (
    <FabStage>
      <Fab>
        <FabLabel>Label only</FabLabel>
      </Fab>
    </FabStage>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Showcase>
      {SIZES.map((size) => (
        <Labeled key={size} label={size}>
          <FabStage>
            <Fab size={size} isDisabled>
              <FabIcon as={AddIcon} />
              <FabLabel>Disabled</FabLabel>
            </Fab>
          </FabStage>
        </Labeled>
      ))}
    </Showcase>
  ),
};
