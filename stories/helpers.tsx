import React from 'react';

import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

/**
 * Layout helpers shared by every story file.
 *
 * Stories exist to be compared against the Figma kit, so each variant needs a
 * visible name next to it. These wrappers keep that labelling identical
 * everywhere instead of each story inventing its own.
 */

/** A single labelled example. */
export function Labeled({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <VStack space="xs" className={className}>
      <Text size="xs" className="uppercase tracking-wide text-muted-foreground">
        {label}
      </Text>
      {children}
    </VStack>
  );
}

/** A vertical list of labelled examples — the default shape for variant matrices. */
export function Showcase({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <VStack space="lg" className={`items-start ${className ?? ''}`}>
      {children}
    </VStack>
  );
}

/**
 * A section heading inside a story, for grouping (e.g. "Sizes" then "States")
 * when one story shows more than one axis.
 */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <VStack space="sm" className="items-start">
      <Text className="font-semibold text-foreground">{title}</Text>
      {children}
    </VStack>
  );
}

/**
 * Explanatory note rendered above a story. Used where a component cannot be
 * shown statically (overlays need a trigger) or where web behaviour differs
 * from native.
 */
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <VStack className="mb-4 rounded-md border border-border bg-muted p-3">
      <Text size="sm" className="text-muted-foreground">
        {children}
      </Text>
    </VStack>
  );
}
