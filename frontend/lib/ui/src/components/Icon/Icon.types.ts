import type * as Icons from 'react-feather';

export type IconName = keyof typeof Icons;

export type IconProps = {
  name: IconName;
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  className?: string;
};
