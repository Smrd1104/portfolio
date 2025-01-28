import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ img, projectTitle, projectDescription }) => {
  return (
    <div className="group  relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer drop-shadow-header">
      {/* Project Image */}
      <img
        src={img}
        alt={projectTitle}
        className="w-full h-64  object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Details */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <h2 className="text-xl font-bold mb-2 drop-shadow-header">{projectTitle}</h2>
        <p className="text-sm text-center">{projectDescription}</p>
      </motion.div>
    </div>
  );
};
export default ProjectCard

// export default Card<div><h1  className='text-[3.5rem] text-center font-bold text-white drop-shadow-header mt-10  pb-14'>Projects</h1></div>