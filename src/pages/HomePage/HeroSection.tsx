// components/HeroSection.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBtn from '../../components/buttons/AnimatedBtn';
import { useNavigate } from 'react-router-dom';

const backgroundImages = [
  '/heroimg.jpg', // Replace with your actual image URLs
  '/heroimg1.jpg',
  '/heroimg2.jpg',
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={backgroundImages[current]}
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
      <motion.h1
  className="relative text-4xl md:text-6xl font-bold leading-tight text-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false, amount: 0.5 }}
>
  <span className="relative inline-block overflow-hidden">
    <span className="block">Elevating Spaces,</span>
    <span className="block">Defining Legacies</span>
    {/* Shimmer effect layer */}
    <span className="absolute left-0 top-0 h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100" />
  </span>
</motion.h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-gray-200">
          Crafting bespoke architectural solutions that blend innovation, elegance, and functionality
        </p>
        <AnimatedBtn text='Learn more' onClick={()=>navigate("/expertise")} />
      </div>
    </div>
  );
};

export default HeroSection;
