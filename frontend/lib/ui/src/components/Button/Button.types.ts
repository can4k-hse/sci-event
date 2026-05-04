import type { ButtonHTMLAttributes } from "react";
import type { IconName } from "../Icon/Icon.types";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
