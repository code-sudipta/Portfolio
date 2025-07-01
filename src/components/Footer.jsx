import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55],
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8,
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
    tap: {
      scale: 0.9,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-20 py-4 sm:py-0 bg-[var(--header-bg-color)] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-2 left-8 w-3 h-3 bg-orange-400 rounded-full opacity-20"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-2 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-25"
        animate={{
          y: [0, 8, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-400 rounded-2xl opacity-15"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />

      <motion.h1
        className="font-bold text-xl sm:text-2xl flex gap-2 sm:gap-4 items-center mb-2 sm:mb-0"
        variants={logoVariants}
      >
        <motion.i
          className="pi pi-user cursor-pointer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        />
        <motion.span
          whileHover={{
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
        >
          Sudipta Saha
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-xs sm:text-sm text-gray-400 text-center sm:text-right"
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          color: "#9CA3AF",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        }}
      >
        All rights reserved @2025
      </motion.p>
    </motion.div>
  );
};

export default Footer;
