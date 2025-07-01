import { motion} from "framer-motion";

const FadeSection = ({ children, className = ""}) => {

  return (
    <motion.section
      className={className}
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
