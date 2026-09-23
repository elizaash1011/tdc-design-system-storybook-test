import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { COLOR_TOKENS } from './tokens';

/**
 * Reads the *resolved* value of each theme variable straight out of the
 * document, rather than restating the numbers from global.css.
 *
 * Restating them would mean this gallery could drift from the real theme and
 * still look correct — the one failure mode that matters here, because this is
 * the page used to mirror tokens into the Figma kit. Reading the computed value
 * also means light and dark each report their own value with no extra bookkeeping.
 */
function useResolvedTokens(cssVars: string[]) {
  const [values, setValues] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    const read = () => {
      const styles = getComputedStyle(document.documentElement);
      const next: Record<string, string> = {};
      for (const cssVar of cssVars) {
        next[cssVar] = styles.getPropertyValue(cssVar).trim();
      }
      setValues(next);
    };

    read();

    // The light/dark toolbar toggles a class on <html>; re-read when it changes
    // so the hex column matches what is on screen.
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cssVars.join(',')]);

  return values;
}

/** "23 23 23" -> "#171717". Returns null for anything unparseable. */
function channelsToHex(raw: string): string | null {
  const parts = raw.split(/[\s,]+/).filter(Boolean).map(Number);
  if (parts.length < 3 || parts.some((n) => !Number.isFinite(n))) return null;
  return (
    '#' +
    parts
      .slice(0, 3)
      .map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0'))
      .join('')
  );
}

function Swatch({ cssVar, utility, purpose, raw }: {
  cssVar: string;
  utility: string;
  purpose: string;
  raw: string | undefined;
}) {
  const hex = raw ? channelsToHex(raw) : null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '64px minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1.6fr)',
        gap: 16,
        alignItems: 'center',
        padding: '8px 0',
      }}
    >
      <div
        className="border border-border"
        style={{
          width: 64,
          height: 44,
          borderRadius: 8,
          // Uses the variable directly so the swatch cannot disagree with the
          // value printed beside it.
          backgroundColor: `rgb(var(${cssVar}))`,
        }}
      />
      <VStack>
        <Text className="font-mono text-foreground" size="sm">
          {cssVar}
        </Text>
        <Text className="text-muted-foreground" size="xs">
          bg-{utility}
        </Text>
      </VStack>
      <VStack>
        <Text className="font-mono text-foreground" size="sm">
          {hex ?? '—'}
        </Text>
        <Text className="font-mono text-muted-foreground" size="xs">
          {raw || '—'}
        </Text>
      </VStack>
      <Text className="text-muted-foreground" size="xs">
        {purpose}
      </Text>
    </div>
  );
}

function ColorTokenTable() {
  const allVars = React.useMemo(
    () => COLOR_TOKENS.flatMap((g) => g.tokens.map((t) => t.cssVar)),
    []
  );
  const values = useResolvedTokens(allVars);

  return (
    <VStack space="2xl" className="w-full">
      <VStack space="xs">
        <Heading size="xl">Color tokens</Heading>
        <Text className="text-muted-foreground" size="sm">
          Values are read live from the running theme, so the hex column always
          reflects what is actually rendering. Switch the Theme control in the
          toolbar to read the dark values. The Figma variable name is the CSS
          variable without the leading dashes (e.g. `--primary` is `primary`).
        </Text>
        <Text className="text-muted-foreground" size="xs">
          All values are currently gluestack placeholders.
        </Text>
      </VStack>

      {COLOR_TOKENS.map((group) => (
        <VStack key={group.group} space="sm" className="w-full">
          <VStack space="xs">
            <Heading size="md">{group.group}</Heading>
            <Text className="text-muted-foreground" size="xs">
              {group.description}
            </Text>
          </VStack>
          <div
            className="border-border"
            style={{ borderTopWidth: 1, borderTopStyle: 'solid' }}
          >
            {group.tokens.map((token) => (
              <Swatch
                key={token.cssVar}
                cssVar={token.cssVar}
                utility={token.utility}
                purpose={token.purpose}
                raw={values[token.cssVar]}
              />
            ))}
          </div>
        </VStack>
      ))}
    </VStack>
  );
}

/** The five status tokens shown as the pills they will actually be used as. */
function StatusPills() {
  const statuses = [
    { utility: 'status-needs-action', label: 'Needs action' },
    { utility: 'status-in-review', label: 'In review' },
    { utility: 'status-paid', label: 'Paid' },
    { utility: 'status-resolved', label: 'Resolved' },
    { utility: 'status-denied', label: 'Denied' },
  ];

  return (
    <VStack space="lg" className="items-start">
      <VStack space="xs">
        <Heading size="xl">Status tokens in context</Heading>
        <Text className="text-muted-foreground" size="sm">
          The same five tokens rendered as solid and subtle pills — the two
          treatments the claim and transaction surfaces are expected to need.
        </Text>
      </VStack>

      <VStack space="sm" className="items-start">
        <Text className="font-semibold text-foreground">Solid</Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {statuses.map((s) => (
            <div
              key={s.utility}
              style={{
                borderRadius: 999,
                padding: '4px 12px',
                backgroundColor: `rgb(var(--${s.utility}))`,
              }}
            >
              <Text
                size="xs"
                style={{ color: `rgb(var(--${s.utility}-foreground))` }}
                className="font-medium uppercase"
              >
                {s.label}
              </Text>
            </div>
          ))}
        </div>
      </VStack>

      <VStack space="sm" className="items-start">
        <Text className="font-semibold text-foreground">Subtle (12% tint + solid text)</Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {statuses.map((s) => (
            <div
              key={s.utility}
              style={{
                borderRadius: 999,
                padding: '4px 12px',
                backgroundColor: `color-mix(in oklab, rgb(var(--${s.utility})) 12%, transparent)`,
              }}
            >
              <Text
                size="xs"
                style={{ color: `rgb(var(--${s.utility}))` }}
                className="font-medium uppercase"
              >
                {s.label}
              </Text>
            </div>
          ))}
        </div>
      </VStack>
    </VStack>
  );
}

const meta = {
  title: 'Tokens/Colors',
  // The table is wide; the mobile default would force horizontal scrolling.
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColorTokens: Story = {
  name: 'All color tokens',
  render: () => <ColorTokenTable />,
};

export const StatusTokens: Story = {
  name: 'Status tokens in context',
  render: () => <StatusPills />,
};
