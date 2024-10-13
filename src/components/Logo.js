import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 font-extrabold font-mono">
      <MotionLink
        href="/"
        className="w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold font-mono"
        whileHover={{
          backgroundColor: [
            "#000000",
            "rgba(58,12,163,1)",
            "rgba(255,94,58,1)",
            "rgba(255,221,51,1)",
            "rgba(0,255,153,1)",
            "rgba(255,51,255,1)",
            "rgba(252,176,69,1)",
            "rgba(58,12,163,1)",
            "rgba(131,58,180,1)",
            "rgba(29,253,253,1)",
            "rgba(255,45,85,1)",
            "#000000",
          ],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        AW
      </MotionLink>
    </div>
  );
};

export default Logo;
