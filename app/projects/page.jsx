"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projectlist = [
  {
    num: "01",
    category: "Customer Support AI",
    description: "An AI chatbot that delivers intelligent, responsive interactions. It includes features like message splitting and auto-scrolling to enhance user experience.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TailwindCSS" }, { name: "Llama 3.1 API" }],
    image: "/assets/projects/aisupport.png",
    live: "https://customer-support-ai-one.vercel.app",
    github: "https://github.com/Poiixen/customer-support-ai",
  },
  {
    num: "02",
    category: "Reticketer",
    description: "An all-in-one ticket reselling platform for any event, at any time. Created during Headstarter AI's 24-hour hackathon.",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/projects/reticketer.png",
    live: "https://reticketer.vercel.app",
    github: "https://github.com/raglandconnor/reticketer",
  },
  {
    num: "03",
    category: "Minesweeper",
    description: "A complete recreation of the classic Minesweeper game using C++'s SFML Library.",
    stack: [{ name: "C++" }, { name: "SFML" }, { name: "OOP" }],
    image: "/assets/projects/minesweeper.png",
    live: "https://github.com/Poiixen/Minesweeper",
    github: "https://github.com/Poiixen/Minesweeper",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projectlist[currentIndex];
  const swiperRef = useRef(null);

  // When a thumbnail is clicked, slide to that index
  const handleThumbnailClick = (index) => {
    swiperRef.current?.slideTo(index);
  };

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

          {/* Left - Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold">{project.num}</div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[100px] h-[70px] rounded-full bg-white/5 flex justify-center items-center gap-2 group">
                        <span className="text-white/80 text-base font-semibold font-sans group-hover:text-accent">Demo</span>
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent><p>Live project</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent><p>Github repo</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Main Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-4"
              onRealIndexChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
            >
              {projectlist.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                    <div className="relative w-full h-full">
                      <Image src={p.image} fill className="object-cover" alt={p.category} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-2">
              {projectlist.map((p, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`
                    relative flex-1 h-[70px] rounded-md overflow-hidden border-2 transition-all duration-300
                    ${index === currentIndex
                      ? "border-accent scale-105 brightness-100"
                      : "border-white/10 brightness-50 hover:brightness-75"}
                  `}
                >
                  <Image src={p.image} fill className="object-cover" alt={p.category} />
                  {/* Label overlay on active thumbnail */}
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-black/40 flex items-end p-1 z-10">
                      <span className="text-white text-[10px] font-semibold leading-tight truncate">
                        {p.category}
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;