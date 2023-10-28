import React, { ReactNode } from "react";

interface LabelButtonType {
  type?: "primary" | "secondary" | "white";
  text?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export default function SmallButton({
  type = "primary",
  text,
  icon,
  disabled = false,
}: LabelButtonType) {
  const typeStyle = (type: string) => {
    switch (type) {
      case "primary":
        return " bg-purple400 hover:bg-purple500 disabled:bg-gray200 rounded text-center text-white disabled:text-gray600";
      case "secondary":
        return "bg-[#F2F4F8] hover:bg-[#DDE1E6] disabled:bg-[#C1C7CD] text-center text-[#21272a] disabled:text-[#878d96]";
      case "white":
        return "bg-white rounded border border-solid border-purple400 hover:bg-purple100 disabled:opacity-50 text-center text-purple400 disabled:text-purple300";
      default:
        throw new Error(`no type : ${type}`);
    }
  };

  return (
    <button
      className={`${typeStyle(
        type
      )}  l-medium-12 flex h-[32px] items-center justify-center gap-[8px] shrink-0 rounded-lg p-[10px]`}
      disabled={disabled}
    >
      {icon && icon}
      {text}
    </button>
  );
}
