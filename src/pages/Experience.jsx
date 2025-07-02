import { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";
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
                name: "Inceptial Infrastructure and Technology LLP",
                position: "Developer Intern",
                content:
                  "At Inceptial Infrastructure and Technology LLP, I was a Developer Intern, where I learned to make REST API. Conceptualized and pioneered the internal Asset Management Portal utilizing REST APIs, streamlining asset tracking for 50+ employees, and reducing asset retrieval time by 40% during peak periods. Designed and implemented the internal Ticket Management System UI.",
              },
              {
                name: "Cincooni Systems Private Limited",
                position: "Growth Executive Intern",
                content:
                  "At Cincooni Systems Private Limited, I was a Growth Executive Intern, where I played a pivotal role in lead generation and raised Fund for a non-profit organization.",
              },
            ].map((item, i) => (
              <AccordionTab
                key={i}
                header={
                  <div className="flex items-center gap-3 px-4 py-4 rounded-lg w-full">
                    <i className="pi pi-building text-md lg:text-lg"></i>
                    <div className="flex flex-col items-start flex-grow min-w-0 ml-2">
                      <span className="text-sm lg:text-base font-semibold truncate w-full">
                        {item.name}
                      </span>
                      <span className="text-xs lg:text-sm truncate font-medium w-full leading-relaxed">
                        {item.position}
                      </span>
                    </div>
                    <p></p>
                  </div>
                }
                className="w-full shadow-lg transition-all duration-300 rounded-xl overflow-hidden mb-3"
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
