import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import MovingText from "./MovingText";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
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

  return (
    <header className="w-full px-32 py-8 flex items-center justify-between text-xl relative">
      {/* Nav Links */}
      <nav className="flex space-x-4 font-mono font-bold">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      {/* Animated Text */}
      <div className="absolute flex left-1/2 transform -translate-x-1/2 text-lg shadow-lg shadow-black/50 border-black/75 p-3 ">
        <MovingText texts={texts} />
      </div>

      {/* Icons */}
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://pinterest.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com"
          target="_blank"
          className="w-6 ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      {/* Logo */}
      <div className="absolute -ml-16 top-1 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
