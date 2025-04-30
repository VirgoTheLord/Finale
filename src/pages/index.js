import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import profilePic1 from "../../public/images/profile/file.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import HireMe from "../components/HireMe";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
         
      </span>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Alwin | Home</title>
        <meta name="description" content="Built By Alwin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main flex flex-col items-center text-dark w-full min-h-screen dark:text-light md:flex-row md:items-center md:justify-between">
        <Layout className="pt-0">
          <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
            {/* Image Section */}
            <div className="w-full md:w-1/3 mx-4 md:ml-28 mb-8 md:mb-0 border border-gray-300 shadow-lg shadow-black dark:border-gray-700 dark:shadow-white transform transition-transform duration-300 hover:scale-105 hover:translate-x-2">
              <Image
                src={profilePic1}
                alt="CodeBucks"
                width={400}
                height={400}
                layout="responsive"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="w-full h-auto"
              />
            </div>
            {/* Text Section */}
            <div className="description w-full px-4 mt-4 md:mt-0 flex flex-col items-center md:items-start md:w-3/5 md:ml-14">
              <AnimatedText
                text="From Vision to Creation: Powered by Code and Design."
                className="mobile-heading !text-4xl md:!text-6xl !leading-tight !text-center md:!text-left !font-bold font-mono"
              />
              <p className="mobile-text my-4 text-base font-medium text-center md:text-left">
                As an AI/ML specialist, I am dedicated to transforming ideas
                into intelligent, data-driven solutions. I am passionate about
                developing innovative, user-centric models and applications that
                are both powerful and intuitive, offering seamless and impactful
                experiences.
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start mt-2 space-y-4 md:space-y-0 md:space-x-4">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:border-dark font-mono dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light w-full md:w-auto justify-center"
                  download
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <CustomLink
                  href="mailto:alwinaby2004@gmail.com"
                  title="Contact"
                  className="text-lg font-medium capitalize text-dark font-mono dark:text-light w-full md:w-auto text-center"
                />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="light-bulb absolute right-4 bottom-4 inline-block w-16 md:w-24">
          <Image
            src={lightBulb}
            alt="CodeBucks"
            width={96}
            height={96}
            layout="responsive"
            sizes="(max-width: 768px) 16vw, 24vw"
            className="w-full h-auto transform transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
      </main>
    </>
  );
}
