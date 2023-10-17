"use clinet";
// figma에 없는 색깔도 있음.

import React from "react";

interface ButtonProps {
  text: string;
  buttonSize: "label" | "normal" | "large" | "wideNormal" | "wideLarge";
  color: "primary" | "secondary" | "white";
  textSize: "small" | "normal" | "large";
  textColor: "white" | "purple" | "black";
}

export default function Button({
  text,
  buttonSize,
  color,
  textSize,
  textColor,
}: ButtonProps) {
  const buttonStyles = `${
    buttonSize === "label"
      ? `inline-flex h-[32px] p-[12px] justify-center items-center gap-[10px] shrink-0 rounded-lg`
      : ""
  }${
    buttonSize === "normal"
      ? "inline-flex px-[16px] py-[15px] item-center gap-[10px] flex-col rounded-xl"
      : ""
  }${
    buttonSize === "large"
      ? "inline-flex px-[24px] py-[16px] gap-[8px] flex-col item-center rounded-xl"
      : ""
  }${
    buttonSize === "wideNormal"
      ? "flex w-[343px] px-[140px] py-[15px] item-center gap-[10px] rounded-xl justify-center"
      : ""
  } 
  ${
    buttonSize === "wideLarge"
      ? "flex  w-[343px] px-[143px] py-[16px] gap-[10px] justify-center item-center rounded-xl"
      : ""
  }`;

  const buttonColor = `${
    color === "primary"
      ? " bg-purple400 hover:bg-purple500 disabled:bg-gray200 rounded"
      : ""
  }${
    color === "secondary"
      ? " bg-[#F2F4F8] hover:bg-[#DDE1E6] disabled:bg-[#C1C7CD]"
      : ""
  }${
    color === "white"
      ? "bg-white rounded border border-solid border-purple400 hover:bg-purple100 disabled:opacity-50"
      : ""
  }`;

  const buttonTextStyles = `
  ${textSize === "small" ? "l-medium-12" : ""}
   ${textSize === "normal" ? "l-medium-14" : ""} 
   ${textSize === "large" ? "l-medium-16" : ""}
  `;

  const buttonTextColor = `
   ${
     textColor === "white" ? "text-center text-white disabled:text-gray600" : ""
   }
   ${
     textColor === "black"
       ? "text-center text-[#21272a] disabled:text-[#878d96]"
       : ""
   }
   ${
     textColor === "purple"
       ? "text-center text-purple400 disabled:text-purple300"
       : ""
   }
   `;
  return (
    <button
      className={`${buttonStyles} ${buttonColor} ${buttonTextStyles} ${buttonTextColor}`}
    >
      {text}
    </button>
  );
}
