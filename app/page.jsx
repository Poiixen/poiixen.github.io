import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import "./globals.css";

// import components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from 'next/link';

import Resume from "./resume/page";
import Work from "./projects/page";
import Contact from "./contact/page";
import About from "./about/page";

const Home = () => {
  return (
    <section
      className="h-full"
      style={{
        transform: "scale(0.85)",
        transformOrigin: "top center",
      }}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-6">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I&apos;m <br /> <span className="text-accent">Jorge Garcia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I code n stuff, check it out!
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1sH-EY7Z2GDS27AEAJsfIiq4qn1WTcLbL/view?usp=sharing">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-9 h-9 border 
                  border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-250"
                />
              </div>
            </div>
          </div>

          {/* image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      {/* Resume Section */}
      <section id="resume" className="h-screen flex flex-col justify-center items-center mt-40 mb-80">
        <Resume />
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen mx-auto flex flex-col justify-center items-center mb-10">
        <Work />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex flex-col justify-center items-center">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center">
        <Contact />
      </section>
    </section>
  );
};

export default Home;
