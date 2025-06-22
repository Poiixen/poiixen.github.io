import React from 'react';
import Image from 'next/image'; // Import Image if you're using Next.js

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col items-center mb-8">
        <p className="max-w-xl text-center">
          Hi, I&apos;m Jorge Garcia, a passionate software engineer with a knack for creating dynamic and user-friendly applications. I love problem-solving and continuously seek to improve my skills in technology.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Interests</h2>
      <p className="max-w-xl text-center mb-4">
        In my free time, I enjoy exploring new technologies, contributing to open-source projects, and learning about AI and machine learning.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside max-w-xl text-left">
        <li>JavaScript (React.js, Next.js)</li>
        <li>Python</li>
        <li>C++</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
        <li>Agile Methodologies</li>
      </ul>
    </section>
  );
};

export default About;
