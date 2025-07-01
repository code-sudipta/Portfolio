import { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { motion } from "motion/react";
import experience from "../assets/experience.svg";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0); // for toggling

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

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const accordionItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
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

  return (
    <motion.div
      className="px-4 md:px-12 lg:px-24 pt-10 flex flex-col justify-center items-center w-full overflow-hidden relative"
      id="experience"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
      <div className="h-10 md:h-20"></div>
      <motion.h1
        className="text-3xl md:text-4xl mb-5 w-fit text-center"
        variants={titleVariants}
      >
        <span className="underline decoration-[var(--primary)] decoration-4 underline-offset-2">
          My
        </span>{" "}
        <span className="font-bold">Experience</span>
      </motion.h1>
      <motion.div
        className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-4 w-full items-center"
        variants={contentContainerVariants}
      >
        <motion.div className="w-full lg:w-3/5" variants={accordionVariants}>
          <Accordion
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            className="w-full mx-auto flex flex-col gap-3 raleway-family"
          >
            {[
              {
                name: "Amy Elsner",
                img: "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                badge: 3,
                position: "Senior Software Engineer",
                company: "Google",
                content:
                  "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
              },
              {
                name: "Onyama Limba",
                img: "https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",
                badge: 4,
                position: "Software Engineer",
                company: "YouTube",
                content:
                  "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
              },
              {
                name: "Ioni Bowcher",
                img: "https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png",
                badge: 2,
                position: "Software Architect",
                company: "Apple",
                content:
                  "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
              },
            ].map((item, i) => (
              <AccordionTab
                key={i}
                header={
                  <div className="flex items-center gap-3 px-4 py-4 rounded-lg w-full">
                    <Avatar
                      image={item.img}
                      shape="circle"
                      className="w-10 h-10 flex-shrink-0 shadow-md"
                    />
                    <div className="flex flex-col items-start flex-grow min-w-0">
                      <span className="font-semibold text-base truncate w-full">
                        {item.name}
                      </span>
                      <span className="text-sm truncate w-full leading-relaxed">
                        {item.position} at {item.company}
                      </span>
                    </div>
                    <Badge
                      value={item.badge}
                      className="ml-auto rounded-full shadow-sm"
                    />
                  </div>
                }
                className="w-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden mb-3"
              >
                <p className="w-full px-4 py-4 text-sm leading-relaxed">
                  {item.content}
                </p>
              </AccordionTab>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="w-full lg:w-2/5 flex justify-center"
          variants={imageVariants}
        >
          <motion.img
            src={experience}
            className="w-full max-w-sm lg:max-w-full"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
