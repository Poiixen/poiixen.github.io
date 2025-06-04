"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const resumeItems = [
  {
    title: "SWE Fellow @ Headstarter AI",
    date: "Jul 2024 - Oct 2024",
    image: "/assets/theheadstarter_logo.jfif",
    bullets: [
      "Built and deployed 5 AI projects using React JS, Next.js, Firebase, Clerk, and Vercel.",
      "Agile methodologies with weekly sprints and CI/CD practices.",
      "Participated in sessions with engineers from Google, YC, Stanford, Amazon."
    ],
  },
  {
    title: "Boxing Instructor @ UFKB",
    date: "Jul 2022 - Oct 2026",
    image: "/assets/uflogo.png",
    bullets: [
      "Guided ~50 students in proper boxing technique emphasizing safety.",
      "Introduced beginners to boxing in engaging sessions."
    ],
  },
  {
    title: "Fellow @ Code2040",
    date: "Jul 2022 - Aug 2024",
    image: "/assets/code2040.png",
    bullets: [
      "Career accelerator for Black and Latine CS students.",
      "Focused on equity advocacy, workshops, and networking."
    ],
  }
];

export default function Resume() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen px-4 py-16 mx-auto max-w-7xl text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Experiences</h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {resumeItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`text-left p-4 border rounded-lg transition hover:bg-zinc-800/40 whitespace-nowrap overflow-hidden text-ellipsis ${
                selected === i ? "border-accent text-accent bg-zinc-800/60" : "border-white/20"
              }`}
            >
              <h4 className="font-semibold text-base lg:text-lg leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </h4>
              <p className="text-xs lg:text-sm text-white/60 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.date}
              </p>
            </button>
          ))}
        </div>


        <div className="relative w-full lg:w min-h-[340px] border rounded-xl border-white/20 bg-[#232329] p-64">
          <AnimatePresence mode="wait">
            {selected !== null && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-6 overflow-y-auto"
              >
                <h4 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">{resumeItems[selected].title}</h4>
                <p className="text-sm text-white/60 mb-4">{resumeItems[selected].date}</p>
                <Image
                  src={resumeItems[selected].image}
                  alt={resumeItems[selected].title}
                  width={100}
                  height={100}
                  className="rounded-lg mb-4 object-contain"
                />
                <ul className="list-disc list-inside space-y-2 text-white/80 text-sm lg:text-base">
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