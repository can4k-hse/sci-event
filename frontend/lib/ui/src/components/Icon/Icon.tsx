import * as Icons from 'react-feather';
import type { IconProps } from './Icon.types';

export type { IconProps, IconName } from './Icon.types';

export function Icon({ name, size = 24, strokeWidth = 2, color = 'currentColor', className }: IconProps) {
  const FeatherIcon = Icons[name] as React.ComponentType<{
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
    className?: string;
  }>;
  return <FeatherIcon size={size} strokeWidth={strokeWidth} color={color} className={className} />;
}
