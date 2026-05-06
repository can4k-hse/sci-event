import type { ButtonHTMLAttributes } from "react";
import type { IconName } from "../Icon/Icon.types";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "bare";
export type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

type IconOnlyButtonProps = BaseButtonProps & {
  iconOnly: true;
  iconName: IconName;
};

type DefaultButtonProps = BaseButtonProps & {
  iconOnly?: false;
  iconName?: never;
};

export type ButtonProps = IconOnlyButtonProps | DefaultButtonProps;
