import React, { ReactNode } from "react";

interface primaryButtonType {
  text?: string;
  type?: "primary" | "secondary" | "white";
  size?: "small" | "normal" | "large";
  align?: "left" | "right";
  fullWidth?: boolean;
  icon?: ReactNode;
  secondIcon?: ReactNode;
  disabled?: boolean;
}

export default function PrimaryButton({
  text,
  type = "primary",
  size = "normal",
  align = "left",
  fullWidth = false,
  icon,
  secondIcon,
  disabled = false,
}: primaryButtonType) {
  const ButtonColor = "bg-purple400 text-white hover:bg-purple500  ";
  const normalSubtle = "bg-purple100 text-purple400 hover:bg-purple200";
  const largeSubtle =
    "bg-white border border-solid border-purple400 text-purple400 hover:bg-purple200 disabled:border-none";

  const primaryButtonSize = (size: string) => {
    switch (size) {
      case "normal":
        return `l-medium-14 rounded-xl py-[14px] px-[16px]  ${
          type !== "primary" ? normalSubtle : ButtonColor
        }`;
      case "large":
        return `l-medium-16 rounded-xl py-[16px] px-[16px]  ${
          type !== "primary" ? largeSubtle : ButtonColor
        }`;
      case "small":
        throw new Error(`no size : ${size}`);
    }
  };
  const fullWidthButton = `${
    fullWidth
      ? `w-full ${icon && text ? "justify-between" : "justify-center"}`
      : `justify-center`
  }`;

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
      className={`${primaryButtonSize(
        size
      )} flex gap-[8px] disabled:bg-gray200 disabled:text-gray500 items-center ${alignButton(
        align
      )} ${fullWidthButton}`}
      disabled={disabled}
    >
      {secondIcon && secondIcon ? (
        <div className="flex items-center gap-[8px]">
          {icon && icon}
          {text}
        </div>
      ) : (
        <>
          <span> {icon && icon}</span>
          <span> {text}</span>
        </>
      )}

      {secondIcon && secondIcon}
    </button>
  );
}
