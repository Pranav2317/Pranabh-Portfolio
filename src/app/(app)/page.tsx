"use client";
import { CodeXml, Linkedin, Smile } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative z-20 flex flex-col items-center text-white pt-24">
      {/* ✅ Added pt-24 to prevent overlap with navbar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex flex-col h-full"
      >
        <div className="flex flex-col md:mb-10 xl:mb-0 justify-center items-center ">
          <div className="flex space-x-4 md:space-x-10  items-center md:pr-16 xl:pr-32  md:mb-2 xl:mb-14">
            <h1 className=" text-3xl sm:text-4xl text-center md:text-6xl xl:text-8xl font-KGBlankSpaceSketch">
              Pranabh Dubey
            </h1>
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Smile size={60} color="#FFD700" />
            </motion.div>
          </div>
          <div className="flex relative mb-10 md:mb-0 space-x-4 sm:space-x-10 transform items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <CodeXml strokeWidth={1} size={80} className="text-white/60" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl font-KGBlankSpaceSketch">
              FULLSTACK DEV
            </h1>
            <motion.div
              className="hidden absolute sm:block bottom-[-50px]  xl:bottom-[-100px] right-[-100px] p-2 bg-[#1C2127] rounded-full rounded-tl-none"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Image
                src="/images/pranav1.jpg"
                alt="Picture of the author"
                width={100}
                height={100}
                className="rounded-full"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-between flex-col-reverse xl:flex-row mt-0 xl:mt-[200px]">
          {/* twitter and linkedin */}
          <motion.div
            className="flex space-x-2 items-center mt-20 xl:mt-0 pl-6 sm:pl-10 md:pl-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="text-xs">SAY HELLO</span>
            <Link
              href="https://www.linkedin.com/in/pranabh-dubey-66ba1b28a/"
              target="_blank"
              className="p-2 rounded-full bg-[#171717]"
            >
              <Linkedin size={16} />
            </Link>
          </motion.div>
          {/* contact me */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="flex sm:space-x-12 items-center flex-col-reverse  sm:flex-row-reverse"
          >
            <Link href="mailto:dubeypranav63@gmail.com" target="_blank">
              <Button className="text-xs sm:text-lg md:text-xl p-2 mx-8 sm:p-6 md:p-8 hover:bg-gray-300 bg-white text-black font-extrabold">
                Contact Me
              </Button>
            </Link>
            <p className=" text-sm md:text-xl mx-4 md:w-[600px] mb-3 md:mb-0 pl-8  text-wrap text-left font-roboto ">
              I Pranabh Dubey dedicated and detail-oriented Full Stack Developer with a strong
              foundation in both front-end and back-end technologies. I have hands-on experience
              with technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB through
              academic projects and self-driven learning.
              <br />
              <br />
              I am passionate about creating efficient, scalable, and user-friendly web
              applications, and I am eager to contribute to a dynamic development team where I can
              apply my skills, gain industry experience, and continue growing as a professional
              developer.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
