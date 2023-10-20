import React from "react";

interface BadgeType {
  // text: string;
  type?: "1" | "1-2" | "1-3" | "1-4";
}

export default function Badge({ type = "1" }: BadgeType) {
  const badgeType = (type: string) => {
    switch (type) {
      case "1":
        return "bg-purple100 text-purple400";
      case "1-2":
        return "bg-purple200 text-purple400";
      case "1-3":
        return "bg-purple300 text-purple600";
      case "1-4":
        return "bg-purple400 text-purple100";
    }
  };

  return (
    <span
      className={`inline-flex w-[50px]  justify-center items-center gap-[10px] flex-col px-[8px] py-[4px] rounded-[62px] l-bold-10 shrink-0 ${badgeType(
        type
      )}`}
    >
      Lv {type}
    </span>
  );
}
