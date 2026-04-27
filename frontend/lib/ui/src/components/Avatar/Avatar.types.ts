type AvatarSize = 'sm' | 'md' | 'lg';

type AvatarProps = {
  src?: string;
  name: string;
  size?: AvatarSize;
  className?: string;
};

export type { AvatarSize, AvatarProps };
