import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section
      id="RSVP"
      className="relative py-32 px-6 overflow-hidden flex justify-center"
      aria-labelledby="rsvp-heading"
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
          alt="Elegant wedding reception decor"
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
      <div className="relative z-10 w-full max-w-xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="tracking-[0.2em] text-xs uppercase text-gold/80 mb-3">
            Kindly Respond
          </p>

          <h2
            id="rsvp-heading"
            className="font-serifLuxury text-3xl md:text-4xl text-gold mb-3"
          >
            RSVP to Our Royal Celebration
          </h2>

          <p className="text-sm md:text-base text-gold/70 max-w-md mx-auto">
            We look forward to celebrating this special day with you.
            Please confirm your attendance at your earliest convenience.
          </p>
        </motion.div>

        <motion.div
          className="backdrop-blur-xl bg-blackLuxury/40 border border-gold/70 px-8 py-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs tracking-[0.16em] uppercase text-gold/80"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full bg-transparent border-b border-gold/60 py-3 text-gold placeholder-gold/45 outline-none focus:border-gold focus:ring-0 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs tracking-[0.16em] uppercase text-gold/80"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-gold/60 py-3 text-gold placeholder-gold/45 outline-none focus:border-gold focus:ring-0 transition-colors"
              />
            </div>

            {/* Attendance */}
            <div className="space-y-2">
              <label
                htmlFor="attendance"
                className="block text-xs tracking-[0.16em] uppercase text-gold/80"
              >
                Attendance
              </label>
              <select
                id="attendance"
                className="w-full bg-transparent border-b border-gold/60 py-3 text-gold outline-none focus:border-gold focus:ring-0 transition-colors"
                defaultValue=""
              >
                <option value="" disabled className="bg-blackLuxury text-gold">
                  Please select an option
                </option>
                <option className="bg-blackLuxury text-gold">
                  Joyfully Accepts
                </option>
                <option className="bg-blackLuxury text-gold">
                  Regretfully Declines
                </option>
              </select>
            </div>

            {/* Guest Count */}
            <div className="space-y-2">
              <label
                htmlFor="guests"
                className="block text-xs tracking-[0.16em] uppercase text-gold/80"
              >
                Number of Guests
              </label>
              <select
                id="guests"
                className="w-full bg-transparent border-b border-gold/60 py-3 text-gold outline-none focus:border-gold focus:ring-0 transition-colors"
                defaultValue="1"
              >
                <option className="bg-blackLuxury text-gold" value="1">
                  1 Guest
                </option>
                <option className="bg-blackLuxury text-gold" value="2">
                  2 Guests
                </option>
                <option className="bg-blackLuxury text-gold" value="3">
                  3 Guests
                </option>
                <option className="bg-blackLuxury text-gold" value="4">
                  4 Guests
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs tracking-[0.16em] uppercase text-gold/80"
              >
                Special Notes
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Share any dietary requirements or special requests."
                className="w-full bg-transparent border-b border-gold/60 py-3 text-gold placeholder-gold/45 outline-none resize-none focus:border-gold focus:ring-0 transition-colors"
              />
            </div>

            {/* Button */}
            <motion.button
  type="submit"
  whileHover={{ y: -1 }}
  whileTap={{ y: 0 }}
  className="w-full mt-4 py-3.5 border border-transparent bg-[#ac5e23] text-white font-medium tracking-[0.16em] uppercase text-xs flex items-center justify-center gap-2 rounded-md transition-colors duration-300 hover:bg-[#bf6a2a]"
  style={{ backgroundColor: '#2997a4' }}>
  Confirm Attendance
  <span className="text-lg leading-none">→</span>
</motion.button>

            <p className="text-[11px] text-center text-gold/60 mt-3">
              By confirming, you help us prepare a truly memorable experience
              tailored for you.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}