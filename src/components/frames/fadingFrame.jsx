import { motion } from "framer-motion";

export default function FadingFrame({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.section>
  );
}
