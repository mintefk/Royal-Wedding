import { motion } from "framer-motion";

export default function TimelineItem({ year, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="font-serifLuxury text-2xl text-gold">{year}</h3>
      <p className="mt-2 text-ivory/80">{text}</p>
    </motion.div>
  );
}