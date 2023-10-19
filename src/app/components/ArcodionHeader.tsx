import React, { ReactNode } from "react";

interface ArcodionHeaderType {
  text: string;
  icon: ReactNode;
  dropDown: ReactNode;
}

export default function ArcodionHeader({
  text,
  icon,
  dropDown,
}: ArcodionHeaderType) {
  return (
    <section
      className="flex justify-between h-[30px] shrink-0  "
      onClick={() => {}}
    >
      <div className="flex items-center l-bold-18 text-gray900 tracking-[-0.5px] gap-[10px] ">
        <span className="shrink-0">{icon}</span>
        <span>{text}</span>
      </div>
      {dropDown}
    </section>
  );
}
