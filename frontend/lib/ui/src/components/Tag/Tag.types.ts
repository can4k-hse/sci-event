import type { HTMLAttributes } from 'react';

export type TagVariant = 'violet' | 'neutral' | 'success' | 'warning' | 'error';

export type TagProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'style' | 'color'> & {
  variant?: TagVariant;
};
