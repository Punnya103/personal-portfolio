'use client';

import CareerCard from '@/components/CareerCard';
import { useIsMobile } from './responsive/mobilers';

const experiences = [
  {
    title: "Associate Developer",
    duration: "June 2024 – June 2025",
    description:
      "Worked as a React Native Developer at Woxro Technologies. 1 year of hands-on experience in live projects using both Expo and CLI. Integrated NativeWind CSS and published Android apps to the Play Store.",
  },
  {
    title: "Apprenticeship - React Native Developer",
    duration: "Jan 2024 – May 2024",
    description:
      "Completed apprenticeship focused on React Native development. Built cross-platform apps, collaborated in Agile teams, and contributed to real-world UI/UX improvements.",
  },
  {
    title: "Internship - Web Development (Keltron)",
    duration: "June 2023 – August 2023",
    description:
      "Interned at Keltron, where I worked on responsive web development using HTML, CSS, JS, and basic backend integration. Gained industry-level exposure and team collaboration experience.",
  },
  {
    title: "App Development - Android",
    duration: "2022",
    description:
      "Designed and developed a native Android application as a capstone academic project. Focused on UI/UX and backend data handling using Firebase.",
  },
];

const CareerPage = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="w-full min-h-screen px-4 py-10 text-white bg-[#0f0f1a]">
        {/* <h2 className="text-2xl font-bold mb-6 text-center">Career Highlights</h2> */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <CareerCard key={idx} {...exp} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen px-6 py-16 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12">Career Timeline</h2>

      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10">

        {/* <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 transform -translate-x-1/2 z-0" /> */}

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex justify-center z-10 px-4">
            <CareerCard
              {...exp}
              width="w-[500px]"
              height="h-[300px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPage;
