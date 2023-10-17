import React from "react";

interface primaryButtonType {
  text?: string;
  subtle?: boolean;
  size?: "normal" | "large";
  iconLeft?: boolean;
  iconRight?: boolean;
  iconOnly?: boolean;
  fullWidth?: boolean;
  icon?: any;
}

export default function PrimaryButton({
  text,
  subtle = false,
  size = "normal",
  iconLeft = false,
  iconRight = false,
  iconOnly = false,
  fullWidth = false,
  icon,
}: primaryButtonType) {
  const PrimaryButtonSize = (size: string) => {
    switch (size) {
      case "normal":
        return "";
      case "large":
        return "";
      default:
        throw new Error(`undefined type : ${size}`);
    }
  };
  return <button>{text}</button>;
}
