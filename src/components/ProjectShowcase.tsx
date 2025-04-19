// components/ProjectShowcase.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import AnimatedBtn from './buttons/AnimatedBtn';

interface ProjectShowcaseProps {
  backgroundImages: string[]; // multiple images
  interval?: number; // optional interval between transitions (ms)
  header:string;
  isButton?:boolean;
  body?:string;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  backgroundImages,
  interval = 5000, // default to 5 seconds
  header,
  isButton=false,
  body
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [backgroundImages.length, interval]);

  return (
    <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImages[current]}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[current]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 p-8 md:px-32 md:py-16  text-white text-left">
      <motion.h2
  className="relative text-4xl md:text-6xl font-bold leading-tight text-white mb-10 capitalize"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false, amount: 0.5 }}
>{header}
</motion.h2>
       {body && <p className="text-sm md:text-base mb-6">
          {body}
        </p>}
        {isButton && <AnimatedBtn text='Learn more'/>}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </section>
  );
};
