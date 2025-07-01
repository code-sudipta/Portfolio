import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";

const Contact = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const toast = useRef(null);
  const formRef = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message Sent Succesfully",
      // life: 3000,
      sticky: true,
    });
  };

  const showFail = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Message Not Sent",
      // life: 3000,
      sticky: true,
    });
  };

  const showWarn = () => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: "Fill all the fields",
      // life: 3000,
      sticky: true,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (uname === "" || email === "" || message === "") {
      showWarn();
      return;
    }

    emailjs
      .sendForm(
        "service_947qlse",
        "template_jqb5o8d",
        formRef.current,
        "pNvZTK0CT_adL0Rb0"
      )
      .then(
        (result) => {
          showSuccess();
        },
        (error) => {
          showFail();
        }
      );
  };

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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
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

  const inputVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  const textContentVariants = {
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

  const textElementVariants = {
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
  return (
    <motion.div
      className="px-4 md:px-12 lg:px-24 pt-10 gap-4 md:gap-6 flex flex-col justify-center items-center w-full min-h-screen overflow-hidden relative"
      id="contact"
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
      <motion.h1
        className="text-3xl md:text-4xl mb-4 w-fit text-center"
        variants={titleVariants}
      >
        <span className=" underline decoration-[var(--primary)] decoration-4 underline-offset-2">
          Contact
        </span>{" "}
        <span className="font-bold">Me</span>
      </motion.h1>
      <motion.div
        className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-4 items-center"
        variants={contentContainerVariants}
      >
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 max-w-xl lg:max-w-none p-6 md:p-8 rounded-2xl bg-[var(--header-bg-color)] relative"
          variants={formVariants}
        >
          {/* Subtle glow effect behind form */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-2xl blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div variants={inputVariants} className="relative z-10">
            <InputText
              id="username"
              name="user_name"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div variants={inputVariants} className="relative z-10">
            <InputText
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
              placeholder="Email"
            />
          </motion.div>

          <motion.div variants={inputVariants} className="relative z-10">
            <InputText
              id="website"
              name="user_website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
              placeholder="Your Website (if exists)"
            />
          </motion.div>

          <motion.div variants={inputVariants} className="relative z-10">
            <InputTextarea
              name="message"
              autoResize
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              cols={30}
              className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm md:text-base"
              placeholder="How can I help?*"
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-between relative z-10"
            variants={inputVariants}
          >
            <motion.button
              type="submit"
              className="bg-[var(--primary)] text-white px-6 py-2 md:py-3 rounded-md cursor-pointer hover:bg-orange-400 transition-all duration-300 text-sm md:text-base font-medium w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.button>
            <motion.div
              className="flex flex-row gap-2 md:gap-4 items-center"
              variants={inputVariants}
            >
              <a href="https://github.com/code-sudipta" target="_blank">
                <motion.i
                  className="pi pi-github cursor-pointer transition-colors"
                  style={{
                    padding: ".5rem",
                    fontSize: "1.4rem",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                  }}
                  variants={socialIconVariants}
                  whileHover={{
                    scale: 1.3,
                    rotate: 10,
                    color: "var(--primary)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sudipta-saha-529021203/"
                target="_blank"
              >
                <motion.i
                  className="pi pi-linkedin cursor-pointer transition-colors"
                  style={{
                    padding: ".5rem",
                    fontSize: "1.4rem",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                  }}
                  variants={socialIconVariants}
                  whileHover={{
                    scale: 1.3,
                    rotate: -10,
                    color: "var(--primary)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a
                href="https://www.hackerrank.com/profile/sudiptasaha2282"
                target="_blank"
              >
                <motion.i
                  className="fab fa-hackerrank cursor-pointer transition-colors"
                  style={{
                    padding: ".5rem",
                    fontSize: "1.4rem",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                  }}
                  variants={socialIconVariants}
                  whileHover={{
                    scale: 1.3,
                    rotate: 10,
                    color: "var(--primary)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a href="https://www.instagram.com/sudipto_004" target="_blank">
                <motion.i
                  className="pi pi-instagram cursor-pointer transition-colors"
                  style={{
                    padding: ".5rem",
                    fontSize: "1.4rem",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                  }}
                  variants={socialIconVariants}
                  whileHover={{
                    scale: 1.3,
                    rotate: -10,
                    color: "var(--primary)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.form>

        <motion.div
          className="flex flex-col w-full lg:w-1/2 text-center lg:text-left relative"
          variants={textContentVariants}
        >
          {/* Decorative elements around contact info */}
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 border-2 border-orange-300 rounded-2xl opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-blue-300 rounded-xl opacity-15"
            animate={{
              rotate: [360, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            variants={textElementVariants}
          >
            Let's <span className="gradient-text">talk</span> for{" "}
            <br className="hidden lg:block" />
            Something special
          </motion.h1>
          <motion.p
            className="py-4 text-sm md:text-base leading-relaxed"
            variants={textElementVariants}
          >
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </motion.p>
          <motion.div
            className="flex flex-col gap-2 items-center lg:items-start relative"
            variants={textElementVariants}
          >
            {/* Floating elements around contact info */}
            <motion.div
              className="absolute -left-8 top-2 w-2 h-2 bg-orange-400 rounded opacity-30"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -right-6 bottom-2 w-3 h-3 bg-blue-400 rounded-md opacity-25"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.a
              href="mailto:sudiptasaha2282@gmail.com"
              className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-[var(--primary)] transition-colors break-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              sudiptasaha2282@gmail.com
            </motion.a>
            <motion.a
              href="tel:+919628900500"
              className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-[var(--primary)] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              +91 9628900500
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <Toast ref={toast} className="w-full"/>
    </motion.div>
  );
};

export default Contact;
