import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto mb-1 flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:alwinabymathew@gmail.com"
          target={"_blank"}
          className="flex items-center justify-center absolute right-[93px] bottom-1/2 translate-x-1/2 translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-mono font-bold hover:bg-light hover:text-dark hover:shadow-lg"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
