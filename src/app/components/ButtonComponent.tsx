import React, { ReactNode } from "react";
import LabelButton from "./LabelButton";
import PrimaryButton from "./PrimaryButton";
import TextButton from "./TextButton";

interface ButtonComponent {
  buttonType: "label" | "primary" | "text";
  text?: string;
  icon?: ReactNode;
  secondIcon?: ReactNode;
  type?: "primary" | "secondary" | "white";
  size?: "small" | "normal" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
  align?: "left" | "right";
}

export default function ButtonComponent({
  buttonType,
  text,
  icon,
  secondIcon,
  type = "primary",
  size,
  disabled = false,
  fullWidth = false,
  align = "left",
}: ButtonComponent) {
  const buttonTypeStyle = (buttonType: string) => {
    switch (buttonType) {
      case "label":
        return (
          <LabelButton
            text={text}
            icon={icon}
            disabled={disabled}
            type={type}
          />
        );
      case "primary":
        return (
          <PrimaryButton
            text={text}
            type={type}
            size={size}
            align={align}
            fullWidth={fullWidth}
            icon={icon}
            secondIcon={secondIcon}
            disabled={disabled}
          />
        );
      case "text":
        return (
          <TextButton text={text} type={type} size={size} disabled={disabled} />
        );
    }
  };

  return <>{buttonTypeStyle(buttonType)}</>;
}
