import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/Alwin.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const paragraphVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Alwin | About</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Drive Ignites Ambition!"
            className="mb-16 font-mont"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-3xl font-extrabold uppercase text-dark/75 font-mono relative group">
                Biography.
                <span className="block h-1 bg-dark/75 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
              </h2>
              <motion.p
                className="font-medium"
                initial="hidden"
                animate="visible"
                variants={paragraphVariants}
              >
                Hi, I'm Alwin, a Gen-AI engineer and prompt specialist with a
                strong background in web development and UI/UX design. With 4
                years of experience, I focus on building seamless, user-centric
                digital solutions while leveraging the latest in AI technology
                to innovate and elevate my clients' ideas.
              </motion.p>

              <motion.p
                className="my-4 font-medium"
                initial="hidden"
                animate="visible"
                variants={paragraphVariants}
              >
                I believe that design goes beyond aesthetics—it's about
                problem-solving and crafting intuitive, impactful user
                experiences. As a Gen-AI engineer and UI/UX developer, I focus
                on blending functionality with innovation to create solutions
                that engage users and drive results.
              </motion.p>
              <motion.p
                className="font-medium"
                initial="hidden"
                animate="visible"
                variants={paragraphVariants}
              >
                Whether it's a website, mobile app, or digital solution, I
                approach every project with a commitment to excellence and a
                focus on user-centered design. As a Gen-AI engineer and UI/UX
                developer, I blend creativity and advanced technology to deliver
                meaningful, functional experiences. I'm excited to bring my
                skills and passion to your next project.
              </motion.p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  " />
              <Image
                src={profilePic}
                alt="Alwin"
                className="w-full h-auto rounded-2xl border border-transparent"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-lg font-bold  uppercase text-dark/75 relative group">
                  Satisfied Clients
                  <span className="block h-1 bg-dark/75 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-lg font-bold  uppercase text-dark/75 relative group">
                  Projects Completed
                  <span className="block h-1 bg-dark/75 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-lg font-bold  uppercase text-dark/75 relative group">
                  Years of Experience
                  <span className="block h-1 bg-dark/75 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
