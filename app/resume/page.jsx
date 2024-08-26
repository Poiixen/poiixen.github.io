"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { SiCplusplus, SiNextdotjs, SiTypescript } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import Image from 'next/image';


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { DiPython } from "react-icons/di";

//other sections
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const about = {
  title: "About me",
  description: " Who am I?",
  info: [
    { fieldName: "👤 Name ", fieldValue: "Jorge Garcia" },
    // { fieldName: "📞 Phone ", fieldValue: "(786) 212 5112 " },
    { fieldName: " 💻 Coding Expertise", fieldValue: "3+ Years " },
    { fieldName: "🎓 Major ", fieldValue: "Computer Science" },
    { fieldName: " Nationality", fieldValue: "Cuban-Chile " },
    {
      fieldName: "🎲 Hobby",
      fieldValue: 'Playing video games, watching anime, and coding',
    },
    { fieldName: "🗣️ Languages", fieldValue: "French " },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  description: "Where have I made an impact?",
  items: [
    {
      image: "/images.png",
      company: "Headstarter AI",
      position: "Software Engineering Fellow",
      duration: "July 2024 - October 2024 ",
      description: "twas cool",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Here is my tech stack! ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <DiPython />,
      name: "Python",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <GiProcessor />,
      name: "ARM Assembly",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
  ],
};


const education = {
  icon: "/assests/resume/cap.svg",
  title: "My Education",
  description: "Clike to learn more!",
  items: [
    {
      image: "/codepath.jpg",
      institution: "University of Florida",
      degree: "Bachelor of Science - Computer Science",
      duration: "August 2022 - Present",
      details: "Details about the course at University of Florida...",
    },
    {
      image: "/codepath.jpg",
      institution: "CodePath",
      degree: "Technical Interview Prep",
      duration: "September 2024 - August 2024",
      details: "Details about the CodePath program...",
    },
    {
      image: "/codepath.jpg",
      institution: "Codecademy",
      degree: "WIP",
      duration: "WIP",
      details: "Details about Codecademy courses...",
    },
  ]
};

const Card = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
        onClick={handleClick}
      >
        <span className="rounded-full overflow-hidden w-[100px] h-[100px]">
          <img
            src={item.image}
            alt={item.institution}
            className="max-w-full max-h-full object-cover"
          />
        </span>
        <span className="text-accent">{item.institution}</span>
        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
          {item.degree}
        </h3>
        <div className="flex items-center gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
          <p className="text-white/60">{item.duration}</p>
        </div>
      </div>

      <div
        className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
        onClick={handleClick}
      >
        <h3 className="text-xl text-center lg:text-left">
          {item.details}
        </h3>
      </div>
    </ReactCardFlip>
  );
};


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.items.company}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.items.position}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                  <Card key={index} item={item} />
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* About Me */}
          <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-8 text-center xl:text-left">
              <h3 className="text-4xl font-bold text-gradient bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="max-w-3xl text-gray-300 mx-auto xl:mx-0">
                Hi, I'm Jorge Garcia, a passionate computer science student with a diverse range of skills and interests. I'm always eager to take on new challenges and continue learning and growing.
              </p>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-accent">Highlights</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <li className="bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-600">
                      <img src="path/to/image1.jpg" alt="Highlight 1" className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-white">Highlight Title 1</h5>
                      <p className="text-gray-400">Description of highlight 1 goes here.</p>
                    </div>
                  </li>
                  <li className="bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-600">
                      <img src="path/to/image2.jpg" alt="Highlight 2" className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-white">Highlight Title 2</h5>
                      <p className="text-gray-400">Description of highlight 2 goes here.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};


export default Resume;