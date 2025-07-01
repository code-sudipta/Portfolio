import React from "react";
import ProjectCard from "../components/ProjectCard";
import virusvault from "../assets/virusvault.png";
import { motion } from "motion/react";

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const projectsData = [
    {
      img: virusvault,
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima harum ea, qui omnis esse quos eos vel distinctio commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores soluta architecto nostrum atque iste inventore nam natus et, voluptatum quis fugiat, ratione eius animi! Cum quis assumenda ipsum mollitia, similique modi nobis vitae dolorem ab corrupti soluta animi itaque.",
      sn: "01",
      title: "Crypto Screen Application",
      style:
        "w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-center",
    },
    {
      img: virusvault,
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima harum ea, qui omnis esse quos eos vel distinctio commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores soluta architecto nostrum atque iste inventore nam natus et, voluptatum quis fugiat, ratione eius animi! Cum quis assumenda ipsum mollitia, similique modi nobis vitae dolorem ab corrupti soluta animi itaque.",
      sn: "02",
      title: "Portfolio Website",
      style:
        "w-full flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:gap-8 items-center justify-center",
    },
    {
      img: virusvault,
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima harum ea, qui omnis esse quos eos vel distinctio commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores soluta architecto nostrum atque iste inventore nam natus et, voluptatum quis fugiat, ratione eius animi! Cum quis assumenda ipsum mollitia, similique modi nobis vitae dolorem ab corrupti soluta animi itaque.",
      sn: "03",
      title: "E-commerce Platform",
      style:
        "w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-center",
    },
    {
      img: virusvault,
      def: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima harum ea, qui omnis esse quos eos vel distinctio commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores soluta architecto nostrum atque iste inventore nam natus et, voluptatum quis fugiat, ratione eius animi! Cum quis assumenda ipsum mollitia, similique modi nobis vitae dolorem ab corrupti soluta animi itaque.",
      sn: "04",
      title: "Task Management App",
      style:
        "w-full flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:gap-8 items-center justify-center",
    },
  ];
  return (
    <motion.div
      className="px-4 md:px-12 lg:px-24 py-10 gap-8 md:gap-12 lg:gap-14 flex flex-col justify-center items-center w-full overflow-hidden relative"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Floating elements for background effect */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-15"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-3 h-3 bg-green-500 rounded-full opacity-25"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      />
      <motion.div
        className="absolute top-10 right-32 w-5 h-5 bg-purple-400 rounded-full opacity-20"
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-10 left-16 w-4 h-4 bg-pink-500 rounded-full opacity-25"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-30"
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-cyan-400 rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-[70%] left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-15"
        animate={{
          y: [0, 10, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Circle */}
      <motion.div
        className="absolute top-8 left-8 w-4 h-4 bg-pink-500 rounded-full opacity-25"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Square */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-5 h-5 bg-yellow-400 rounded-2xl opacity-20"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      {/* Triangle using clip-path */}
      <motion.div
        className="absolute bottom-24 right-16 w-6 h-6 bg-green-500 opacity-20"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blob (random shape) */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-10 bg-purple-400 opacity-15"
        style={{
          borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%",
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Oval */}
      <motion.div
        className="absolute bottom-12 left-20 w-10 h-5 bg-blue-400 rounded-full opacity-20"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <div className="h-5"></div>
      <motion.h1
        className="text-3xl md:text-4xl w-fit text-center"
        variants={titleVariants}
      >
        <span className="underline decoration-[var(--primary)] decoration-4 underline-offset-2">
          My
        </span>{" "}
        <span className="font-bold">Projects</span>
      </motion.h1>

      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          variants={projectCardVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            img={project.img}
            def={project.def}
            sn={project.sn}
            title={project.title}
            style={project.style}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
