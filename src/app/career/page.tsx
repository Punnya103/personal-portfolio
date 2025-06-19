'use client';
import React from 'react';

const CarrerPage = () => {
  return (
    <section className="w-full min-h-screen flex  justify-center px-4 md:px-12 pt-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-around relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pt-12">
          <div className="w-3 h-3 bg-white rounded-full mx-auto"/>
          <div className="w-1 h-[500px] bg-gradient-to-b from-white/80 to-transparent mx-auto mt-1" />
        </div>
      </div>
    </section>
  );
};

export default CarrerPage;
