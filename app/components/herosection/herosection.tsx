"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-yellow-400 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">
              Hello, I'm Farrukh Zaman {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web and Mobile App Developer",
                1000,
                "Web and Mobile App Designer",
                1000,
                "Front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#fffff] text-base sm:text-lg mb-6 lg:text-xl">
          A passionate Full Stack Developer with a background in Computer
            Science. Currently working as a freelancer and always looking for
            new challenges to take on.
          </p>
          <div>
          <Link
              href="#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-700 to-green-600 text-white">
              <span className="block bg-slate-600 hover: rounded-full px-5 py-2">
                Have a Project?
              </span>
              </button>
            </Link>
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[200px] h-[200px] lg:w-[325px] lg:h-[325px] relative">
            <Image
              src="/images/mypic.jpg"
              alt="hero image"
              className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
