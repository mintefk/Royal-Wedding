import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../data/galleryData";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      id="Gallery"
    >

      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/four.jpg"   // change image
          alt="Gallery Background"
          className="w-full h-full object-cover opacity-80
                     [mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]
                     [mask-repeat:no-repeat]
                     [mask-size:100%_100%]"
        />
      </motion.div>

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-blackLuxury/60" />

      {/* Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackLuxury/30 to-blackLuxury/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <motion.h2
          className="text-center font-serifLuxury text-4xl md:text-5xl mb-20 text-gold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Gallery
          <br />
          <br />
          <div className="text-center max-w-3xl mx-auto mb-14 gap-4">
          <motion.p
            className="uppercase tracking-[0.28em] text-xs md:text-sm text-black/85 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            “I have found the one whom my soul loves.”
            - Song of Solomon 3:4
          </motion.p>

        </div>
        </motion.h2>

        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <motion.img
              key={img.id}
              src={img.src}
              className="rounded-xl cursor-pointer
                         transition duration-700
                         hover:scale-105 hover:shadow-2xl
                         hover:shadow-gold/20"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(img.src)}
            />
          ))}
        </div>

      </div>

      {selected && (
        <Lightbox image={selected} close={() => setSelected(null)} />
      )}
    </section>
  );
}