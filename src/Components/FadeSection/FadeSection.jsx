// src/Components/FadeSection/FadeSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FadeSection = ({ children, className = "", scrollFade = true }) => {
  const ref = useRef();

  // Scroll progress (0 to 1) for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Fade from opacity 1 to 0.2 during scroll if enabled
  const opacity = scrollFade
    ? useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
    : 1;

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{ opacity }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default FadeSection;
