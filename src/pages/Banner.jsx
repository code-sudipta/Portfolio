import React, { useRef, useState, useEffect } from "react";
import me from "../assets/me.png";
import { motion } from "motion/react";

const Banner = () => {
  const constraintsRef = useRef(null);

  // Enhanced animation variants with modern easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -60, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      rotate: -1440, // More rolling
      scale: 0.1,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
    hover: {
      scale: 1.4,
      y: -8,
      rotate: [0, -15, 15, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8,
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
          repeatType: "mirror",
        },
      },
    },
    tap: {
      scale: 0.8,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      rotate: -15,
      filter: "blur(20px)",
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };
  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col-reverse lg:flex-row xs:flex-col-reverse justify-center items-center min-h-screen gap-8 lg:gap-0 mt-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full lg:w-1/2 text-left relative"
        variants={textVariants}
      >
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-3xl blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="text-2xl sm:text-3xl md:text-4xl flex flex-col gap-2 relative z-10"
          variants={titleVariants}
        >
          <motion.div variants={lineVariants}>
            Hello I am <span className="font-bold">Sudipta Saha.</span>
          </motion.div>
          <motion.div variants={lineVariants}>
            <span className="font-bold gradient-text inline-block">
              Software Engineer
            </span>
          </motion.div>
          <motion.div variants={lineVariants}>
            Based in
            <span className="font-bold"> Kolkata, India.</span>
          </motion.div>
        </motion.span>
        <motion.p
          className="py-6 md:py-12 text-sm sm:text-base relative z-10"
          variants={textVariants}
        >
          I am Sudipta Saha developing my skills in field of Computer Science
          and trying to be a perfect human being. Technologically adept.
          Bringing forth a positive attitude and the willingness and motivation
          to learn new programs.
        </motion.p>
        <motion.div
          className="flex flex-row gap-2 md:gap-4 items-center relative z-10"
          initial="hidden"
          animate="visible"
        >
          <a href="https://github.com/code-sudipta" target="_blank">
            <motion.i
              initial="hidden"
              animate="visible"
              className={`pi pi-github cursor-pointer hover:text-[var(--primary)] transition-colors`}
              style={{
                padding: ".5rem",
                fontSize: "1.8rem",
                borderRadius: "50%",
                border: "2px solid transparent",
              }}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sudipta-saha-529021203/"
            target="_blank"
          >
            <motion.i
              initial="hidden"
              animate="visible"
              className={`pi pi-linkedin cursor-pointer hover:text-[var(--primary)] transition-colors`}
              style={{
                padding: ".5rem",
                fontSize: "1.8rem",
                borderRadius: "50%",
                border: "2px solid transparent",
              }}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </a>
          <a
            href="https://www.hackerrank.com/profile/sudiptasaha2282"
            target="_blank"
          >
            <motion.i
              initial="hidden"
              animate="visible"
              className={`fab fa-hackerrank cursor-pointer hover:text-[var(--primary)] transition-colors`}
              style={{
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: "50%",
                border: "2px solid transparent",
              }}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </a>
          <a href=" https://www.instagram.com/sudipto_004/" target="_blank">
            <motion.i
              initial="hidden"
              animate="visible"
              className={`pi pi-instagram cursor-pointer hover:text-[var(--primary)] transition-colors`}
              style={{
                padding: ".5rem",
                fontSize: "1.8rem",
                borderRadius: "50%",
                border: "2px solid transparent",
              }}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        ref={constraintsRef}
        className="w-full lg:w-1/2 max-w-md lg:max-w-none flex justify-center items-center relative"
        variants={imageVariants}
      >
        <motion.img
          src={me}
          alt="banner"
          className="w-[50%] h-auto cursor-grab active:cursor-grabbing rounded-2xl shadow-2xl"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragMomentum={false}
          whileDrag={{
            scale: 1.08,
            rotate: 3,
            filter: "brightness(1.1)",
            transition: { duration: 0.2 },
          }}
          whileHover={{
            scale: 1.03,
            y: -5,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          style={{ userSelect: "none" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
