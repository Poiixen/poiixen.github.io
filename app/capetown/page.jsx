"use client";

import { useEffect, useState } from "react";

const images = [
  "/assets/capetown/slide1.jpg",
  "/assets/capetown/slide2.jpg",
  "/assets/capetown/slide3.jpg",
];

export default function CapeTownPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 text-white bg-primary">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-xl">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <section>
          <h1 className="text-4xl font-bold mb-4">
            HouseAudit – Built for Housing Assembly
          </h1>
          <p className="text-lg text-white/90">
            Developed by the Audit Avengers, HouseAudit is a secure, role-based web app built to digitize,
            store, and analyze housing audit data for the Housing Assembly, a grassroots organization
            in Cape Town. The system aims to uncover housing corruption and provide transparent,
            searchable records for legal use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Problem</h2>
          <p className="text-white/80">
            South Africa’s housing waitlist system has been marred by corruption, favoritism, and disorganized
            paper records. Applicants often wait decades while others receive homes in months. Housing
            Assembly collects thousands of audits, but without a digital system, these critical documents
            risk being lost, damaged, or inaccessible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Contribution</h2>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Full-stack MERN app with secure login and role-based access</li>
            <li>OCR support to digitize handwritten audit forms</li>
            <li>Admin dashboard for uploading, managing, and exporting data</li>
            <li>Responsive public interface for audit lookup and housing projects</li>
            <li>CSV export to handle MongoDB size limits without added cost</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-white/80">
            Built with MongoDB, Express.js, React.js, and Node.js. Auth secured with JWT and bcrypt. Frontend
            styled with Tailwind CSS. Hosted on Vercel (frontend) and Render (backend).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Links</h2>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>
              🔗 <a href="https://audit-team-frontend.vercel.app/" target="_blank" rel="noreferrer" className="underline">Live Site</a>
            </li>
            <li>
              💻 <a href="https://github.com/HousingAssembly/Audit-Team" target="_blank" rel="noreferrer" className="underline">GitHub Repo</a>
            </li>
            <li>
              ▶️ <a href="https://youtu.be/S1odI6prcEo" target="_blank" rel="noreferrer" className="underline">YouTube Tutorial</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
