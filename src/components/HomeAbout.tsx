import React from "react";
import { svgBase64 } from "@/lib/svg";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <motion.div
        className={"w-full flex justify-start"}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-4xl xl:text-5xl w-[80%] lg:w-[70%] font-KGBlankSpaceSketch text-white justify-start lg:pr-44">
          Hey there! I am Pranabh Dubey, a Full-Stack Developer who loves turning
          ideas into powerful, scalable digital experiences.
        </h1>
      </motion.div>
      <motion.div
        className=" flex xl:justify-center my-4"
        style={{
          width: "100px",
          height: "100px",
          backgroundImage: `url("${svgBase64}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      ></motion.div>
      <motion.div
        className="  text-white  flex justify-end mt-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="font-PPNeueMontrealBook text-xl xl:text-2xl w-[80%] lg:w-[50%] bg-[#171717] p-4 rounded-2xl">
          I specialize in building scalable and efficient systems while ensuring
          intuitive user interfaces for seamless and engaging digital
          experiences
        </p>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
