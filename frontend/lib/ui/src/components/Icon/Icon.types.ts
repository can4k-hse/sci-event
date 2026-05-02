import type * as Icons from 'react-feather';
import type { ColorToken } from '../../tokens/ColorToken';

export type IconName = keyof typeof Icons;

export type IconProps = {
  name: IconName;
  size?: number | string;
  strokeWidth?: number | string;
  color?: ColorToken | 'currentColor';
  className?: string;
};
