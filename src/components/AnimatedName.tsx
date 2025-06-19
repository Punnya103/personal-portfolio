"use client";
import React, { useEffect, useState } from "react";
import KeyboardKey from "./key";

const letters = ["P", "U", "N", "N", "Y", "A"];

const AnimatedName = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActiveIndex(i);
      i = (i + 1) % letters.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="flex gap-1 ml-2">
      {letters.map((char, index) => (
        <KeyboardKey key={index} isActive={activeIndex === index}>
          {char}
        </KeyboardKey>
      ))}
    </span>
  );
};

export default AnimatedName;
