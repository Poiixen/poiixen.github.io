"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const resumeItems = [
  {
    company: "Housing Assembly, EDU Africa",
    role: "Project Manager, Software Engineer",
    date: "Jul 2024 - Oct 2024",
    image: "/assets/orgs/housingassembly/logo.png",
    videoSrc: "/assets/housing-demo.mp4", // Added video source for demonstration
    bullets: [
      "Built a full-stack management platform using MERN stack to CRUD 300+ housing allocation records, strengthening the legal foundation for a class action lawsuit against corruption in South Africa’s governmental housing waitlist",
      "Reduced manual audit entry time by 60% with OCR.",
      "Secured sensitive data with JWT + bcrypt.",
    ],
    details: (
      <div className="space-y-4">
        <p>
          During my time at Housing Assembly, I led the development of a MERN-based audit platform that allowed organizers to log, search, and analyze over 300 housing allocation records tied to corruption investigations.
        </p>
        <p>
          I engineered an OCR pipeline using Python and Tesseract.js that could process scanned audit forms and auto-extract key information, reducing workload for field officers.
        </p>
        <Image
          src={ "/assets/orgs/housingassembly/logo.png" }
          alt="Housing Audit Platform"
          width={600}
          height={300}
          className="rounded-lg"
        />
        <p>
          I also conducted workshops with EDU Africa leadership and implemented role-based admin access to ensure data security throughout the platform.
        </p>
        <video controls className="w-full rounded-lg">
          { "/assets/housing-demo.mp4" ? (
            <source src="/assets/housing-demo.mp4" type="video/mp4" />
          ) : (
            <p>Your browser does not support the video tag.</p>
          )}
        </video>
      </div>
    )
  },
    {
    company: "Codepath",
    role: "Teaching Assistant/Tech Fellow",
    date: "Jan 2025 - April 2025",
    image: "/assets/orgs/housingassembly/logo.png",
    bullets: [
      "Mentored and guided 100+ CodePath students to facilitate the understanding of fundamental computer science topics, ensuring successful course completion.",
      "Resolved technical issues and software-related queries during labs and independent study sessions to ensure a smooth learning experience."
    ],
  },
  {
    company: "Headstarter AI",
    role: "Software Engineer Fellow",
    date: "Jul 2024 - Oct 2024",
    image: "/assets/orgs/theheadstarter_logo.jpeg",
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
    image: "/assets/orgs/code2040.png",
    bullets: [
      "Career accelerator for Black and Latine CS students.",
      "Focused on equity advocacy, workshops, and networking.",
    ],
  },
];

export default function Resume() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="min-h-screen py-16 text-white mb-24">
      <h2 className="text-4xl font-bold mb-12 text-center max-w-7xl mx-auto px-4">
        Experiences
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col gap-4 w-full lg:w-[610px]">
          {resumeItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-4 text-left p-4 border rounded-lg transition hover:bg-zinc-800/40 w-full ${
                selected === i ? "border-accent text-accent bg-zinc-800/60" : "border-white/20"
              }`}
            >
              <Image
                src={item.image}
                alt={item.company}
                width={32}
                height={32}
                className="rounded object-contain shrink-0"
              />
              <div className="flex flex-col min-w-0">
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

        <div className="relative w-full border rounded-xl border-white/20 bg-[#232329] px-8 py-12">
          <AnimatePresence mode="sync">
            {selected !== null && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold leading-tight">
                      {resumeItems[selected].role}
                    </h4>
                    <p className="text-sm lg:text-base text-white/70">
                      {resumeItems[selected].company}
                    </p>
                    <p className="text-sm text-white/60">{resumeItems[selected].date}</p>
                  </div>
                  <Image
                    src={resumeItems[selected].image || null}
                    alt={resumeItems[selected].company}
                    width={80}
                    height={80}
                    className="rounded-lg object-contain shrink-0"
                  />
                </div>

                {expanded && resumeItems[selected].details ? (
                  <div className="mt-6 text-white/90 text-sm lg:text-base">
                    {resumeItems[selected].details}
                  </div>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-white/80 text-sm lg:text-base w-full">
                    {resumeItems[selected].bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {selected !== null && resumeItems[selected].details && (
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              {!expanded ? (
                <button
                  onClick={() => setExpanded(true)}
                  className="text-accent underline hover:opacity-80 transition text-sm"
                >
                  Read More
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setExpanded(false);
                      sectionRef.current?.scrollIntoView();
                    }}
                    className="text-accent underline hover:opacity-80 transition text-sm"
                  >
                    Show Less
                  </button>

                  {resumeItems[selected].company === "Housing Assembly, EDU Africa" && (
                    <a
                      href="/capetown"
                      className="text-sm font-semibold bg-accent text-black px-4 py-2 rounded-lg hover:opacity-90 transition"
                    >
                      Learn even more!
                    </a>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
