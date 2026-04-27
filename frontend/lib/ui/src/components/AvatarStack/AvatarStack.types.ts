import type { AvatarSize } from '../Avatar/Avatar.types';

type AvatarItem = {
  speaker_id: number;
  name: string;
  surname: string;
  src?: string;
};

type AvatarStackProps = {
  items: AvatarItem[];
  max?: number;
  size?: AvatarSize;
  className?: string;
};

export type { AvatarItem, AvatarStackProps };
