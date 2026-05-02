export type PictureName =
  | 'g320_box'
  | 'g320_check'
  | 'g320_cloud'
  | 'g320_lock'
  | 'g320_sms'
  | 'g320_wifi';

export type PictureNameBySize<T extends number> = Extract<PictureName, `g${T}_${string}`>;

export type PictureProps<T extends number> = {
  name: PictureNameBySize<T>;
  size: T;
  className?: string;
};
