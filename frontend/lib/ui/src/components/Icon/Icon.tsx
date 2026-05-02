import * as Icons from 'react-feather';
import type { IconProps } from './Icon.types';
import { colorToVar } from '../../tokens/ColorToken';
import type { ColorToken } from '../../tokens/ColorToken';

export type { IconProps, IconName } from './Icon.types';

export function Icon({ name, size = 24, strokeWidth = 2, color = 'currentColor', className }: IconProps) {
  const FeatherIcon = Icons[name] as React.ComponentType<{
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
    className?: string;
  }>;
  const resolvedColor = color === 'currentColor' ? 'currentColor' : colorToVar(color as ColorToken);
  return <FeatherIcon size={size} strokeWidth={strokeWidth} color={resolvedColor} className={className} />;
}
