import cn from 'classnames';
import { Icon } from '../Icon';
import styles from './Avatar.module.css';
import type { AvatarProps } from './Avatar.types';

const Avatar = ({ src, name, size = 'md', className }: AvatarProps) => {
  const containerCls = cn(styles.avatar, styles[size], className);

  if (src) {
    return (
      <div className={containerCls}>
        <img src={src} alt={name} className={styles.img} />
      </div>
    );
  }

  return (
    <div className={containerCls}>
      <span className={styles.fallback} aria-label={name}>
        <Icon name="User" size={size === 'sm' ? 14 : size === 'lg' ? 28 : 20} />
      </span>
    </div>
  );
};

export { Avatar };
