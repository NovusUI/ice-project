import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  path: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title,path }) => {

  const navigate = useNavigate()
  return (
    <div className="relative group rounded-[20px] md:rounded-[30px] overflow-hidden cursor-pointer md:h-[450px]" onClick={()=>navigate("/project/"+path)}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-500 ease-in-out"
      />
       {/* Overlay title only on medium and up */}
       <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 items-center justify-center">
          <p className="text-white text-base font-semibold text-center px-2">{title}</p>
        </div>
        <div className="flex md:hidden absolute inset-0  transition duration-300 items-center justify-center">
          <p className="text-white text-2xl font-semibold text-center px-2">{title}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
