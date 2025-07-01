import React from "react";
import banner from "../assets/banner.svg";
import { Timeline } from "primereact/timeline";
import { motion } from "motion/react";
import { desc } from "motion/react-client";

const About = () => {
  const events = [
    {
      status: "Gargi Memorial Institute of Technology, Kolkata",
      date: "August 2021 to July 2025, College",
      color: "orange",
      description: "B. Tech. in Computer Science and Engineering",
    },
    {
      status: "Modern Academy Inter College, Lucknow",
      date: "2011 to 2020",
      color: "orange",
      description: "School",
    },
    {
      status: "Rosary School, Pune",
      date: "2006 to 2010, School",
      color: "orange",
      description: "School",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const educationTitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      className="px-4 md:px-12 lg:px-24 pt-10 flex flex-col justify-center items-center w-full overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // id="about"
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
      <motion.h1
        className="text-3xl md:text-4xl w-fit"
        variants={titleVariants}
      >
        <span className=" underline decoration-[var(--primary)] decoration-4 underline-offset-2">
          About
        </span>{" "}
        <span className="font-bold">Me</span>
      </motion.h1>

      <motion.div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-4 w-full items-center">
        <motion.div
          className="w-full lg:w-1/2 order-1"
          variants={imageVariants}
        >
          <motion.img
            src={banner}
            className="w-full max-w-md mx-auto lg:max-w-full"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="w-full mt-4 lg:w-1/2 flex flex-col gap-4 px-0 lg:px-4 order-1 lg:order-2"
          variants={contentVariants}
        >
          <motion.p
            className="text-sm md:text-base leading-relaxed"
            variants={paragraphVariants}
          >
            I'm a passionate, self-proclaimed designer who specializes in front
            end development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </motion.p>
          <motion.p
            className="text-sm md:text-base leading-relaxed"
            variants={paragraphVariants}
          >
            I began my journey as a computer science student in 2018, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early twenties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as React.js, TypeScript, Nodejs, Tailwindcss,
            Java and much more.
          </motion.p>
          <motion.h1
            className="text-xl md:text-2xl my-4 font-semibold border-b-4 border-[var(--primary)] w-fit"
            variants={educationTitleVariants}
          >
            Education
          </motion.h1>
          <motion.div className="overflow-x-auto" variants={timelineVariants}>
            <Timeline
              align="alternate"
              value={events}
              opposite={(item) => (
                <div className="px-2 md:px-4 text-sm md:text-base">
                  {item.status}
                </div>
              )}
              content={(item) => (
                <div className="ml-2 md:ml-4 px-2 md:px-4 rounded-md">
                  <p className="text-sm md:text-sm">{item.description}</p>
                  <p className="text-xs md:text-xs">{item.date}</p>
                </div>
              )}
              marker={(item) => (
                <span
                  className="w-3 h-3 md:w-4 md:h-4 inline-block rounded-full mt-2"
                  style={{
                    border: `2px solid ${item.color}`,
                    backgroundColor: item.color,
                  }}
                ></span>
              )}
              className="raleway-family"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
