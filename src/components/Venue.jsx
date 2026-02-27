import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Venue() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      id="Venue"
    >

      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/five.jpg"  // replace with your venue background
          alt="Venue Background"
          className="w-full h-full object-cover opacity-50
                     [mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]
                     [mask-repeat:no-repeat]
                     [mask-size:100%_100%]"
        />
      </motion.div>

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-blackLuxury/60" />

      {/* Soft Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackLuxury/30 to-blackLuxury/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <motion.h2
          className="font-serifLuxury text-4xl md:text-5xl mb-10 text-gold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Venue
        </motion.h2>

        <motion.p
          className="mb-8 text-lg tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          {weddingData.venue}
        </motion.p>

        <motion.div
          className="border border-gold rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${weddingData.venueAddress}&output=embed`}
            className="w-full h-96"
          />
        </motion.div>

      </div>

    </section>
  );
}