import cn from 'classnames';
import styles from './Tag.module.css';
import type { TagProps } from './Tag.types';

export function Tag({ variant = 'violet', children, onClick, ...props }: TagProps) {
  return (
    <span className={cn(styles.tag, styles[variant], { [styles.clickable]: !!onClick })} onClick={onClick} {...props}>
      {children}
    </span>
  );
}
