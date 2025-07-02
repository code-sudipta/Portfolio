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
          className="w-full lg:w-2/5 order-1"
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
