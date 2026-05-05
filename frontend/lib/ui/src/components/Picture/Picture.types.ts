export type PictureName =
  | '320_box'
  | '320_check'
  | '320_cloud'
  | '320_lock'
  | '320_sms'
  | '320_wifi';

export type PictureNameBySize<T extends number> = Extract<PictureName, `${T}_${string}`>;

export type PictureProps<T extends number> = {
  name: PictureNameBySize<T>;
  size: T;
  className?: string;
};
