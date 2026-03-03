export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12 px-6"
      style={{ backgroundColor: "#ac5e23" }}
    >
      {/* Subtle gradient + texture */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-t from-[#8a4719] via-[#ac5e23] to-[#c46c2a]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between text-white/90">
        {/* Left: Brand + nav */}
        <div className="space-y-4">
          <div>
            <p className="text-sm tracking-[0.16em] uppercase text-white/80">
              Royal Wedding
            </p>
            <a
              href="#Hero"
              className="inline-flex items-center gap-1 text-base font-semibold hover:text-white transition-colors"
            >
              Homepage
              <span className="text-lg leading-none">↗</span>
            </a>
          </div>

          <div className="text-xs md:text-sm text-white/80">
            <p>© 2026 A &amp; R. All rights reserved.</p>
            <p className="mt-1">
              Crafted with care by{" "}
              <span className="font-semibold">Mintu Photography</span>
            </p>
          </div>
        </div>

        {/* Center: Contact */}
        <div className="space-y-2 text-sm">
          <p className="uppercase tracking-[0.18em] text-xs text-white/80">
            Contact
          </p>
          <p className="font-medium">Mintu Photography</p>
          <a
            href="tel:+251938972720"
            className="block hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            +251 93 897 2720
          </a>
          <a
            href="tel:+251938972720"
            className="block hover:text-white underline-offset-4 hover:underline transition-colors"
          >
            +251 93 897 2720
          </a>
        </div>

        {/* Right: Tagline */}
        <div className="md:text-right max-w-xs">
          <p className="text-lg md:text-2xl font-semibold leading-snug text-white">
            Let&apos;s tell your story
            <span className="block text-white/80 text-base md:text-lg mt-1">
              with timeless elegance.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 pt-4 border-t border-white/15 text-[11px] text-white/70 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>Designed for a royal celebration of love.</p>
        <p className="md:text-right">
          Venue, photography, and memories curated to perfection.
        </p>
      </div>
    </footer>
  );
}