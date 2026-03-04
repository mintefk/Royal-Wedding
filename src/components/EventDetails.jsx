import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function EventDetails() {
  return (
    <section
      id="EventDetails"
      className="relative py-32 px-6 overflow-hidden"
      aria-labelledby="event-details-heading"
    >
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/10.jpg" // change to your image
          alt="Elegant wedding event ambiance"
          className="w-full h-full object-cover opacity-50
                     [mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]
                     [mask-repeat:no-repeat]
                     [mask-size:100%_100%]"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-blackLuxury/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackLuxury/30 to-blackLuxury/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="tracking-[0.22em] text-xs uppercase text-gold/75 mb-3">
            The Celebration
          </p>

          <h2
            id="event-details-heading"
            className="font-serifLuxury text-4xl md:text-5xl text-gold mb-4"
          >
            Event Details
          </h2>

          <p className="text-sm md:text-base text-gold/70 max-w-xl mx-auto">
            Join us as we exchange vows and begin our journey together. All the
            important details for our royal celebration are lovingly arranged
            below.
          </p>
        </motion.div>

        {/* Details Card */}
        <motion.div
          className="border border-gold/70 px-10 py-9 rounded-2xl mx-auto max-w-xl backdrop-blur-xl bg-blackLuxury/35 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          {/* Date & Time */}
          <div className="space-y-3 mb-8">
            <p className="tracking-[0.24em] text-[11px] uppercase text-gold/75">
              Date &amp; Time
            </p>
            <p className="text-lg md:text-xl text-gold font-medium">
              {weddingData.date}
            </p>
            <p className="text-sm md:text-base text-gold/80">
              {weddingData.ceremonyTime}
            </p>
          </div>

          {/* Dress Code */}
          <div className="border-t border-gold/30 pt-6 mt-4">
            <p className="tracking-[0.24em] text-[11px] uppercase text-gold/75 mb-2">
              Dress Code
            </p>
            <p className="text-sm md:text-base text-gold font-medium">
              {weddingData.dressCode}
            </p>
            <p className="text-xs md:text-sm text-gold/65 mt-2">
              We kindly invite you to embrace the elegance of the evening in
              attire that reflects the grandeur of the occasion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}