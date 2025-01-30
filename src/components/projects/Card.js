import React, { useState } from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ img, projectTitle, projectDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer drop-shadow-header"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {/* Project Image */}
      <img
        src={img}
        alt={projectTitle}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300"
      >
        <h2 className="text-xl font-bold mb-2 drop-shadow-header">{projectTitle}</h2>
        <p className="text-sm text-center">{projectDescription}</p>
      </motion.div>
    </div>
  );
};
export default ProjectCard

// export default Card<div><h1  className='text-[3.5rem] text-center font-bold text-white drop-shadow-header mt-10  pb-14'>Projects</h1></div>