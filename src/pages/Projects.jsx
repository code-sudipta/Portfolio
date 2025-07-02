import React from "react";
import ProjectCard from "../components/ProjectCard";
import virusvault from "../assets/virusvault.png";
import tomato from "../assets/tomato.png";
import houseinthewoods from "../assets/houseinthewoods.png";

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
      def: "An antivirus dekstop application made with respect to my final year project. Uses power of ML/AI in detecting evolving threats. Technologies used: Java, Python, AI, React, ElectronJS",
      sn: "01",
      title: "Virus Vault",
      style:
        "w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-center",
        href: "https://github.com/code-sudipta/virus-vault-final"
    },
    {
      img: tomato,
      def: "A user friendly todo app having sign up/sign in facility with good design and pic upload feature. Technologies used: Angular, Node.js",
      sn: "02",
      title: "Tomato Todo",
      style:
        "w-full flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:gap-8 items-center justify-center",
        href: "https://github.com/code-sudipta/angular-todo"
    },
    {
      img: houseinthewoods,
      def: "A website front-end for tours and travels that has attractive user interface and colors. Technologies used: HTML, CSS, JavaScript",
      sn: "03",
      title: "Tour and Travel Website",
      style:
        "w-full flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-center",
        href: "https://github.com/code-sudipta/house-in-the-woods"
    },
    {
      // img: virusvault,
      def: "A back-end application to convert speech into text, integrated with AI for voice recognition. Technologies used: Java, Springboot, Assembly AI API",
      sn: "04",
      title: "Speech To Text converter",
      style:
        "w-full flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:gap-8 items-center justify-center",
        href: "https://github.com/code-sudipta/speech-to-text"
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
            href={project.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
