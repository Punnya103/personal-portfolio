"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import Model from "./../../components/space";
import CanvasLoader from "./../../components/CanvasLoader";
import AnimatedName from "@/components/AnimatedName";


const HeroPage = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-10 md:gap-16 w-full">

               <div className="w-full h-[400px] md:w-[600px] md:h-[600px] mt-12 md:mt-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <directionalLight position={[2, 2, 5]} intensity={1.5} />
            <OrbitControls enableZoom={true} enablePan={false} enableRotate />
            <Sparkles
              count={100}
              scale={5}
              size={2}
              speed={0.5}
              color="white"
            />
            <Suspense fallback={<CanvasLoader />}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
        <div className="flex flex-col md:items-start md:justify-start md:mt-25">
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-primary" />
              <div className="w-1 h-40 bg-gradient-to-b from-primary to-transparent mt-1" />
            </div>
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col md:text-left"
              >
                <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight flex flex-wrap gap-1 items-center">
                  Hi, I’m<AnimatedName />
                </h1>

                <p className="text-white/80 text-sm mt-2 max-w-md">
                  Crafting modern, elegant solutions in web and mobile.
                </p>
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex gap-4"
                >
                  <a
                    href="#contact"
                    className="px-5 py-2 bg-primary text-white rounded-lg font-semibold shadow-md hover:bg-primary/80 transition"
                  >
                    Contact Me
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-5 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

 
      </div>
    </section>
  );
};

export default HeroPage;
