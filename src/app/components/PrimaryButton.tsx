import React from "react";

interface primaryButtonType {
  text?: string;
  subtle?: boolean;
  size?: "normal" | "large";
  align?: "left" | "right";
  iconOnly?: boolean;
  fullWidth?: boolean;
  icon?: any;
  disabled?: boolean;
}

export default function PrimaryButton({
  text,
  subtle = false,
  size = "normal",
  align = "left",
  iconOnly = false,
  fullWidth = false,
  icon,
  disabled = false,
}: primaryButtonType) {
  const ButtonColor = "bg-purple400 text-white hover:bg-purple500  ";
  const normalSubtle = "bg-purple100 text-purple400 hover:bg-purple200";
  const largeSubtle =
    "bg-white border border-solid border-purple400 text-purple400 hover:bg-purple200 disabled:border-none";

  const PrimaryButtonSize = (size: string) => {
    switch (size) {
      case "normal":
        return `l-medium-14 rounded-xl py-[14px]  ${
          fullWidth
            ? `px-[16px] w-[343px] ${
                icon ? "justify-between" : "justify-center"
              }`
            : "px-[16px] justify-center"
        } ${subtle ? normalSubtle : ButtonColor}`;
      case "large":
        return `l-medium-16 rounded-xl py-[16px] ${
          fullWidth
            ? `px-[16px] w-[343px] ${
                icon ? "justify-between" : "justify-center"
              }`
            : "px-[24px] justify-center"
        } ${subtle ? largeSubtle : ButtonColor}`;
      default:
        throw new Error(`undefined type : ${size}`);
    }
  };

  const alignButton = (align: string) => {
    switch (align) {
      case "left":
        return "";
      case "right":
        return "flex-row-reverse";
    }
  };

  return (
    <button
      className={`${PrimaryButtonSize(
        size
      )} flex gap-[8px] disabled:bg-gray200 disabled:text-gray500 items-center ${alignButton(
        align
      )}`}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
}
