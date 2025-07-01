import SkillsCard from "../components/SkillsCard";
import { motion } from "motion/react";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const sectionTitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="px-4 md:px-12 lg:px-24 py-10 gap-4 md:gap-6 flex flex-col justify-center items-center w-full overflow-hidden relative"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Floating curved squares decorative elements */}
      <motion.div
        className="absolute top-20 left-6 w-5 h-5 bg-orange-400 rounded-xl opacity-20"
        animate={{
          y: [0, -28, 0],
          x: [0, 14, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-8 w-4 h-4 bg-blue-500 rounded-lg opacity-15"
        animate={{
          y: [0, 22, 0],
          x: [0, -18, 0],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-4 w-6 h-6 bg-green-400 rounded-2xl opacity-25"
        animate={{
          y: [0, -20, 0],
          scale: [1, 0.75, 1],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-32 right-12 w-3 h-3 bg-purple-500 rounded-md opacity-30"
        animate={{
          y: [0, 18, 0],
          x: [0, 10, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-2/3 left-8 w-2 h-2 bg-pink-400 rounded opacity-20"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 120, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-6 w-4 h-4 bg-yellow-400 rounded-lg opacity-15"
        animate={{
          y: [0, -16, 0],
          x: [0, -12, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Additional curved squares */}
      <motion.div
        className="absolute top-12 right-1/4 w-3 h-8 bg-gradient-to-b from-orange-400 to-red-400 opacity-10 rounded-xl"
        animate={{
          rotate: [0, 360],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-8 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-15 rounded-2xl"
        animate={{
          rotate: [0, -150, 0],
          x: [0, 16, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-5 h-5 bg-red-400 opacity-20 rounded-2xl"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.85, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-4 h-6 bg-gradient-to-tl from-indigo-400 to-purple-400 opacity-20 rounded-2xl"
        animate={{
          y: [0, -14, 0],
          scale: [1, 0.8, 1.2, 1],
          rotate: [0, -45, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4.5,
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-4 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-15 rounded-xl"
        animate={{
          x: [0, -10, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <div className="h-10 md:h-15"></div>
      <motion.h1 
        className="text-3xl md:text-4xl mb-5 w-fit text-center"
        variants={titleVariants}
      >
        <span className=" underline decoration-[var(--primary)] decoration-4 underline-offset-2">
          My
        </span>{" "}
        <span className="font-bold">Skills</span>
      </motion.h1>
      
      <motion.h1 
        className="self-start text-xl md:text-2xl"
        variants={sectionTitleVariants}
      >
        Frontend
      </motion.h1>
      <motion.div 
        className="w-full flex flex-row flex-wrap justify-center md:justify-center items-center gap-4 md:gap-6 lg:gap-8"
        variants={skillsGridVariants}
      >
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-react" title="React" iconColor="deepskyblue" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-html5" title="HTML" iconColor="orangered" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-css3" title="CSS" iconColor="deepskyblue" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-angular" title="Angular" iconColor="red" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-sass" title="SCSS" iconColor="deeppink" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="devicon-tailwindcss-original" title="Tailwind" iconColor="cyan" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-figma" title="Figma" iconColor="purple" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="pi pi-prime" title="PrimeNG" iconColor="deepskyblue" />
        </motion.div>
      </motion.div>

      <motion.h1 
        className="self-start text-xl md:text-2xl"
        variants={sectionTitleVariants}
      >
        Languages
      </motion.h1>
      <motion.div 
        className="w-full flex flex-row flex-wrap justify-center md:justify-center items-center gap-4 md:gap-6 lg:gap-8"
        variants={skillsGridVariants}
      >
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-js" title="Javascript" iconColor="gold" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-java" title="Core Java" iconColor="orange" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="devicon-typescript-plain" title="TypeScript" iconColor="deepskyblue" />
        </motion.div>
      </motion.div>
      
      <motion.h1 
        className="self-start text-xl md:text-2xl"
        variants={sectionTitleVariants}
      >
        Backend
      </motion.h1>
      <motion.div 
        className="w-full flex flex-row flex-wrap justify-center md:justify-center items-center gap-4 md:gap-6 lg:gap-8"
        variants={skillsGridVariants}
      >
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="devicon-mysql-original" title="MySQL" iconColor="deepskyblue" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="devicon-mongodb-plain" title="MongoDB" iconColor="green" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-node" title="Node.js" iconColor="green" />
        </motion.div>
      </motion.div>
      
      <motion.h1 
        className="self-start text-xl md:text-2xl"
        variants={sectionTitleVariants}
      >
        Tools
      </motion.h1>
      <motion.div 
        className="w-full flex flex-row flex-wrap justify-center md:justify-center items-center gap-4 md:gap-6 lg:gap-8"
        variants={skillsGridVariants}
      >
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="devicon-vscode-plain" title="VS Code" iconColor="deepskyblue" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fas fa-cube" title="Netbeans" iconColor="blue" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="fa-brands fa-npm" title="NPM" iconColor="red" />
        </motion.div>
        <motion.div variants={skillCardVariants}>
          <SkillsCard icon="devicon-git-plain" title="Git" iconColor="red" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
