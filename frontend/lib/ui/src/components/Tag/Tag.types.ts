import type { HTMLAttributes } from 'react';
import type { ColorToken } from '../../tokens/ColorToken';

export type TagVariant = 'violet' | 'neutral' | 'success' | 'warning' | 'error';

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
  color?: ColorToken;
};
