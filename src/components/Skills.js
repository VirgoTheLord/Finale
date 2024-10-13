import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute font-mono"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const titleVariants = {
  hidden: { opacity: 0, x: -100 }, // Move in from the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }, // Move out to the right
};

const Skills = () => {
  return (
    <>
      <AnimatePresence>
        <motion.h2
          className="font-bold text-8xl mt-64 w-full text-center text-gradient"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={titleVariants}
        >
          Skills.
        </motion.h2>
      </AnimatePresence>
      <div className="w-full h-screen relative flex items-center rounded-lg justify-center bg-circularLight">
        <motion.div
          className="flex items-center justify-center font-semibold bg-dark text-light p-10 shadow-dark rounded-full w-52 h-32 text-3xl"
          whileHover={{ scale: 1.05 }}
        >
          AI/ML
        </motion.div>
        <Skill name="Html" x="-5vw" y="-7vw" />
        <Skill name="NextJS" x="-17vw" y="5vw" />
        <Skill name="JavaScript" x="31vw" y="-3vw" />
        <Skill name="ReactJS" x="4vw" y="16vw" />
        <Skill name="TailwindCSS" x="-32vw" y="13vw" />
        <Skill name="Gen-AI" x="17vw" y="-12vw" />
        <Skill name="Langchain" x="0vw" y="-20vw" />
        <Skill name="Prompts" x="-25vw" y="-18vw" />
        <Skill name="NodeJS" x="34vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;
