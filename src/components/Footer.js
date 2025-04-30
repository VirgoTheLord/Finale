import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [showMobileFooter, setShowMobileFooter] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 10;
        setShowMobileFooter(atBottom);
      }, 100); // Debounce for smoother performance
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Fixed Footer (only at bottom) */}
      <footer
        className={`md:hidden fixed bottom-0 left-0 w-full border-t-2 border-dark text-base font-extrabold z-50 bg-black text-white dark:bg-white dark:text-black transition-opacity duration-300 ${
          showMobileFooter ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <section className="relative w-full h-8 px-4 flex items-end justify-between font-mono">
          <div className="absolute bottom-1 left-2 text-xs sm:text-sm">
            Built by{" "}
            <Link href="/" className="underline-offset-2 font-bold">
              <span className="text-green-400">A</span>lwin.
            </Link>
          </div>
          <span className="absolute bottom-1 right-2 text-xs sm:text-sm">
            {new Date().getFullYear()} © All Rights Reserved.
          </span>
        </section>
      </footer>

      {/* Desktop Static Footer (always visible) */}
      <footer className="hidden md:block w-full border-t-2 border-dark bg-black text-white dark:bg-white dark:text-black font-extrabold z-10">
        <section className="relative w-full h-7 px-8 flex items-end justify-between font-mono">
          <div className="text-sm md:text-lg">
            Built by{" "}
            <Link href="/" className="underline-offset-2 font-bold">
              <span className="text-green-400">A</span>lwin.
            </Link>
          </div>
          <span className="text-sm:text-sm">
            {new Date().getFullYear()} © All Rights Reserved.
          </span>
        </section>
      </footer>
    </>
  );
};

export default Footer;
