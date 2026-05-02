import cn from 'classnames';
import styles from './Picture.module.css';
import type { PictureProps } from './Picture.types';

const BASE_URL = 'https://storage.yandexcloud.net/sci-event-static/AppState';

export function Picture({ name, size, className }: PictureProps) {
  const filename = name.split('_').slice(1).join('_');
  const src = `${BASE_URL}/${filename}.png`;

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
