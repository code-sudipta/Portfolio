import "./App.css";
import Header from "./components/Header";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { motion,useScroll } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "var(--primary)",
          zIndex: 100,
        }}
      />
      <Header></Header>
      {/* <div className="h-20"></div> */}
      <Banner></Banner>
      <div className="h-20" id="about"></div>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
