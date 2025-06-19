"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-12">
    
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 w-full">
        
       
        <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/about3.png"
            alt="About"
            fill
            className="object-cover"
          />
        </div>

   
        <div className="w-full md:w-1/2 p-6 md:p-8 rounded-2xl  text-left">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6 text-center">
            About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed text-center">
            I’m a <b>React Native Developer</b> with hands-on experience building real-world apps. My enthusiasm for evolving technologies led me to explore <b>React</b>, <b>Next.js</b>, and <b>Flutter</b> . I’m a quick learner, adaptive team player, and passionate about crafting clean, scalable, and user-centric applications. I’m also familiar with <b>Git</b> for version control and <b>Figma</b> for UI/UX design collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
