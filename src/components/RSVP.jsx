import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden flex justify-center"
      id="RSVP"
    >

      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/new.jpg" // replace with your image
          alt="RSVP Background"
          className="w-full h-full object-cover opacity-50
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
      <div className="relative z-10 w-full max-w-lg">

        <motion.h2
          className="font-serifLuxury text-3xl md:text-4xl mb-8 text-center text-gold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          RSVP
        </motion.h2>

        <motion.div
          className="backdrop-blur-md bg-blackLuxury/30 border border-gold p-12 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <form className="space-y-6">
            <input
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border-b border-gold outline-none placeholder-gold"
            />
            <input
              placeholder="Email"
              className="w-full p-3 bg-transparent border-b border-gold outline-none placeholder-gold"
            />
            <select className="w-full p-3 bg-transparent border-b border-gold outline-none">
              <option>1 Guest</option>
              <option>2 Guests</option>
            </select>

            <button className="w-full py-3 border border-gold hover:bg-gold hover:text-blackLuxury transition duration-500">
              Confirm Attendance
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}