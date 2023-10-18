import React from "react";

interface textButtonType {
  text: string;
  type?: "primary" | "destructive";
  size?: "normal" | "small";
  disabled?: boolean;
}

export default function textButton({
  text,
  type = "primary",
  size = "normal",
  disabled = false,
}: textButtonType) {
  const buttonType = (type: string) => {
    switch (type) {
      case "primary":
        return "text-purple400 hover:text-purple600";
      case "destructive":
        return "text-red";
    }
  };
  const textButtonSize = (size: string) => {
    switch (size) {
      case "normal":
        return "l-medium-16";
      case "small":
        return "l-medium-14";
    }
  };
  return (
    <button
      className={`${buttonType(type)} ${textButtonSize(
        size
      )} underline disabled:text-gray600 flex items-start`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
