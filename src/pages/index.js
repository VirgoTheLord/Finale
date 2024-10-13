import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import profilePic1 from "../../public/images/profile/file.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Alwin | Home</title>
        <meta name="description" content="Built By Alwin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/3 ml-28 border border-gray-300 shadow-lg shadow-black transform transition-transform duration-300 hover:scale-105 hover:translate-x-2">
              <Image
                src={profilePic1}
                alt="CodeBucks"
                className="w-full"
                priority
              />
            </div>
            <div className="w-3/5 ml-14 flex flex-col items-center self-center">
              <AnimatedText
                text="From Vision to Creation:Powered by Code and Design."
                className="!text-6xl !leading-tight !text-left !font-bold font-mono"
              />
              <p className="my-4 text-base font-medium">
                As an AI/ML specialist, I am dedicated to transforming ideas
                into intelligent, data-driven solutions. I am passionate about
                developing innovative, user-centric models and applications that
                are both powerful and intuitive, offering seamless and impactful
                experiences.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark font-mono"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <CustomLink
                  href="mailto:alwinaby2004@gmail.com"
                  title="Contact"
                  className="ml-4 text-lg font-medium capitalize text-dark font-mono"
                />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="CodeBucks"
            className="w-full h-auto transform transition-transform duration-300 hover:-translate-y-2"
          />
        </div>
      </main>
    </>
  );
}
