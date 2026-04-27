import cn from 'classnames';
import { Avatar } from '../Avatar';
import styles from './AvatarStack.module.css';
import type { AvatarStackProps } from './AvatarStack.types';

const overflowSizeClass = {
  sm: styles.overflowSm,
  md: styles.overflowMd,
  lg: styles.overflowLg,
};

const AvatarStack = ({ items, max = 3, size = 'md', className }: AvatarStackProps) => {
  const visible = items.slice(0, max);
  const extra = items.length - visible.length;

  return (
    <div className={cn(styles.stack, className)}>
      {visible.map((item) => (
        <div key={item.speaker_id} className={styles.item}>
          <Avatar
            src={item.src}
            name={`${item.name} ${item.surname}`}
            size={size}
          />
        </div>
      ))}
      {extra > 0 && (
        <div className={cn(styles.overflow, overflowSizeClass[size])}>
          +{extra}
        </div>
      )}
    </div>
  );
};

export { AvatarStack };
