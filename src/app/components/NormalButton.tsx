import React, { ReactNode } from "react";

interface NormalButtonType {
  text?: string;
  align?: "left" | "right";
  fullWidth?: boolean;
  icon?: ReactNode;
  secondIcon?: ReactNode;
  disabled?: boolean;
  type?: "primary" | "secondary" | "white";
}

export default function NormalButton({
  text,
  align = "left",
  fullWidth = false,
  icon,
  secondIcon,
  disabled = false,
  type = "primary",
}: NormalButtonType) {
  const primary = "bg-purple400 text-white hover:bg-purple500  ";
  const secondary = "bg-purple100 text-purple400 hover:bg-purple200";

  const buttonColor = (type: string) => {
    switch (type) {
      case "primary":
        return ` ${primary}`;
      case "secondary":
        return ` ${secondary}`;
      case "white":
        throw new Error(`no color : ${type}`);
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
      className={`${buttonColor(type)} flex ${
        icon && icon ? "gap-[8px]" : ""
      } disabled:bg-gray200 disabled:text-gray500 items-center l-medium-14 rounded-xl py-[14px] px-[12px] ${alignButton(
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
