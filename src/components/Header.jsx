import { Button } from "primereact/button";
import { useEffect, useState, useRef } from "react";
import * as motion from "motion/react-client";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("");
  const containerRef = useRef(null);

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
        delay: 0.1,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  function toggleTheme() {
    if (!darkTheme) {
      document.getElementById(
        "theme-link"
      ).href = `https://unpkg.com/primereact@10.9.6/resources/themes/arya-orange/theme.css`;
      document.getElementById("custom-theme").href =
        "./src/themes/darkTheme.css";
      localStorage.setItem("theme", "dark");
    } else {
      document.getElementById(
        "theme-link"
      ).href = `https://unpkg.com/primereact@10.9.6/resources/themes/saga-orange/theme.css`;
      document.getElementById("custom-theme").href =
        "./src/themes/lightTheme.css";
      localStorage.setItem("theme", "light");
    }
    setDarkTheme(!darkTheme);
  }

  if (darkTheme) {
    document.getElementById(
      "theme-link"
    ).href = `https://unpkg.com/primereact@10.9.6/resources/themes/arya-orange/theme.css`;
    console.log(document.getElementById("custom-theme"));
    document.getElementById("custom-theme").href = "./src/themes/darkTheme.css";
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* Header for larger screens */}
      <motion.div
        className="w-full h-20 px-4 md:px-10 shadow-sm flex flex-row justify-between md:justify-around items-center fixed top-0 bg-[var(--header-bg-color)] z-50"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.i
          className="pi pi-user text-xl"
          variants={logoVariants}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        />

        {/* Desktop Navigation */}
        <motion.ul className="hidden md:flex gap-6" variants={headerVariants}>
          {[
            { href: "#about", label: "About Me", key: "about" },
            { href: "#skills", label: "Skills", key: "skills" },
            { href: "#experience", label: "Experience", key: "experience" },
            { href: "#projects", label: "Projects", key: "projects" },
            { href: "#contact", label: "Contact Me", key: "contact" },
          ].map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className={`nav-link ${
                active === item.key
                  ? "text-[var(--primary)] font-semibold border-b-2 border-[var(--primary)]"
                  : "font-medium"
              }`}
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
                // y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <li>{item.label}</li>
            </motion.a>
          ))}
        </motion.ul>

        {/* Desktop Actions */}
        <motion.div
          className="hidden md:flex flex-row gap-8 items-center"
          variants={headerVariants}
        >
          <motion.i
            className={`pi ${
              !darkTheme ? "pi-sun animate-rise" : "pi-moon animate-set"
            } cursor-pointer`}
            style={{ fontSize: !darkTheme ? "1.2rem" : "1rem" }}
            onClick={toggleTheme}
            variants={navItemVariants}
            whileHover={{ scale: 1.2, rotate: !darkTheme ? 180 : -180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />

          <a
            href="https://drive.google.com/file/d/1mCpvJrG-Pbz6o-8LeOzSqquwtBsdD_tZ/view?usp=drive_link"
            target="_blank"
          >
            <motion.button
              type="submit"
              className="flex items-center gap-3 bg-[var(--primary)] text-white px-3 py-1 md:py-2 rounded-md cursor-pointer hover:bg-orange-400 transition-all duration-300 text-sm md:text-base font-medium w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <i className="pi pi-external-link text-sm"></i>
            </motion.button>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center justify-center w-10 h-10 text-2xl cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          variants={navItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.i
            className={`pi ${sidebarOpen ? "pi-times" : "pi-bars"}`}
            animate={{ rotate: sidebarOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen ? (
        <motion.div
          className="fixed inset-0 z-40 md:hidden backdrop-blur-xs"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          onClick={closeSidebar}
          initial={false}
          animate={sidebarOpen ? "open" : "closed"}
          variants={overlayVariants}
        />
      ) : (
        <></>
      )}

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full w-70 bg-[var(--header-bg-color)] shadow-lg z-40 md:hidden"
        initial={false}
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        ref={containerRef}
      >
        {/* Sidebar Header */}
        <motion.div
          className="flex justify-end items-center p-6 bg-transparent"
          variants={itemVariants}
        >
          <motion.button
            onClick={closeSidebar}
            className="text-2xl cursor-pointer"
            aria-label="Close menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="pi pi-times"></i>
          </motion.button>
        </motion.div>

        {/* Sidebar Navigation */}
        <nav className="p-6">
          <motion.ul className="space-y-6" variants={navVariants}>
            {[
              { href: "#about", label: "About Me", key: "about" },
              { href: "#skills", label: "Skills", key: "skills" },
              { href: "#experience", label: "Experience", key: "experience" },
              { href: "#projects", label: "Projects", key: "projects" },
              { href: "#contact", label: "Contact Me", key: "contact" },
            ].map((item) => (
              <motion.li key={item.key} variants={itemVariants}>
                <a
                  href={item.href}
                  className={`nav-link block py-2 ${
                    active === item.key
                      ? "text-[var(--primary)] font-semibold"
                      : ""
                  }`}
                  onClick={closeSidebar}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Actions */}
          <motion.div className="mt-8 space-y-6" variants={itemVariants}>
            <motion.div
              className="flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
            >
              <span>Theme</span>
              <motion.i
                className={`pi ${
                  !darkTheme ? "pi-sun animate-rise" : "pi-moon animate-set"
                } cursor-pointer`}
                style={{ fontSize: !darkTheme ? "1.2rem" : "1rem" }}
                onClick={toggleTheme}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>

            <a href="https://drive.google.com/file/d/1mCpvJrG-Pbz6o-8LeOzSqquwtBsdD_tZ/view?usp=drive_link" target="_blank">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  label="Resume"
                  icon="pi pi-external-link"
                  rounded
                  iconPos="right"
                  className="w-full"
                />
              </motion.div>
            </a>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
};

/**
 * ==============   Utils   ================
 */

// Utility hook to get dimensions (similar to motion.dev example)
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

export default Header;
