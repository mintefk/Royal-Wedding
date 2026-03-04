import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import GoldParticles from "./GoldParticles";

export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden flex items-center justify-center text-center"
      id="Hero"
    >

      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src="/images/4.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50
                     [mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]
                     [mask-repeat:no-repeat]
                     [mask-size:100%_100%]"
        />
      </motion.div>

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-blackLuxury/70" />

      {/* Subtle Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackLuxury/40 to-blackLuxury" />

      {/* Gold Particles */}
      <GoldParticles />

      {/* Curtain Reveal */}
      <motion.div
        className="absolute inset-0 bg-blackLuxury z-20"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.83, 0, 0.17, 1] }}
        style={{ originY: 0 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-30 max-w-6xl mx-auto text-left md:text-left px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.6, ease: "easeOut" }}
      >
        <h1 className="
          text-6xl md:text-8xl lg:text-9xl
          font-scriptLuxury gold-gradient drop-shadow-xl
        ">
          {weddingData.bride} & {weddingData.groom}
        </h1>

        <div className="flex items-center mt-6 md:mt-8">
          <div className="h-px w-20 bg-gold" />
          <p className="mx-4 font-serifLuxury tracking-widest text-gold">
            {weddingData.date}
          </p>
          <div className="h-px w-20 bg-gold" />
        </div>
      </motion.div>

    </section>
  );
}