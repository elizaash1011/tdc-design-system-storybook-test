import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Button, ButtonText } from '@/components/ui/button';
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from '@/components/ui/toast';
import { Labeled, Note, Section, Showcase } from '../helpers';

const ACTIONS = ['error', 'warning', 'success', 'info', 'muted'] as const;
const VARIANTS = ['solid', 'outline'] as const;
const PLACEMENTS = [
  'top',
  'top left',
  'top right',
  'bottom',
  'bottom left',
  'bottom right',
] as const;

type ToastAction = (typeof ACTIONS)[number];
type ToastVariant = (typeof VARIANTS)[number];
type ToastPlacement = (typeof PLACEMENTS)[number];

/**
 * Toasts are normally pushed through `useToast()`, which renders them in an
 * overlay one at a time. Rendering `Toast` inline instead is what makes the
 * whole variant matrix comparable against Figma.
 */
function StaticToast({
  action,
  variant,
}: {
  action: ToastAction;
  variant: ToastVariant;
}) {
  return (
    <Toast action={action} variant={variant} className="w-full max-w-sm">
      <ToastTitle>Title</ToastTitle>
      <ToastDescription>Supporting copy for this message.</ToastDescription>
    </Toast>
  );
}

/** Fires a real toast through the hook. Hooks must live in a component. */
function ToastTriggerExample({
  action = 'muted',
  variant = 'solid',
  placement = 'bottom',
  label,
}: {
  action?: ToastAction;
  variant?: ToastVariant;
  placement?: ToastPlacement;
  label: string;
}) {
  const toast = useToast();

  return (
    <Button
      variant="outline"
      onPress={() =>
        toast.show({
          placement,
          duration: 3000,
          render: ({ id }) => (
            <Toast nativeID={`toast-${id}`} action={action} variant={variant}>
              <ToastTitle>Title</ToastTitle>
              <ToastDescription>
                Supporting copy for this message.
              </ToastDescription>
            </Toast>
          ),
        })
      }
    >
      <ButtonText>{label}</ButtonText>
    </Button>
  );
}

/** Pushes one toast per action so several can be seen stacking. */
function ToastStackExample() {
  const toast = useToast();

  return (
    <Showcase>
      <Button
        onPress={() =>
          ACTIONS.forEach((action) =>
            toast.show({
              placement: 'top',
              duration: 5000,
              render: ({ id }) => (
                <Toast nativeID={`toast-${id}`} action={action} variant="solid">
                  <ToastTitle>Title</ToastTitle>
                  <ToastDescription>action={action}</ToastDescription>
                </Toast>
              ),
            })
          )
        }
      >
        <ButtonText>Show five toasts</ButtonText>
      </Button>
      <Button variant="outline" onPress={() => toast.closeAll()}>
        <ButtonText>Close all</ButtonText>
      </Button>
    </Showcase>
  );
}

const meta = {
  title: 'UI/Toast',
  component: Toast,
  render: () => <StaticToast action="muted" variant="solid" />,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Actions: Story = {
  render: () => (
    <>
      <Note>
        Rendered inline rather than through `useToast()` so every `action` value
        is visible at once.
      </Note>
      <Showcase>
        {ACTIONS.map((action) => (
          <Labeled key={action} label={action}>
            <StaticToast action={action} variant="solid" />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Section key={variant} title={variant}>
          <Showcase>
            {ACTIONS.map((action) => (
              <Labeled key={action} label={`${variant} / ${action}`}>
                <StaticToast action={action} variant={variant} />
              </Labeled>
            ))}
          </Showcase>
        </Section>
      ))}
    </Showcase>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Showcase>
      {VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant}>
          <Toast action="info" variant={variant} className="w-full max-w-sm">
            <ToastTitle>Title only, no description</ToastTitle>
          </Toast>
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Live: Story = {
  render: () => (
    <>
      <Note>
        These buttons push real toasts through `useToast().show()`. Each one
        auto-dismisses after 3 seconds.
      </Note>
      <Showcase>
        {ACTIONS.map((action) => (
          <Labeled key={action} label={action}>
            <ToastTriggerExample action={action} label={`Show ${action}`} />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Placements: Story = {
  render: () => (
    <>
      <Note>
        `placement` is passed to `toast.show()`, not to the `Toast` component.
        Each button pushes a toast to a different corner.
      </Note>
      <Showcase>
        {PLACEMENTS.map((placement) => (
          <Labeled key={placement} label={placement}>
            <ToastTriggerExample
              placement={placement}
              label={`Show ${placement}`}
            />
          </Labeled>
        ))}
      </Showcase>
    </>
  ),
};

export const Stacked: Story = {
  render: () => (
    <>
      <Note>
        Several toasts at the same placement stack in the order they were shown.
      </Note>
      <ToastStackExample />
    </>
  ),
};
