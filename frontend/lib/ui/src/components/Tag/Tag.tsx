import cn from 'classnames';
import styles from './Tag.module.css';
import type { TagProps } from './Tag.types';
import { colorToVar } from '../../tokens/ColorToken';

export function Tag({ variant = 'violet', color, className, style, children, ...props }: TagProps) {
  const colorStyle = color ? { color: colorToVar(color) } : undefined;
  const mergedStyle = colorStyle || style ? { ...colorStyle, ...style } : undefined;
  return (
    <span
      className={cn(styles.tag, styles[variant], className)}
      style={mergedStyle}
      {...props}
    >
      {children}
    </span>
  );
}
