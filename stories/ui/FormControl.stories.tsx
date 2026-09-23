import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { AlertCircleIcon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * `FormControl` has no size/variant axis — it is a context wrapper. Its state
 * props cascade to the field inside it: `isInvalid` also reveals
 * `FormControlError` (which renders nothing otherwise), and `isRequired` adds
 * the asterisk to the label automatically.
 */
const STATES: { label: string; props: Partial<React.ComponentProps<typeof FormControl>> }[] = [
  { label: 'default', props: {} },
  { label: 'isRequired', props: { isRequired: true } },
  { label: 'isInvalid', props: { isInvalid: true } },
  { label: 'isInvalid + isRequired', props: { isInvalid: true, isRequired: true } },
  { label: 'isDisabled', props: { isDisabled: true } },
  { label: 'isReadOnly', props: { isReadOnly: true } },
];

/** Label / field / helper / error, the full slot set. */
function FieldExample(props: React.ComponentProps<typeof FormControl>) {
  return (
    <FormControl {...props} className="w-full max-w-sm">
      <FormControlLabel>
        <FormControlLabelText>Label</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField placeholder="Placeholder" />
      </Input>
      <FormControlHelper>
        <FormControlHelperText>Helper text</FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>Error text</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}

const meta = {
  title: 'UI/FormControl',
  component: FormControl,
  argTypes: {
    isInvalid: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
  },
  args: {
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    isReadOnly: false,
  },
  render: (args) => <FieldExample {...args} />,
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const States: Story = {
  render: () => (
    <Showcase>
      <Note>
        FormControlError only mounts while the control is invalid, so the error
        row is what changes the field's height between these states.
      </Note>
      {STATES.map((state) => (
        <Labeled key={state.label} label={state.label} className="w-full max-w-sm">
          <FieldExample {...state.props} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Slots: Story = {
  render: () => (
    <Showcase>
      <Labeled label="label only" className="w-full max-w-sm">
        <FormControl className="w-full max-w-sm">
          <FormControlLabel>
            <FormControlLabelText>Label</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Placeholder" />
          </Input>
        </FormControl>
      </Labeled>
      <Labeled label="label + helper" className="w-full max-w-sm">
        <FormControl className="w-full max-w-sm">
          <FormControlLabel>
            <FormControlLabelText>Label</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Placeholder" />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>Helper text</FormControlHelperText>
          </FormControlHelper>
        </FormControl>
      </Labeled>
      <Labeled label="label + error" className="w-full max-w-sm">
        <FormControl isInvalid className="w-full max-w-sm">
          <FormControlLabel>
            <FormControlLabelText>Label</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField placeholder="Placeholder" />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>Error text</FormControlErrorText>
          </FormControlError>
        </FormControl>
      </Labeled>
    </Showcase>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <Showcase>
      <Note>
        The state props cascade to any gluestack field inside the control, not
        just Input — here the same wrapper drives a Textarea.
      </Note>
      <Labeled label="isRequired" className="w-full max-w-sm">
        <FormControl isRequired className="w-full max-w-sm">
          <FormControlLabel>
            <FormControlLabelText>Label</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText>Helper text</FormControlHelperText>
          </FormControlHelper>
        </FormControl>
      </Labeled>
      <Labeled label="isInvalid" className="w-full max-w-sm">
        <FormControl isInvalid className="w-full max-w-sm">
          <FormControlLabel>
            <FormControlLabelText>Label</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>Error text</FormControlErrorText>
          </FormControlError>
        </FormControl>
      </Labeled>
    </Showcase>
  ),
};
