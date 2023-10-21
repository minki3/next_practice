import React from "react";
import Badge from "./Badge";

interface ArcodionCardType {
  title: string;
  description: string;
  level: "1" | "1-2" | "1-3" | "1-4";
}

export default function ArcodionCard({
  title,
  description,
  level,
}: ArcodionCardType) {
  return (
    <div className="w-[247px] h-[148px]  p-[16px] shrink-0 rounded-xl border border-gray100 bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.12)]">
      <div className="flex flex-col">
        <span className=" l-bold-16 tracking-[-0.5px] text-gray800 pb-[16px]">
          {title}
        </span>
        <span className=" l-medium-14 text-gray600 pb-[20px]">
          {description}
        </span>
        <Badge type={level} />
      </div>
    </div>
  );
}
