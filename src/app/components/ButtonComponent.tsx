import React, { ReactNode } from "react";
import SmallButton from "./SmallButton";
import NormalButton from "./NormalButton";
import LargeButton from "./LargeButton";

interface ButtonComponent {
  size: "small" | "normal" | "large";
  text?: string;
  icon?: ReactNode;
  secondIcon?: ReactNode;
  type?: "primary" | "secondary" | "white";
  disabled?: boolean;
  fullWidth?: boolean;
  align?: "left" | "right";
}

export default function ButtonComponent({
  text,
  icon,
  secondIcon,
  type = "primary",
  size,
  disabled = false,
  fullWidth = false,
  align = "left",
}: ButtonComponent) {
  const buttonSize = (size: string) => {
    switch (size) {
      case "small":
        return (
          <SmallButton
            text={text}
            icon={icon}
            disabled={disabled}
            type={type}
          />
        );
      case "normal":
        return (
          <NormalButton
            text={text}
            align={align}
            fullWidth={fullWidth}
            icon={icon}
            secondIcon={secondIcon}
            disabled={disabled}
            type={type}
          />
        );
      case "large":
        return (
          <LargeButton
            text={text}
            align={align}
            fulllWidth={fullWidth}
            icon={icon}
            secondIcon={secondIcon}
            disabled={disabled}
            type={type}
          />
        );
    }
  };

  return <>{buttonSize(size)}</>;
}
