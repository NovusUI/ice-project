import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  path: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, path }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative group rounded-[20px] md:rounded-[30px] overflow-hidden cursor-pointer md:h-[450px]"
      onClick={() => navigate("/project/" + path)}
      whileTap="tap"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        tap: { scale: 0.97 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transition-all duration-500 ease-in-out"
      />

      {/* Title Reveal: tap (Framer) and hover (Tailwind) */}
      <motion.div
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
        whileTap={{ opacity: 1, y: 0 }}
      >
        <p className="text-white text-xl md:text-2xl font-semibold text-center px-4">
          {title}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
