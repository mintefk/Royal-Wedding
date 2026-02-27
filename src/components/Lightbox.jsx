import { motion } from "framer-motion";

export default function Lightbox({ image, close }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.img
        src={image}
        className="max-h-[90vh] rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}