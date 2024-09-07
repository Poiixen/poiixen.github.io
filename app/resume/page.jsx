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
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My Experience",
  description: "Where have I made an impact?",
  items: [
    {
      image: "/assets/theheadstarter_logo.jfif",
      institution: "Headstarter AI",
      degree: "SWE Fellow",
      duration: "July 2024 - October 2024 ",
      details: "Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment. Participate in weekly sessions with engineers from Google, Y Combinator, Stanford, Amazon and venture-backed startups",
    },
    {
      image: "/assets/uflogo`.png",
      institution: "UFKB",
      degree: "Boxing Instructor",
      duration: "July 2022 - October 2026 ",
      details: "• Provide guidance and instruction regarding proper boxing technique to ~50 students, while emphasizing safety and efficiency in training sessions. • Showing people that have never considered boxing how much fun it can be (or try to, at least).",
    },
    {
      image: "/assets/code2040.png",
      institution: "Code2040",
      degree: "Fellow",
      duration: "July 2022 - August 2024",
      details: "A career accelerator program for Black and Latine computer science students from around the world. Networked with those at top tech companies, participated in career-building workshops, and engaged in racial equity advocacy work.",
    },
  ],
};

const skills = {
  title: "My Skills",
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
  description: "Click to learn more!",
  items: [
    {
      image: "/assets/uflogo.png",
      institution: "University of Florida",
      degree: "Bachelor of Science - Computer Science",
      duration: "August 2022 - Present",
      details: "3.7 GPA \nRelevant Courses include: Data Structures, Algorithms, Computer Organization, Discrete Math, Calculus 1-3, and Physics 1-2.",
    },
    {
      image: "/assets/codepath.jpg",
      institution: "CodePath",
      degree: "Technical Interview Prep",
      duration: "September 2024 - August 2024",
      details: "The TIP pathway focuses on empowering students to ace technical interviewing and give them a preview of real-world challenges in the industry. The courses are designed to prepare students to solve challenging algorithmic problems commonly used in interviews for top companies.",
    },
    {
      image: "/assets/channels4_profile.jpg",
      institution: "Codecademy",
      degree: "C++, Python Certified",
      duration: "October 2022- December 2023",
      details: "Currently working on Full Stack Engineer Path...",
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
      {/* Front Side */}
      <div
        className={`flip-card bg-[#232329] h-[350px] w-[500px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleClick}
      >
        <span className="rounded-full overflow-hidden w-[100px] h-[100px] flex justify-center items-center">
        <Image
          src={item.image}
          alt={item.institution}
          width={100}
          height={100}
          className="w-full h-full object-cover"
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
  
      {/* Back Side */}
      <div
        className={`flip-card bg-[#232329] h-[350px] w-[540] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleClick}
      >
        <h3 className="text-xl text-center lg:text-left">
          {item.details.replace(/'/g, '&#39;')}
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
      <div className="container mx-left">
      <h2 className="text-3xl font-bold text-center mb-8">My Resume</h2>
      <Tabs defaultValue="education">
        <TabsList className="flex justify-center gap-4 mb-6">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>


          {/* Education */}
          <TabsContent value="education" className="text-lg w-full">
            <div className="flex flex-col gap-[10px] text-center xl:text-left">
              <h3 className="text-2xl font-bold">{education.title}</h3>
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
          <TabsContent value="skills" className="text-lg w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">{skills.title}</h3>
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
          <TabsContent value="experience" className="text-lg w-full">
            <div className="flex flex-col gap-[10px] text-center xl:text-left">
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
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
                Hi, I&apos;m Jorge Garcia, a passionate computer science student with a diverse range of skills and interests. I&apos;m always eager to take on new challenges and continue learning and growing.
              </p>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-accent">Highlights</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <li className="bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-600">
                    <Image 
                      src="" 
                      alt="Highlight 1" 
                      width={100} 
                      height={100} 
                      className="object-cover w-full h-full" 
                    />
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-white">Highlight Title 1</h5>
                      <p className="text-gray-400">desc</p>
                    </div>
                  </li>
                  <li className="bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-600">
                    <Image 
                      src="" 
                      alt="Highlight 1" 
                      width={100} 
                      height={100} 
                      className="object-cover w-full h-full" 
                    />
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-white">Highlight Title 2</h5>
                      <p className="text-gray-400">desc</p>
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