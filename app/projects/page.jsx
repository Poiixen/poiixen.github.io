"use client";

import { m , motion } from "framer-motion";
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltiptTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image"
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const projectlist = [
  {
    num: "01",
    category: "Customer Support AI",
    description: "An AI chatbot that delivers intelligent, responsive interactions. It includes features like message splitting and auto-scrolling to enhance user experience.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TailwindCSS"}, { name: "Llama 3.1 API" }],
    image: "/assets/aisupport.png",
    live: "https://customer-support-ai-one.vercel.app",
    github: "https://github.com/Poiixen/customer-support-ai",
  },
  {
    num: "02",
    category: "Reticketer",
    description: "An all-in-one ticket reselling platform for any event, at any time. Created during Headstarter AI's 24-hour hackathon.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/reticketer.png",
    live: "https://reticketer.vercel.app",
    github: "https://github.com/raglandconnor/reticketer",
  },
  {
    num: "03",
    category: "Minesweeper",
    description: "A complete recreation of the classic Minesweeper game using C++'s SFML Library.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/minesweeper.png",
    live: "https://github.com/Poiixen/Minesweeper",
    github: "https://github.com/Poiixen/Minesweeper",
  },

];

const Work = () => {
  const [project, setProject] = useState(projectlist[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectlist[currentIndex]); 
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              {/* project description */}
              <p className="text-white/60"> {project.description} </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                    <TooltipTrigger className="w-[100px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <span className="text-white/80 text-base font-semibold font-sans group-hover:text-accent">Demo</span>
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                

                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projectlist.map((project,index) => {
                return <SwiperSlide key = {index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className=" absolute top-0 bottom- 0 w-full h-full bg-black/10 z-10">
                    </div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src = {project.image} fill className='object-cover' alt = '' /> 
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};


export default Work;
