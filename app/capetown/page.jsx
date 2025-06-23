"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slideshowImages = [
  "/assets/capetown/ha.jpg",
  "/assets/capetown/hillview1.jpg",
  "/assets/capetown/DUT2.jpg",
  "/assets/capetown/soccer.jpg",
  "/assets/capetown/view.jpg",
];

export default function CapeTownPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 md:px-12 text-white bg-primary">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* Slideshow Hero */}
        <div className="relative w-full h-72 md:h-[450px] overflow-hidden rounded-3xl shadow-lg">
          {slideshowImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">HouseAudit – Built for Housing Assembly</h1>
          <p className="text-white/90 leading-relaxed">
            HouseAudit is a secure, role-based web app built for Housing Assembly—a grassroots
            organization in Cape Town. It digitizes paper audits submitted by residents applying for
            government housing, helping expose corruption and build a transparent legal record.
          </p>
        </motion.section>

        {/* About Housing Assembly */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">What is Housing Assembly?</h2>
          <p className="text-white/80 leading-relaxed">
            The Housing Assembly is a social movement representing over 20 communities in the Western Cape, South Africa. 
            Since 2009, they have been fighting for housing justice and dignity for all. They work alongside residents living in 
            informal settlements, backyards, temporary relocation areas, rental stock, and poorly built RDP housing to demand real 
            solutions to housing inequality. 
            <br /><br />
            Their movement also mobilizes around broader human rights issues, including access to 
            water and basic services, recognizing that housing is more than just a structure—it is the foundation of a dignified life.
          </p>
        </section>

        {/* The Problem */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">What's happening?</h2>
            <p className="text-white/80 leading-relaxed">
              During the apartheid era, the South African government enforced a system of racial segregation that denied many people access to basic rights, including housing.
              Many were forcibly relocated to the outskirts of cities, where they lived in overcrowded and unsafe conditions with little hope of improvement. These eventually became informal settlements. 
              <br /><br />
              Although the apartheid system officially ended in 1994, its legacy continues to impact communities today. Many people currently live in these informal settlements and still lack essential services like water and sanitation.
              <br /><br />
              While the government has made promises to address these issues, progress has been slow, corrupt, and many communities continue to struggle.
              <br /><br />
              The Housing Assembly works to confront these challenges by advocating for fair housing policies and holding the government accountable. They are currently preparing a class action lawsuit against the South African government for its failure to provide adequate housing to its citizens. 
              <br /><br />
              On-site, they have collected thousands of paper-based audits, but building a strong legal case requires demonstrating the scale and systemic injustice of the problem.
              <br /><br />
              That’s where HouseAudit comes in.
            </p>
        </section>

        {/* Contribution */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Contribution</h2>
          <p className="text-white/90 leading-relaxed">
            We built HouseAudit using the MERN stack to digitize audits, protect sensitive data, and provide
            real-time statistics. This empowers Housing Assembly to take legal action using verified audit trails.
            <br /><br />
            Before HouseAudit, these audits were stored in filing cabinets, making them difficult to analyze or use effectively. Now, the platform can securely store up to 600,000 audits in a structured and searchable digital format.
              
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>MongoDB, Express.js, React.js, Node.js (MERN stack)</li>
            <li>Authentication with JWT & bcrypt</li>
            <li>Tailwind CSS for styling</li>
            <li>Frontend hosted on Vercel, Backend on Render</li>
          </ul>
          <img
            src="/assets/capetown/audit_cap_ARCHITECTURE.png"
            alt="Architecture Diagram"
            className="mt-4 rounded-xl shadow-lg w-full max-h-[400px] object-contain"
          />
        </section>

        {/* Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Links</h2>
          <p className="text-white/90">
            🔗{" "}
            <a
              href="https://housingassemblyaudit.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              View the live site here
            </a>
          </p>
        </section>

        {/* Reflection */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Cape Town Reflection</h2>
          <p className="text-white/90 leading-relaxed">
            Cape Town gave me more than just a project—it gave me perspective. From hiking Lion’s Head to
            connecting with students at DUT and high schoolers in Hillview, every experience taught me something
            new about community, struggle, and resilience.
          </p>
        </section>
      </div>
    </div>
  );
}
