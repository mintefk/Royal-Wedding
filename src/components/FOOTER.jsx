export default function Footer() {
  return (
    <footer
      className="py-16 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#ac5e23", fontFamily: "system-ui, sans-serif" }}
    >

      {/* Optional Feathered Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-t from-[#ac5e23] via-transparent to-[#ac5e23]/70" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left Column: Navigation */}
        <div className="flex flex-col space-y-3">
          <a
            href="#Hero"
            className="text-white hover:underline transition font-semibold"
          >
            Homepage
          </a>
          <div className="text-sm text-white/80">
            <span>© 2026 by A&R.</span> <br />
            Powered by <span className="font-semibold">Mintu Photography</span>
          </div>
        </div>

        {/* Center Column: Contact */}
        <div className="flex flex-col space-y-2 text-white text-sm">
          <p className="uppercase tracking-wider font-semibold">
            Give Us a Call
          </p>
          <p>Mintu +251938972720</p>
          <p>+251938972720</p>
        </div>

        {/* Right Column: Tagline */}
        <div className="text-right md:text-left">
          <p className="text-xl md:text-2xl font-semibold text-white/90 leading-snug">
            Let's tell your story elegantly
          </p>
        </div>

      </div>
    </footer>
  );
}