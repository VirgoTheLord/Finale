import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(true);
      } else {
        // Scrolling up
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer
      className={`w-full border-t-2 border-solid border-dark font-medium text-lg fixed bottom-0 left-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } bg-black text-white font-extrabold`}
    >
      <section
        className={`w-full h-full z-0 p-32 py-0 flex items-center justify-between bg-black font-mono`}
      >
        <div className="flex items-center justifycenter">
          Built by&nbsp;
          <Link
            href="/"
            className="underline-offset-2 font-bold"
            target={"_blank"}
          >
            <span className="text-green-400 text-bold">A</span>
            lwin.
          </Link>
        </div>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </section>
    </footer>
  );
};

export default Footer;
