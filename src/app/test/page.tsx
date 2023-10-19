import React from "react";
import Arcodion from "../components/Arcodion";
import Image from "next/image";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function TestPage() {
  return (
    <div>
      <Arcodion
        text="JavaScript"
        icon=<Image
          src="/javascript.png"
          alt="javavscript"
          width={30}
          height={30}
        />
      />
    </div>
  );
}
