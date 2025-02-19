import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ img, projectTitle, projectDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative w-full max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 0.5 }} // Animation duration
    >
      {/* Project Image */}
      <motion.img
        src={img}
        alt={projectTitle}
         loading='lazy'
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        whileHover={{ scale: 1.1 }} // Scale up image on hover
      />

      {/* Hover Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300"
      >
        <motion.h2
          className="text-xl font-bold mb-2 drop-shadow-header"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {projectTitle}
        </motion.h2>
        <motion.p
          className="text-sm text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ delay: 0.4 }}
        >
          {projectDescription}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;