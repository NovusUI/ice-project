import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBtn from './buttons/AnimatedBtn';

interface ProjectShowcaseProps {
  backgroundImages: string[];
  interval?: number;
  header: string;
  isButton?: boolean;
  body?: string;
  onClick?: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  backgroundImages,
  interval = 5000,
  header,
  isButton = false,
  body,
  onClick,
}) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [current, backgroundImages.length, interval]);

  return (
    <section className="relative w-full h-[90vh] flex items-end justify-start overflow-hidden">
      {/* Previous image fading out with grayscale */}
      <AnimatePresence>
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${backgroundImages[prev]})`,
              filter: 'grayscale(100%)',
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Current image fading in */}
      <motion.div
        key={`current-${current}`}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImages[current]})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 p-8 md:px-32 md:py-16 text-white text-left">
        <motion.h2
          className="text-4xl md:text-6xl font-bold leading-tight text-white mb-10 capitalize "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {header}
        </motion.h2>
        {body && <p className="text-sm md:text-base mb-6">{body}</p>}
        {isButton && <AnimatedBtn text="Learn more" onClick={onClick} />}
      </div>
    </section>
  );
};
