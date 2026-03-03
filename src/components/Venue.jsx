import { motion } from "framer-motion";

export default function Venue() {
  const venueName = "Hilton Addis Ababa";
  const city = "Addis Ababa";
  const country = "Ethiopia";

  const fullLocation = `${venueName}, ${city}, ${country}`;
  const mapQuery = encodeURIComponent(fullLocation);

  return (
    <section
      id="venue"
      className="relative py-32 px-6 overflow-hidden bg-blackLuxury text-white"
      aria-labelledby="venue-heading"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/two.jpg"
          alt="Hilton Addis Ababa exterior"
          className="w-full h-full object-cover opacity-40
                     [mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-blackLuxury/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackLuxury/40 to-blackLuxury/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Text Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            className="uppercase tracking-[0.28em] text-xs md:text-sm text-gold/85 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Wedding Venue
          </motion.p>

          

          

         
        </div>

        {/* Map + Info Card */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-stretch">
          {/* Map */}
         

          {/* Venue Info Card */}
          <motion.div
            className="backdrop-blur-xl bg-blackLuxury/60 border border-gold/60 rounded-2xl px-7 py-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <p className="tracking-[0.24em] text-[11px] uppercase text-gold/80">
                Location
              </p>
              <p className="text-lg font-medium text-white">{fullLocation}</p>
              <p className="text-sm text-gold/70">
                A refined urban sanctuary offering lush gardens, elegant
                ballrooms, and impeccable service — the perfect setting for a
                royal wedding.
              </p>
            </div>

            <div className="mt-8 space-y-4 text-sm text-gold/75">
              <div className="flex items-center justify-between gap-3">
                <span className="uppercase tracking-[0.18em] text-[11px] text-gold/70">
                  Directions
                </span>
                <span className="text-xs text-gold/60">
                  Open in Google Maps.
                </span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full mt-1 py-2.5 border border-gold/70 text-xs uppercase tracking-[0.16em] text-gold rounded-full hover:bg-gold hover:text-blackLuxury transition-colors duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}