import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import React from 'react';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HEADING_SIZES, TEXT_SIZES } from './tokens';

/**
 * Measures each rendered sample rather than restating the scale from the
 * Tailwind config, for the same reason the color story reads computed values:
 * this is the page used to mirror the scale into Figma, so a number that can
 * drift from what renders is worse than no number.
 */
function useMeasuredFont(ref: React.RefObject<HTMLDivElement | null>) {
  const [metrics, setMetrics] = React.useState<{
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  } | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const read = () => {
      // The Text component renders a child element; measure that, since the
      // wrapper div has no type styling of its own.
      const target = (node.querySelector('[data-measure-target]') ??
        node.firstElementChild ??
        node) as HTMLElement;
      const style = getComputedStyle(target);
      setMetrics({
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
        fontWeight: style.fontWeight,
      });
    };

    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
    return () => observer.disconnect();
  }, [ref]);

  return metrics;
}

function ScaleRow({ label, children }: { label: string; children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const metrics = useMeasuredFont(ref);

  return (
    <div
      className="border-border"
      style={{
        display: 'grid',
        gridTemplateColumns: '72px minmax(0, 1fr) 200px',
        gap: 16,
        alignItems: 'baseline',
        padding: '12px 0',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
      }}
    >
      <Text className="font-mono text-muted-foreground" size="xs">
        {label}
      </Text>
      <div ref={ref} style={{ minWidth: 0 }}>
        {children}
      </div>
      <Text className="font-mono text-muted-foreground" size="xs">
        {metrics
          ? `${metrics.fontSize} / ${metrics.lineHeight} · ${metrics.fontWeight}`
          : '—'}
      </Text>
    </div>
  );
}

function TypeScale() {
  return (
    <VStack space="2xl" className="w-full">
      <VStack space="xs">
        <Heading size="xl">Type scale</Heading>
        <Text className="text-muted-foreground" size="sm">
          Every `size` value exposed by the Text and Heading components. The
          right-hand column is measured from the rendered element — font size /
          line height / weight, in CSS pixels.
        </Text>
        <Text className="text-muted-foreground" size="xs">
          The font family is the gluestack placeholder (system sans). Replace it
          when the TDC typeface is chosen.
        </Text>
      </VStack>

      <VStack space="sm" className="w-full">
        <Heading size="md">Text</Heading>
        <div className="w-full">
          {TEXT_SIZES.map((size) => (
            <ScaleRow key={size} label={size}>
              <Text size={size} data-measure-target className="text-foreground">
                The quick brown fox
              </Text>
            </ScaleRow>
          ))}
        </div>
      </VStack>

      <VStack space="sm" className="w-full">
        <Heading size="md">Heading</Heading>
        <div className="w-full">
          {HEADING_SIZES.map((size) => (
            <ScaleRow key={size} label={size}>
              <Heading size={size} data-measure-target className="text-foreground">
                The quick brown fox
              </Heading>
            </ScaleRow>
          ))}
        </div>
      </VStack>
    </VStack>
  );
}

function TextTreatments() {
  return (
    <VStack space="lg" className="items-start">
      <VStack space="xs">
        <Heading size="xl">Text treatments</Heading>
        <Text className="text-muted-foreground" size="sm">
          The boolean modifiers the Text component exposes, each applied to the
          same string at the default size.
        </Text>
      </VStack>

      <VStack space="sm" className="items-start">
        <Text className="text-foreground">default</Text>
        <Text bold className="text-foreground">
          bold
        </Text>
        <Text italic className="text-foreground">
          italic
        </Text>
        <Text underline className="text-foreground">
          underline
        </Text>
        <Text strikeThrough className="text-foreground">
          strikeThrough
        </Text>
        <Text highlight className="text-foreground">
          highlight
        </Text>
        <Text sub className="text-foreground">
          sub
        </Text>
        <div style={{ width: 180 }}>
          <Text isTruncated className="text-foreground">
            isTruncated — this string is long enough to be clipped
          </Text>
        </div>
      </VStack>

      <VStack space="sm" className="items-start">
        <Heading size="md">Semantic text colors</Heading>
        <Text className="text-foreground">text-foreground — body copy</Text>
        <Text className="text-muted-foreground">text-muted-foreground — helper text</Text>
        <Text className="text-destructive">text-destructive — error text</Text>
      </VStack>
    </VStack>
  );
}

const meta = {
  title: 'Tokens/Typography',
  // The measurement column needs the width; the mobile default would wrap it.
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  name: 'Type scale',
  render: () => <TypeScale />,
};

export const Treatments: Story = {
  name: 'Text treatments',
  render: () => <TextTreatments />,
};
