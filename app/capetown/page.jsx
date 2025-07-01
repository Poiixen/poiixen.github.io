"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            <Image
              key={i}
              src={src}
              alt={`Slide ${i}`}
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ position: "absolute" }}
              sizes="100vw"
              priority={i === 0}
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
          <h2 className="text-2xl font-semibold mb-2">What&apos;s happening?</h2>
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
            That&apos;s where HouseAudit comes in.
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
          <Image
            src="/assets/capetown/audit_cap_ARCHITECTURE.png"
            alt="Architecture Diagram"
            width={1000}
            height={400}
            className="mt-4 rounded-xl shadow-lg w-full object-contain max-h-[400px]"
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
            Cape Town gave me more than just a project—it gave me perspective. From the very beginning, it was clear this
            experience would be more than the internship project itself. Yes, we built a platform to fight housing injustice but the
            memories that shaped me most came from the people, the places, and the stories I encountered along the way.
            <br /><br />
            We hiked Lion&apos;s Head before sunrise, stood at the top as the sky lit up over the city, and later explored
            Table Mountain and Signal Hill. We walked through colorful Bo-Kaap, visited the District Six Museum, and saw
            the scars apartheid left behind. We listened to stories from a former political prisoner, Lionel Davis, who shared what 
            it meant to be exiled on your own land. That moment stayed with me.
            <br /><br />
            In our free time, we went to the V&A Waterfront and wandered through local artisan markets. We tried traditional 
            South African food—braai, bunny chow, pap, smileys, koeksisters and danced with locals
            in township streets, letting go of every inhibition. There were evenings where strangers became friends over shared meals,
            music, and laughter that echoed into the night.
            <br /><br />
            Outside of Cape Town, we traveled to Durban, where we visited Durban University of Technology and spoke with students across
            middle, and high schools. Sharing our journey with them and hearing theirs was deeply meaningful. I think we were able to inspire 
            these students as well! But their energy, curiosity, and ambition reminded me why global connection matters. We weren’t just showing up as visitors, 
            but as students learning, too.
            <br /><br />
            We ended our journey in St. Lucia, where we went on safari drives through iSimangaliso Wetland Park, spotting giraffes,
            zebras, and rhinos in the wild. We took a boat ride to see hippos and crocodiles drifting lazily through the water,
            and cooled off at the beach after days of travel. Every day brought something new, from wildlife encounters to
            spontaneous dance battles to deep conversations that challenged how I see the world.
            <br /><br />
            These weren’t just tourist attractions they were parts of a story. A story that I feel
            incredibly privileged to have stepped into, even briefly. Through it all, I grew as a developer but also as a person.
            I saw firsthand how culture, history, and community all inform the problems we aim to solve with technology.
            <br /><br />
            Of course, none of this would’ve been the same without the people I shared it with. I was lucky to be surrounded by an incredible group of UF students who were also part of the program—each one talented, thoughtful, and driven in their own way. Whether we were troubleshooting bugs, sharing stories on long van rides, or laughing over dinner after a long day, these people became more than just teammates—they became some of the closest friends I’ve made in college. The bond we built through this journey is something I’ll carry with me long after the project is over.
            <br /><br />
            Cape Town reminded me that building impactful tech isn&apos;t just about the architecture of your codebase, but about
            understanding the people you&apos;re building for. And in between the projects, the hikes, the safaris, and the dance floors,
            I found something that’ll stick with me forever: a deeper sense of empathy, and a drive to keep showing up for others.
          </p>
        </section>

      </div>
    </div>
  );
}
