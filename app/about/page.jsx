'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [expandedSections, setExpandedSections] = useState({
    languages: false,
    technologies: false,
    frameworks: false,
    spokenLanguages: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-white p-8 pt-0 -mt-20 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 w-full mb-12">

        {/* Left Column - Photo Collage */}
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-4">
            {/* Large photo - top left */}
            <div className="col-span-2 row-span-2 relative h-64 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center text-accent/40 text-sm">
                TODO: photo
              </div>
              {/* <Image src="/path-to-your-photo.jpg" alt="Jorge Garcia" fill className="object-cover" /> */}
            </div>

            {/* Small photo - bottom left */}
            <div className="relative h-32 bg-gradient-to-br from-blue-500/20 to-accent/20 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center text-accent/40 text-xs text-center px-2">
                Guitar
              </div>
              {/* <Image src="/path-to-guitar-photo.jpg" alt="Playing guitar" fill className="object-cover" /> */}
            </div>

            {/* Small photo - bottom right */}
            <div className="relative h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center text-accent/40 text-xs text-center px-2">
                Skating
              </div>
              {/* <Image src="/path-to-skating-photo.jpg" alt="Skateboarding" fill className="object-cover" /> */}
            </div>
          </div>
        </div>

        {/* Middle & Right Columns - Content */}
        <div className="lg:col-span-2 flex flex-col gap-8">

          {/* Bio */}
          <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-accent/10">
            <p className="text-md text-gray-300 leading-relaxed">
              Hi, I&apos;m <span className="text-accent font-semibold">Jorge Garcia</span>, or <span className="text-accent font-semibold">Tito</span>, a passionate driven computer science student 
              eager to work on projects that benefit underrepresented communities. <br /><br /> My character is defined by quality-oriented work and a strong determination to make a meaningful impact.
            </p>
          </div>

          {/* Interests Grid */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-accent">Interests & Hobbies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-accent">Technology</h3>
                <p className="text-gray-300 text-sm">
                  Exploring new technologies, contributing to open-source projects, and learning about AI and machine learning.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-accent">Music</h3>
                <p className="text-gray-300 text-sm">
                  Passionate guitar player with an album on YouTube. Music is my creative outlet beyond code.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-accent">Sports!</h3>
                  <p className="text-gray-300 text-sm">
                    Outside of work, you can find me skateboarding around campus or training with UF's competitive boxing team.
                  </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-accent">Creative Projects</h3>
                <p className="text-gray-300 text-sm">
                  Combining technical skills with creative pursuits—building applications and producing music.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-accent">Technical Skills</h2>

            <div className="space-y-3">
              {/* Programming Languages */}
              <div className="bg-gray-800/30 rounded-lg backdrop-blur-sm border border-accent/10">
                <button
                  onClick={() => toggleSection('languages')}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50 transition-all rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-200">Programming Languages</h3>
                  <span className="text-accent text-xl">{expandedSections.languages ? '−' : '+'}</span>
                </button>
                {expandedSections.languages && (
                  <div className="px-4 pb-4 pt-2 flex flex-wrap gap-2">
                    {['C++', 'Python', 'JavaScript', 'TypeScript', 'Dart', 'HTML', 'CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies & Tools */}
              <div className="bg-gray-800/30 rounded-lg backdrop-blur-sm border border-accent/10">
                <button
                  onClick={() => toggleSection('technologies')}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50 transition-all rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-200">Technologies & Tools</h3>
                  <span className="text-accent text-xl">{expandedSections.technologies ? '−' : '+'}</span>
                </button>
                {expandedSections.technologies && (
                  <div className="px-4 pb-4 pt-2 flex flex-wrap gap-2">
                    {['MongoDB', 'Firebase', 'Firestore', 'Vercel', 'Git', 'JWT', 'bcrypt'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Frameworks & Libraries */}
              <div className="bg-gray-800/30 rounded-lg backdrop-blur-sm border border-accent/10">
                <button
                  onClick={() => toggleSection('frameworks')}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50 transition-all rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-200">Frameworks & Libraries</h3>
                  <span className="text-accent text-xl">{expandedSections.frameworks ? '−' : '+'}</span>
                </button>
                {expandedSections.frameworks && (
                  <div className="px-4 pb-4 pt-2 flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'Express.js', 'Flutter', 'Tailwind CSS', 'TensorFlow', 'Scikit-learn', 'Mediapipe', 'Tesseract.js', 'Pickle', 'Llama API'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Languages */}
              <div className="bg-gray-800/30 rounded-lg backdrop-blur-sm border border-accent/10">
                <button
                  onClick={() => toggleSection('spokenLanguages')}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50 transition-all rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-200">Languages</h3>
                  <span className="text-accent text-xl">{expandedSections.spokenLanguages ? '−' : '+'}</span>
                </button>
                {expandedSections.spokenLanguages && (
                  <div className="px-4 pb-4 pt-2 flex flex-wrap gap-2">
                    {['English', 'Spanish', 'Portuguese', 'American Sign Language'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
