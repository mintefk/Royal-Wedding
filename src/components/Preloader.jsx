import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 bg-blackLuxury flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        className="text-3xl font-serifLuxury gold-gradient tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        A Royal Celebration
      </motion.div>
    </motion.div>
  );
}