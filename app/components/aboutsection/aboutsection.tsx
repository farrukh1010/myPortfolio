"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { tabDataTypes } from "@/types/types";
import img from "./../../../public/images/main.jpg"

const AboutSection = () => {
  return (
    <section className="" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 border border-double border-gray-500 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={img} width={500} height={500} alt="farrukh" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-slate-600 mb-4">About Me</h2>
          <p className=" text-[#fffff] text-base sm:text-lg mb-6 lg:text-xl ">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, NextJs, Python, React, Node.js,
            HTML, Tailwind CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
