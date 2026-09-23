import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Labeled, Note, Showcase } from '../helpers';

const COLUMNS = ['Column A', 'Column B', 'Column C'] as const;

const ROWS = [
  ['Row 1', 'Value 1', 'Detail 1'],
  ['Row 2', 'Value 2', 'Detail 2'],
  ['Row 3', 'Value 3', 'Detail 3'],
] as const;

const meta = {
  title: 'UI/Table',
  component: Table,
  render: () => (
    <Showcase className="w-full">
      <Note>
        `tableStyle` fixes the table at `w-[800px]`, so it overflows the mobile
        viewport by design — switch the viewport toolbar to Desktop to see the
        whole width.
      </Note>
      <Table>
        <TableCaption>Caption describing the table.</TableCaption>
        <TableHeader>
          <TableRow>
            {COLUMNS.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell) => (
                <TableData key={cell}>{cell}</TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableData>Footer</TableData>
            <TableData>Value</TableData>
            <TableData>Detail</TableData>
          </TableRow>
        </TableFooter>
      </Table>
    </Showcase>
  ),
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RowVariants: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `isHeaderRow` and `isFooterRow` are the only variants on `TableRow`, and
        they are not props — each row reads them from the context its
        `TableHeader` / `TableFooter` parent provides. A header row keeps the
        bottom border; a footer row drops it.
      </Note>
      <Labeled label="header / body / footer rows" className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell) => (
                  <TableData key={cell}>{cell}</TableData>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableData>Footer</TableData>
              <TableData>Value</TableData>
              <TableData>Detail</TableData>
            </TableRow>
          </TableFooter>
        </Table>
      </Labeled>
    </Showcase>
  ),
};

export const HeaderAndBodyOnly: Story = {
  render: () => (
    <Showcase className="w-full">
      <Labeled label="no footer, no caption" className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell) => (
                  <TableData key={cell}>{cell}</TableData>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Labeled>
    </Showcase>
  ),
};

export const Caption: Story = {
  render: () => (
    <Showcase className="w-full">
      <Note>
        `TableCaption` is declared first so the markup stays valid HTML; on web
        the caption style adds `caption-bottom`, which renders it under the
        table instead.
      </Note>
      <Table>
        <TableCaption>Caption describing the table.</TableCaption>
        <TableHeader>
          <TableRow>
            {COLUMNS.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row[0]}>
              {row.map((cell) => (
                <TableData key={cell}>{cell}</TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Showcase>
  ),
};
