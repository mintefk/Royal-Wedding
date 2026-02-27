import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function EventDetails() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      id="EventDetails"
    >

      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/three.jpg"   // change to your image
          alt="Event Background"
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
      <div className="relative z-10 text-center">

        <motion.h2
          className="font-serifLuxury text-4xl md:text-5xl mb-12 text-gold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Event Details
        </motion.h2>

        <motion.div
          className="border border-gold p-10 max-w-xl mx-auto backdrop-blur-md bg-blackLuxury/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <p className="tracking-widest mb-2">{weddingData.date}</p>
          <p className="tracking-widest">{weddingData.ceremonyTime}</p>
          <p className="mt-6 text-gold font-medium">
            {weddingData.dressCode}
          </p>
        </motion.div>

      </div>
    </section>
  );
}