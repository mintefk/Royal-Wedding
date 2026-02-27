import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-blackLuxury flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-gold text-sm tracking-widest"
          >
            Close
          </button>

          <div className="space-y-8 text-2xl font-serifLuxury tracking-wide text-center">
            {["Our Story", "Gallery", "Event", "Venue", "RSVP"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="block hover:text-gold transition duration-500"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}