import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import TimelineItem from "./TimelineItem";

export default function OurStory() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      id="OurStory"
    >

      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/7.webp" loading="lazy"    // change to your image
          alt="Our Story Background"
          className="w-full h-full object-cover opacity-50"
        />
      </motion.div>

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-blackLuxury/60" />

      {/* Soft Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackLuxury/30 to-blackLuxury/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        <motion.h2
          className="text-center font-serifLuxury text-4xl md:text-5xl mb-20 text-gold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Our Story
        </motion.h2>

        <div className="border-l border-gold pl-8">
          {weddingData.story.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}