import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import MovingText from "./MovingText";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={onClick}
    >
      {title}

      {/* Static underline for current page */}
      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] transition-none ${
          isActive ? "w-full bg-white dark:bg-black" : "w-0"
        }`}
      />

      {/* Hover underline animation */}
      <span
        className={`absolute left-0 -bottom-0.5 h-[2px] bg-white dark:bg-black group-hover:w-full transition-[width] duration-300 ease ${
          isActive ? "w-0" : "w-0"
        }`}
      />
    </Link>
  );
};

const NavBar = () => {
  const texts = [
    "AI/ML Professional",
    "Web Developer",
    "Gen-AI Developer",
    "Freelancer",
    "Prompt Engineering",
  ];

  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 md:px-32 py-4 md:py-8 dark:text-light flex items-center justify-between text-base md:text-xl relative font-mono z-20">
      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden flex items-center justify-center focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Nav Links (Desktop) */}
      <nav className="hidden md:flex space-x-4 font-mono font-bold">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      {/* Mobile Nav Overlay */}
      <nav
        className={`fixed top-0 left-0 h-full w-[90%] bg-black dark:bg-white text-white dark:text-black flex flex-col items-center justify-center space-y-6 text-xl font-bold transform transition-transform duration-300 ease-in-out z-30 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 left-4 flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <CustomLink
          href="/"
          title="Home"
          className="text-center mobile-nav-link"
          onClick={toggleMenu}
        />

        <CustomLink
          href="/about"
          title="About"
          className="text-center mobile-nav-link"
          onClick={toggleMenu}
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="text-center mobile-nav-link"
          onClick={toggleMenu}
        />
        <CustomLink
          href="/articles"
          title="Articles"
          className="text-center mobile-nav-link"
          onClick={toggleMenu}
        />
      </nav>

      {/* Animated Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-4 md:top-8 text-base md:text-lg shadow-lg shadow-black/50 border-black/75 p-2 md:p-3">
        <MovingText texts={texts} />
      </div>

      {/* Logo (Desktop Only) */}
      <div className="hidden md:block absolute -ml-16 top-1 translate-x-[-50%]">
        <Logo />
      </div>

      {/* Social Icons and Theme Toggle */}
      <nav className="social-nav flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 md:mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          className="w-6 md:mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          className="w-6 md:mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://pinterest.com"
          target="_blank"
          className="w-6 md:mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com"
          target="_blank"
          className="w-6 md:ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`mb-1 -mr-1.5 flex items-center justify-center rounded-full p-2 md:ml-4 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
