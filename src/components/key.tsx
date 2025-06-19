"use client";
import React from "react";
import { motion } from "framer-motion";

interface KeyboardKeyProps {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ children, isActive, className }) => {
  return (
    <motion.span
      animate={{
        backgroundColor: isActive ? "#000" : "#f3f4f6", 
        color: isActive ? "#fff" : "#1f2937", 
        scale: isActive ? 0.95 : 1,
      }}
      transition={{ duration: 0.3 }}
      className={`
        inline-flex items-center justify-center
        min-w-[15px] h-[30px]
        px-3 py-1
        text-base font-semibold
        border border-gray-300 dark:border-gray-600
        rounded-md
        shadow-inner shadow-gray-400 dark:shadow-black
        hover:shadow-md
        transition-all duration-150
        ${className || ""}
      `}
    >
      {children}
    </motion.span>
  );
};

export default KeyboardKey;
