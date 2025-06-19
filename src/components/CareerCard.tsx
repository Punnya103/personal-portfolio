import React from "react";

interface CareerCardProps {
  title: string;
  duration: string;
  description: string;
  width?: string;
  height?: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  duration,
  description,
  width = "w-full",
  height = "h-auto",
}) => {
  return (
    <div
      className={`relative ${width} ${height} rounded-2xl p-[2px] bg-gradient-to-r from-black via-white to-indigo-500 animate-border bg-[length:200%_200%] transition hover:scale-[1.05] duration-300`}
    >
      <div className="glass-card bg-[#000000] text-white rounded-2xl p-6 md:p-8 h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-4">{duration}</p>
        <p className="text-sm text-white/90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CareerCard;
