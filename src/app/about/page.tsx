"use client";
import KeyboardKey from "@/components/key";
import Image from "next/image";


const AboutSection = () => {
  const wordToKeys = (word: string) =>
  word.split("").map((char, idx) => (
    <KeyboardKey key={idx}>{char === " " ? "\u00A0" : char}</KeyboardKey>
  ));
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 w-full">
    
        <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/about3.png"
            alt="About"
            fill
            className="object-cover"
          />
        </div>

      
<div className="w-full md:w-1/2 p-6 md:p-8 rounded-2xl text-left">
  <h2 className="text-3xl font-bold text-black dark:text-white mb-6 text-center">
    About Me
  </h2>

  <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed text-center flex flex-wrap justify-center gap-1">
    {wordToKeys("ReactNative Developer")} with hands-on experience building real-world apps.
    My enthusiasm for evolving technologies led me to explore{" "}
    <span className="inline-flex gap-1">{wordToKeys("React")}</span>{" "}
    <span className="inline-flex gap-1">{wordToKeys("Nextjs&")}</span>{" "}
    <span className="inline-flex gap-1">{wordToKeys("Flutter")}</span>I’m a quick learner,
    adaptive team player, and passionate about crafting clean, scalable, and user-centric
    applications.
  </p>


  <div className="flex justify-center mt-4 mb-1">
    <div className="inline-flex gap-1">{wordToKeys("Git")}</div>
  </div>


  <div className="flex justify-center mt-2 md:hidden">
    <div className="inline-flex gap-1">{wordToKeys("Figma")}</div>
  </div>

  <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed text-center mt-1">
    for version control and UI/UX design collaboration.
  </p>
</div>
      </div>
    </section>
  );
};

export default AboutSection;
