import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import { CheckIcon, RemoveIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

const OPTIONS = ['Option A', 'Option B', 'Option C'] as const;

/**
 * `Checkbox` has no size or variant axis — its tva is a base only. The visible
 * axes are all states, surfaced as `data-[checked|indeterminate|disabled|invalid|readonly]`.
 */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof Checkbox>> }[] = [
  { label: 'unchecked', props: {} },
  { label: 'checked', props: { isChecked: true } },
  { label: 'indeterminate', props: { isChecked: true, isIndeterminate: true } },
  { label: 'isInvalid', props: { isInvalid: true } },
  { label: 'isInvalid + checked', props: { isInvalid: true, isChecked: true } },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isDisabled + checked', props: { isDisabled: true, isChecked: true } },
  { label: 'isReadOnly', props: { isReadOnly: true, isChecked: true } },
  { label: 'isRequired', props: { isRequired: true } },
];

/**
 * Keeps the checkbox clickable while still honouring the `isChecked` control,
 * so the Controls panel and direct interaction both work.
 */
function CheckboxControl({
  isChecked,
  isIndeterminate,
  ...props
}: React.ComponentProps<typeof Checkbox>) {
  const [checked, setChecked] = React.useState(Boolean(isChecked));

  React.useEffect(() => {
    setChecked(Boolean(isChecked));
  }, [isChecked]);

  return (
    <Checkbox
      {...props}
      isChecked={checked}
      isIndeterminate={isIndeterminate}
      onChange={setChecked}
    >
      <CheckboxIndicator>
        <CheckboxIcon as={isIndeterminate ? RemoveIcon : CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
}

/**
 * NOTE: `CheckboxGroup` throws on web in gluestack-ui v5.0.15.
 *
 * `@gluestack-ui/core`'s CheckboxGroup publishes its context as
 * `{ state: { ...formControlContext, ...state } }` — a fresh object. On web,
 * `useCheckboxGroupItem` comes from `@react-aria/checkbox`, which looks its
 * group data up in a WeakMap keyed by the *identity* of the state object that
 * `useCheckboxGroup` registered. The spread copy is not that object, so the
 * lookup returns undefined and destructuring `name` off it throws
 * "Cannot destructure property 'name' of ... as it is undefined".
 *
 * Native is unaffected: aria/index.js exports gluestack's own
 * useCheckboxGroupItem, which never consults that WeakMap. Only
 * aria/index.web.js re-exports react-aria's.
 *
 * Not fixable from this repo — the defect is inside @gluestack-ui/core, not in
 * the copied component. So the group stories below reproduce the intended
 * layout and group-level states with plain Checkboxes and local state, and say
 * so on screen. Restore the real CheckboxGroup once upstream passes `state`
 * through by reference. See docs/ASSUMPTIONS.md.
 */
const CHECKBOX_GROUP_WEB_BUG = (
  <Note>
    `CheckboxGroup` currently throws on web in gluestack-ui v5.0.15, so these
    examples arrange plain `Checkbox`es instead. The cause is in
    `@gluestack-ui/core`: its group context hands `@react-aria/checkbox` a copy
    of the state object, breaking the WeakMap identity that
    `useCheckboxGroupItem` needs. Native is unaffected. Group behaviour —
    shared name, one `onChange` with an array of values — is otherwise as
    documented.
  </Note>
);

/** Stands in for CheckboxGroup: multi-select over OPTIONS held in local state. */
function CheckboxGroupExample() {
  const [values, setValues] = React.useState<string[]>(['Option A']);

  const toggle = (option: string) =>
    setValues((current) =>
      current.includes(option)
        ? current.filter((v) => v !== option)
        : [...current, option]
    );

  return (
    <VStack space="sm" className="items-start">
      {OPTIONS.map((option) => (
        <Checkbox
          key={option}
          value={option}
          isChecked={values.includes(option)}
          onChange={() => toggle(option)}
        >
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>{option}</CheckboxLabel>
        </Checkbox>
      ))}
    </VStack>
  );
}

/** Group-level state applied to every checkbox, as CheckboxGroup would. */
function CheckboxGroupStateExample({
  isDisabled,
  isInvalid,
  isReadOnly,
}: {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
}) {
  return (
    <VStack space="sm" className="items-start">
      {OPTIONS.map((option, i) => (
        <Checkbox
          key={option}
          value={option}
          isChecked={i === 0}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isReadOnly={isReadOnly}
        >
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>{option}</CheckboxLabel>
        </Checkbox>
      ))}
    </VStack>
  );
}

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: { control: 'boolean' },
    isIndeterminate: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
  },
  args: {
    value: 'option-a',
    isChecked: false,
    isIndeterminate: false,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => <CheckboxControl {...args} />,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <Showcase>
      <Note>
        The indeterminate look is composed, not styled: pass isIndeterminate
        alongside isChecked and swap the icon for RemoveIcon. CheckboxIcon only
        mounts while the box is checked.
      </Note>
      {STATES.map((state) => (
        <Labeled key={state.label} label={state.label}>
          <Checkbox value="option-a" {...state.props}>
            <CheckboxIndicator>
              <CheckboxIcon as={state.props.isIndeterminate ? RemoveIcon : CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Label</CheckboxLabel>
          </Checkbox>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Group: Story = {
  render: () => (
    <Showcase>
      {CHECKBOX_GROUP_WEB_BUG}
      <Labeled label="multi-select">
        <CheckboxGroupExample />
      </Labeled>
    </Showcase>
  ),
};

export const GroupStates: Story = {
  render: () => (
    <Showcase>
      {CHECKBOX_GROUP_WEB_BUG}
      <Note>
        A group passes its state down to every checkbox inside it, so the whole
        set can be disabled or flagged invalid at once.
      </Note>
      <Labeled label="isDisabled">
        <CheckboxGroupStateExample isDisabled />
      </Labeled>
      <Labeled label="isInvalid">
        <CheckboxGroupStateExample isInvalid />
      </Labeled>
      <Labeled label="isReadOnly">
        <CheckboxGroupStateExample isReadOnly />
      </Labeled>
    </Showcase>
  ),
};
