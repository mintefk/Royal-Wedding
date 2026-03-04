export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 px-6 bg-white text-black font-serif">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left: Brand + nav */}
        <div className="space-y-4">
          <div>
            <p className="text-sm tracking-[0.16em] uppercase text-black/70">
              Royal Wedding
            </p>
            <a
              href="#Hero"
              className="inline-flex items-center gap-1 text-base font-semibold hover:text-black/70 transition-colors"
            >
              Homepage
              <span className="text-lg leading-none">↗</span>
            </a>
          </div>

          <div className="text-sm md:text-sm text-black/70">
            
          </div>
        </div>

        {/* Center: Contact */}
        <div className="space-y-2 text-sm text-black/80">
          <p className="uppercase tracking-[0.18em] text-xs text-black/60">
            Contact
          </p>
          <p className="font-medium">Mintu Photography</p>
          <a
            href="tel:+251938972720"
            className="block hover:text-black underline-offset-4 hover:underline transition-colors"
          >
            +251 93 897 2720
          </a>
          <a
            href="tel:+251938972720"
            className="block hover:text-black underline-offset-4 hover:underline transition-colors"
          >
            +251 93 897 2720
          </a>
        </div>

        {/* Right: Tagline */}
        <div className="md:text-right max-w-xs text-black">
          <p className="text-lg md:text-2xl font-semibold leading-snug">
            Let&apos;s tell your story
            <span className="block text-black/70 text-base md:text-lg mt-1">
              with timeless elegance.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 pt-4 border-t border-black/10 text-[11px] text-black/70 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>Designed for a royal celebration of love.</p>
        <div className="text-left md:text-right">
          <p>© 2026 A &amp; R. All rights reserved.</p>
          <p className="mt-1">
            Crafted with care by{" "}
            <span className="font-semibold">Mintu Photography</span>
          </p>
        </div>
      </div>
    </footer>
  );
}