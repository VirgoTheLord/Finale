import React, { useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const titleVariants = {
  hidden: { opacity: 0, x: -100 }, // Move in from the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }, // Move out to the right
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <AnimatePresence>
        <motion.h2
          className="font-bold text-8xl mb-32 w-full text-center text-gradient"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={titleVariants}
        >
          Experience.
        </motion.h2>
      </AnimatePresence>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Working on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Frontend Developer"
            company="Facebook"
            companyLink="https://www.facebook.com"
            time="2020-2022"
            address="Menlo Park, CA"
            work="Developed and maintained the user interface for Facebook's main platform, working closely with designers and backend developers to create a seamless user experience."
          />
          <Details
            position="Backend Developer"
            company="Amazon"
            companyLink="https://www.amazon.com"
            time="2018-2020"
            address="Seattle, WA"
            work="Worked on the backend systems for Amazon's e-commerce platform, focusing on improving the performance and scalability of the system."
          />
          <Details
            position="Intern"
            company="Microsoft"
            companyLink="https://www.microsoft.com"
            time="2017-2018"
            address="Redmond, WA"
            work="Assisted in the development of new features for Microsoft's cloud services, gaining valuable experience in software development and project management."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
