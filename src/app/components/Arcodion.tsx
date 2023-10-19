"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import ArcodionHeader from "./ArcodionHeader";
import ArcodionCard from "./ArcodionCard";

interface ArcodionType {
  icon: ReactNode;
  text: string;
}

export default function Arcodion({ text, icon }: ArcodionType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`w-full rounded-xl p-[20px]  ${
        isOpen ? "bg-purple100 border border-purple300 " : "bg-gray100 "
      }`}
    >
      {!isOpen && (
        <ArcodionHeader
          text={text}
          icon={icon}
          dropDown={
            <Image
              src="/dropdown.svg"
              alt="dropdown"
              width={24}
              height={24}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          }
        />
      )}

      {isOpen && (
        <>
          <ArcodionHeader
            text={text}
            icon={icon}
            dropDown={
              <Image
                src="/dropup.svg"
                alt="dropup"
                width={24}
                height={24}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              />
            }
          />
          <section className=" pt-[80px]">
            <ArcodionCard
              title="런타임 및 엔진"
              description="이것은 설명입니다. 설명은 최대 2줄입니다. 이것은 설명입니다."
              level="1-3"
            />
          </section>
        </>
      )}
    </section>
  );
}
