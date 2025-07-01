import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageWrapper = ({ children }) => {
  const controls = useAnimationControls();
  const location = useLocation();

  useEffect(() => {
    controls.start("animate").then(() => {
      // Scroll to top AFTER animation completes
      window.scrollTo(0, 0);
    });
  }, [location.pathname]);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      initial="initial"
      animate={controls}
      exit="exit"
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
