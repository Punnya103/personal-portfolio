"use client";
import React from "react";

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-center">
      <div className="absolute inset-0 top-[120px] section-wrapper flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="primary-indicator w-5 h-5 rounded-full" />
          <div className="primary-gradient-line" />
        </div>

        <div className="mt-10">
          <h1 className="section-heading text-white">
            Hi, I’m <span className="text-primary">Punnya Pradeep</span>
          </h1>
          <p className="section-subheading">
            Crafting modern, elegant solutions in web and mobile,
          </p>
        </div>

      </div>
    </section>
  );
}; 


export default HeroPage;
