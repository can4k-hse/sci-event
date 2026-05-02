export type PictureName =
  | 'g320_box'
  | 'g320_check'
  | 'g320_cloud'
  | 'g320_lock'
  | 'g320_sms'
  | 'g320_wifi';

export type PictureProps = {
  name: PictureName;
  size?: number | string;
  className?: string;
};
