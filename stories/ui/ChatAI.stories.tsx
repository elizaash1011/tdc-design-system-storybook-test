import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import type { UIMessage } from 'ai';
import React from 'react';

import { Box } from '@/components/ui/box';
import {
  Attachment,
  AttachmentEmpty,
  AttachmentPreview,
  Attachments,
  Conversation,
  ConversationContent,
  ConversationDownload,
  ConversationEmptyState,
  ConversationScrollButton,
  FileTree,
  FileTreeFile,
  FileTreeFolder,
  Message,
  MessageAction,
  MessageContent,
  MessageResponse,
  MessageToolbar,
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorName,
  ModelSelectorSeparator,
  ModelSelectorTrigger,
  PromptInput,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputProvider,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from '@/components/ui/chat-ai';
import type { AttachmentData, AttachmentVariant } from '@/components/ui/chat-ai';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Labeled, Note, Showcase } from '../helpers';

/**
 * `chat-ai` is an alpha, composite surface — roughly fifty exports spread
 * across `message`, `conversation`, `prompt-input`, `model-selector`,
 * `file-tree` and `attatchments`. It is not one component with variants; it is
 * a kit you assemble.
 *
 * These stories exercise the PRESENTATIONAL SHELL ONLY. No AI SDK call, no
 * network request, no streaming: every message below is a hand-built object.
 * Anything that depends on a live model, a document/image picker or the device
 * keyboard is documented rather than demonstrated.
 *
 * Deliberately not covered (and why):
 *
 * - `MessageBranch*` — `MessageBranchContent` reads an undeclared `branches`
 *   binding in the source and throws a ReferenceError as written.
 * - `PromptInputActionMenu{Content}` — opens `expo-image-picker` /
 *   `expo-document-picker` from a gluestack `Menu`; needs a real picker.
 * - `AttachmentHoverCard*` — tooltip-only, nothing to show statically.
 * - `FileTreeActions` — exported but not wired into the folder or file rows, so
 *   there is no slot to place it in.
 */

/** Hand-built `UIMessage`s — no SDK, no streaming. */
const text = (id: string, role: UIMessage['role'], value: string) =>
  ({ id, role, parts: [{ type: 'text', text: value }] }) as UIMessage;

const MESSAGES: UIMessage[] = [
  text('m1', 'user', 'First question from the user.'),
  text(
    'm2',
    'assistant',
    'A reply with some **bold text**, some *italics*, and a list:\n\n1. First point\n2. Second point\n3. Third point'
  ),
  text('m3', 'user', 'A shorter follow-up.'),
  text(
    'm4',
    'assistant',
    'A second reply. Long enough to wrap onto more than one line so the bubble width and the assistant alignment are both visible.'
  ),
];

/** Phone-sized frame; `Conversation` is `flex-1` and needs a bounded parent. */
function Stage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Box
      className={`w-full max-w-md overflow-hidden rounded-lg border border-border bg-background ${className ?? 'h-96'}`}
    >
      {children}
    </Box>
  );
}

function ConversationExample() {
  return (
    <Stage>
      <Conversation>
        <ConversationContent messages={MESSAGES} />
        <ConversationDownload messages={MESSAGES} />
        <ConversationScrollButton />
      </Conversation>
    </Stage>
  );
}

function EmptyStateExample() {
  return (
    <Stage>
      <Conversation>
        <ConversationEmptyState />
      </Conversation>
    </Stage>
  );
}

/**
 * `Message` reads the shared-value context that `Conversation` installs
 * (`BlankProvider`), so it cannot be rendered on its own — and `BlankProvider`
 * is not re-exported from the barrel. Wrapping in `Conversation` is the
 * supported way to mount a bare message.
 *
 * Indices start at 1 on purpose: index 0 triggers the first-user-message
 * entrance animation, which is not what this story is about.
 */
function MessageShellExample() {
  return (
    <Stage className="h-72">
      <Conversation>
        <Box className="flex-1 p-4">
          <Message role="user" index={1} message={MESSAGES[0]}>
            <MessageContent>
              <MessageResponse message={MESSAGES[0]} />
            </MessageContent>
          </Message>

          <Message role="assistant" index={2} message={MESSAGES[1]}>
            <MessageContent>
              <MessageResponse message={MESSAGES[1]} />
            </MessageContent>
            <MessageToolbar message={MESSAGES[1]}>
              <MessageAction>
                <Text size="sm" className="text-muted-foreground">
                  Copy
                </Text>
              </MessageAction>
              <MessageAction>
                <Text size="sm" className="text-muted-foreground">
                  Retry
                </Text>
              </MessageAction>
            </MessageToolbar>
          </Message>
        </Box>
      </Conversation>
    </Stage>
  );
}

/** `PromptInput` is absolutely positioned, so it needs a relative frame. */
function PromptInputExample() {
  return (
    <PromptInputProvider>
      <Stage className="relative h-60">
        <PromptInput onSubmit={() => {}}>
          <PromptInputBody>
            <PromptInputTextarea />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputButton>Tool</PromptInputButton>
            </PromptInputTools>
            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </Stage>
    </PromptInputProvider>
  );
}

const MODELS = [
  { group: 'Group A', provider: 'Provider A', name: 'Model 1' },
  { group: 'Group A', provider: 'Provider A', name: 'Model 2' },
  { group: 'Group B', provider: 'Provider B', name: 'Model 3' },
];

function ModelSelectorExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <VStack space="md" className="items-start">
      <ModelSelector open={open} onOpenChange={setOpen}>
        <ModelSelectorTrigger className="items-center justify-center rounded-md">
          <Text className="text-primary-foreground">Select model</Text>
        </ModelSelectorTrigger>

        <ModelSelectorContent title="Model Selector">
          <ModelSelectorInput />
          <ModelSelectorList>
            {['Group A', 'Group B'].map((group, groupIndex) => (
              <React.Fragment key={group}>
                {groupIndex > 0 && <ModelSelectorSeparator />}
                <ModelSelectorGroup heading={group}>
                  {MODELS.filter((m) => m.group === group).map((model) => (
                    <Box
                      key={model.name}
                      className="flex-row items-center gap-2 px-4 py-3"
                    >
                      <ModelSelectorLogo provider={model.provider} />
                      <ModelSelectorName>{model.name}</ModelSelectorName>
                    </Box>
                  ))}
                </ModelSelectorGroup>
              </React.Fragment>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>

      <Text size="sm" className="text-muted-foreground">
        open: {String(open)}
      </Text>
    </VStack>
  );
}

function ModelSelectorEmptyExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <ModelSelector open={open} onOpenChange={setOpen}>
      <ModelSelectorTrigger className="items-center justify-center rounded-md">
        <Text className="text-primary-foreground">No results</Text>
      </ModelSelectorTrigger>
      <ModelSelectorContent title="Model Selector">
        <ModelSelectorInput />
        <ModelSelectorList>
          <ModelSelectorEmpty />
        </ModelSelectorList>
      </ModelSelectorContent>
    </ModelSelector>
  );
}

function FileTreeExample() {
  const [selectedPath, setSelectedPath] = React.useState('/folder-a/item-1');

  return (
    <Box className="w-full max-w-sm">
      <FileTree
        defaultExpanded={new Set(['/folder-a'])}
        selectedPath={selectedPath}
        onSelect={setSelectedPath}
      >
        <FileTreeFolder path="/folder-a" name="Folder A">
          <FileTreeFile path="/folder-a/item-1" name="Item 1" />
          <FileTreeFile path="/folder-a/item-2" name="Item 2" />
          <FileTreeFolder path="/folder-a/folder-c" name="Folder C">
            <FileTreeFile path="/folder-a/folder-c/item-3" name="Item 3" />
          </FileTreeFolder>
        </FileTreeFolder>
        <FileTreeFolder path="/folder-b" name="Folder B">
          <FileTreeFile path="/folder-b/item-4" name="Item 4" />
        </FileTreeFolder>
        <FileTreeFile path="/item-5" name="Item 5" />
      </FileTree>
      <Text size="sm" className="mt-2 text-muted-foreground">
        selectedPath: {selectedPath}
      </Text>
    </Box>
  );
}

/**
 * Non-image media types on purpose: `AttachmentPreview` falls back to a lucide
 * icon, so no story here needs a remote image or a `blob:` URL.
 */
const ATTACHMENTS: AttachmentData[] = [
  {
    id: 'a1',
    type: 'file',
    filename: 'Item 1.pdf',
    mediaType: 'application/pdf',
    url: '',
  },
  {
    id: 'a2',
    type: 'file',
    filename: 'Item 2.txt',
    mediaType: 'text/plain',
    url: '',
  },
  {
    id: 'a3',
    type: 'file',
    filename: 'Item 3.mp4',
    mediaType: 'video/mp4',
    url: '',
  },
  {
    id: 'a4',
    type: 'file',
    filename: 'Item 4.mp3',
    mediaType: 'audio/mpeg',
    url: '',
  },
];

const ATTACHMENT_VARIANTS: AttachmentVariant[] = ['grid', 'inline', 'list'];

function AttachmentsExample({ variant }: { variant: AttachmentVariant }) {
  const [files, setFiles] = React.useState(ATTACHMENTS);

  const remove = (id: string) =>
    setFiles((prev) => prev.filter((file) => file.id !== id));

  return (
    <Box className="w-full max-w-md overflow-hidden rounded-lg border border-border">
      {files.length === 0 ? (
        <AttachmentEmpty className="p-6" />
      ) : (
        <Attachments variant={variant}>
          {files.map((file) => (
            <Attachment
              key={file.id}
              data={file}
              onRemove={() => remove(file.id)}
              className="mr-2"
            >
              <AttachmentPreview />
              {variant !== 'grid' && (
                <Text size="sm" className="text-foreground">
                  {file.filename}
                </Text>
              )}
            </Attachment>
          ))}
        </Attachments>
      )}
    </Box>
  );
}

const ALPHA_NOTE = (
  <Note>
    Alpha component. `chat-ai` is a large composite surface (~50 exports across
    six files) and is still moving. These stories cover the presentational
    shell only — no AI SDK call, no network request, no streaming. Every message
    is a hand-built object, so nothing here validates real model behaviour.
  </Note>
);

const meta = {
  title: 'UI/ChatAI',
  component: Conversation,
  render: () => <ConversationExample />,
} satisfies Meta<typeof Conversation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      {ALPHA_NOTE}
      <Note>
        `Conversation` installs the shared-value provider and a `flex-1`
        background; `ConversationContent` renders the list. Everything else here
        (`ConversationDownload` top-right, `ConversationScrollButton` bottom
        centre) is absolutely positioned inside it. The scroll button is
        presentational in the source — its `onPress` is empty.
      </Note>
      <ConversationExample />
    </VStack>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `ConversationEmptyState` takes `title`, `description` and `icon`, and
        ships defaults for all three. Shown here with the defaults.
      </Note>
      <EmptyStateExample />
    </VStack>
  ),
};

export const MessageShell: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `Message` provides the role context that `MessageContent` and
        `MessageToolbar` read. User messages align right on `bg-muted`;
        assistant messages align left with no bubble. `MessageToolbar` renders
        nothing for user messages, and nothing at all until the message has a
        non-empty text part — that is by design in the source.
      </Note>
      <Note>
        `Message` cannot be mounted outside `Conversation`: it reads the
        `BlankProvider` context, and `BlankProvider` is not re-exported from the
        barrel. This story wraps it in `Conversation` for that reason.
      </Note>
      <MessageShellExample />
    </VStack>
  ),
};

export const PromptInputComposition: Story = {
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `PromptInput` requires a `PromptInputProvider` ancestor — it throws
        without one — and positions itself absolutely, so it needs a
        height-bounded relative frame like the one here.
      </Note>
      <Note>
        The submit button stays disabled until there is text or an attachment.
        Its keyboard tracking comes from `react-native-keyboard-controller`,
        which is inert in the browser, so the composer never lifts on web.
        `PromptInputActionMenu` is omitted: its content opens
        `expo-image-picker` / `expo-document-picker`.
      </Note>
      <PromptInputExample />
    </VStack>
  ),
};

export const ModelSelectorStory: Story = {
  name: 'Model Selector',
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `ModelSelector` is a controlled gluestack `Modal` underneath — it takes
        `open` / `onOpenChange` and a `size`, and pulls
        `ModelSelectorContent` out of its children to render inside the modal.
        Press the trigger to open it.
      </Note>
      <Note>
        `ModelSelectorItem` is not used here: its base style in the source is
        `h-4 w-4`, which collapses the row and clips its contents. The rows
        below are plain views holding `ModelSelectorLogo` and
        `ModelSelectorName` so the intended layout is reviewable.
      </Note>
      <ModelSelectorExample />
      <Labeled label="empty result set">
        <ModelSelectorEmptyExample />
      </Labeled>
    </VStack>
  ),
};

export const FileTreeStory: Story = {
  name: 'File Tree',
  render: () => (
    <VStack space="md" className="w-full items-start">
      <Note>
        `FileTree` is the most self-contained piece of the kit — no AI
        dependency at all. Expansion is uncontrolled here via
        `defaultExpanded`; selection is controlled via `selectedPath` /
        `onSelect`. The chevron toggles expansion, the row selects.
      </Note>
      <FileTreeExample />
    </VStack>
  ),
};

export const AttachmentsStory: Story = {
  name: 'Attachments',
  render: () => (
    <Showcase className="w-full">
      <Note>
        Three `variant`s — this is the only genuine variant axis in `chat-ai`.
        Remove buttons are wired up, so the list empties as you click and falls
        back to `AttachmentEmpty`. On web the remove button only appears on
        hover (`opacity-0 group-hover:opacity-100` in the source).
      </Note>
      <Note>
        Non-image media types are used deliberately, so `AttachmentPreview`
        renders its icon fallback and no story needs a remote image.
      </Note>
      {ATTACHMENT_VARIANTS.map((variant) => (
        <Labeled key={variant} label={variant} className="w-full">
          <AttachmentsExample variant={variant} />
        </Labeled>
      ))}
    </Showcase>
  ),
};

export const Notes: Story = {
  render: () => (
    <Showcase>
      {ALPHA_NOTE}
      <Note>
        Provider requirements, all of which these stories satisfy:
        `Conversation` for anything in `message`, `PromptInputProvider` for
        anything in `prompt-input`, `ModelSelector` for its sub-components, and
        the `OverlayProvider` that `GluestackUIProvider` already installs for
        the modal.
      </Note>
      <Note>
        Web vs native: `conversation.web.tsx` shadows `conversation.tsx`, so on
        web the list is a react-native `FlatList` while native uses
        `AnimatedLegendList` from `@legendapp/list` plus a gesture detector.
        These stories therefore exercise the web list, not the native one.
      </Note>
      <Note>
        Keyboard behaviour throughout the kit comes from
        `react-native-keyboard-controller`, which has no-op web bindings and no
        `KeyboardProvider` in this preview. Every keyboard-driven offset
        resolves to zero here.
      </Note>
      <Note>
        Theme gaps in the current source: `MessageResponse` hardcodes
        `bg-slate-900` / `bg-slate-800` / `text-white` for code blocks and
        inline code, and `AttachmentRemove` passes a literal white to its icon.
        Those will not follow light/dark mode — worth fixing before the kit
        leaves alpha.
      </Note>
      <Note>
        Not covered here, as noted at the top of the file:
        `MessageBranch*` (throws a ReferenceError as written),
        {'`PromptInputActionMenuContent` (needs a real picker), '}
        `AttachmentHoverCard*` (hover-only) and `FileTreeActions` (no slot to
        render it in).
      </Note>
    </Showcase>
  ),
};
