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
