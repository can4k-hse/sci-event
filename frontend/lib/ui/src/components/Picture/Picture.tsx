import cn from 'classnames';
import styles from './Picture.module.css';
import type { PictureProps } from './Picture.types';

const BASE_URL = 'https://storage.yandexcloud.net/sci-event-static/AppState';

export function Picture<T extends number>({ name, size, className }: PictureProps<T>) {
  const src = `${BASE_URL}/${name}.png`;

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={cn(styles.picture, className)}
    />
  );
}
