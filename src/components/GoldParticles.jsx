import { motion } from "framer-motion";

export default function GoldParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
          animate={{ y: ["0%", "100%"], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 15 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
          }}
        />
      ))}
    </div>
  );
}