import { motion } from "motion/react";
import "./FloatingBackground.css";

const FloatingBackground = () => {
  // Generate random positions and sizes for floating elements
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 40, // Fixed size of 40px
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 15, // Duration between 15-30s
    shape: Math.random() > 0.5 ? 'circle' : 'square',
  }));

  return (
    <div className="floating-background">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`floating-element ${element.shape}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            rotate: [0, 180, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;
