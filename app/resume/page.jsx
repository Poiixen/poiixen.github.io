"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const resumeItems = [
  {
    company: "Housing Assembly, EDU Africa",
    role: "Project Manager, Software Engineer",
    date: "Jul 2024 - Oct 2024",
    image: "/assets/theheadstarter_logo.jfif",
    bullets: [
      "Built and deployed 5 AI projects using React JS, Next.js, Firebase, Clerk, and Vercel.",
      "Agile methodologies with weekly sprints and CI/CD practices.",
      "Participated in sessions with engineers from Google, YC, Stanford, Amazon.",
    ],
  },
  {
    company: "Headstarter AI",
    role: "Software Engineer Fellow",
    date: "Jul 2024 - Oct 2024",
    image: "/assets/theheadstarter_logo.jfif",
    bullets: [
      "Built and deployed 5 AI projects using React JS, Next.js, Firebase, Clerk, and Vercel.",
      "Agile methodologies with weekly sprints and CI/CD practices.",
      "Participated in sessions with engineers from Google, YC, Stanford, Amazon.",
    ],
  },
  {
    company: "Code2040",
    role: "Software Engineer Fellow",
    date: "Jul 2022 - Aug 2024",
    image: "/assets/code2040.png",
    bullets: [
      "Career accelerator for Black and Latine CS students.",
      "Focused on equity advocacy, workshops, and networking.",
    ],
  },
];

export default function Resume() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="min-h-screen py-16 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center max-w-7xl mx-auto px-4">
        Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Left side buttons */}
        <div className="flex flex-col gap-4 w-full lg:w-[610px]">
          {resumeItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex items-center gap-4 text-left p-4 border rounded-lg transition hover:bg-zinc-800/40 w-full ${
              selected === i
                ? "border-accent text-accent bg-zinc-800/60"
                : "border-white/20"
            }`}
          >
            <Image
              src={item.image}
              alt={item.company}
              width={32}
              height={32}
              className="rounded object-contain shrink-0"
            />
            <div className="flex flex-col min-w-0"> {/* 👈 CRITICAL */}
              <h4 className="font-semibold text-base lg:text-lg leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {item.company}
              </h4>
              <p className="text-sm text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.role}
              </p>
              <p className="text-xs text-white/50 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.date}
              </p>
            </div>
          </button>
          ))}
        </div>

        {/* Right side modal */}
        <div className="relative w-full h-[480px] border rounded-xl border-white/20 bg-[#232329] px-8 py-12 overflow-hidden">
          <AnimatePresence mode="wait">
            {selected !== null && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full p-6 overflow-y-auto flex flex-col"
              >
                <h4 className="text-xl lg:text-2xl font-bold mb-1 leading-tight">
                  {resumeItems[selected].role}
                </h4>
                <p className="text-sm lg:text-base text-white/70 mb-1">
                  {resumeItems[selected].company}
                </p>
                <p className="text-sm text-white/60 mb-4">
                  {resumeItems[selected].date}
                </p>
                <Image
                  src={resumeItems[selected].image}
                  alt={resumeItems[selected].company}
                  width={100}
                  height={100}
                  className="rounded-lg mb-4 object-contain"
                />
                <ul className="list-disc list-inside space-y-2 text-white/80 text-sm lg:text-base w-full">
                  {resumeItems[selected].bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          {selected === null && (
            <div className="text-white/50 text-center mt-20">
              <p>Select an experience to view more details</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
