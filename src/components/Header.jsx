import React, { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false,
  });

  // Target date/time for countdown (fixed to 2 days from now)
  const weddingDateTime = (() => {
    const now = new Date();
    now.setDate(now.getDate() + 2);
    return now;
  })();

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Countdown timer (days / hours / minutes / seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = weddingDateTime.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          completed: true,
        });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        completed: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "OurStory",
        "Gallery",
        "EventDetails",
        "Venue",
        "RSVP",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="header-top">
          <h1 className="names">
            {weddingData.bride} & {weddingData.groom}
          </h1>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button
            className={active === "OurStory" ? "active" : ""}
            onClick={() => scrollToSection("OurStory")}
          >
            Our Story
          </button>

          <button
            className={active === "Gallery" ? "active" : ""}
            onClick={() => scrollToSection("Gallery")}
          >
            Gallery
          </button>

          <button
            className={active === "EventDetails" ? "active" : ""}
            onClick={() => scrollToSection("EventDetails")}
          >
            Event
          </button>

          <button
            className={active === "Venue" ? "active" : ""}
            onClick={() => scrollToSection("Venue")}
          >
            Venue
          </button>

          <button
            className={active === "RSVP" ? "active" : ""}
            onClick={() => scrollToSection("RSVP")}
          >
            RSVP
          </button>
        </nav>

        <div className="countdown mt-3 flex items-center justify-between w-full gap-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 max-w-[70%]">
            {timeLeft.completed ? (
              <span className="text-[11px] md:text-sm font-medium">
                The celebration has begun
              </span>
            ) : (
              <div className="flex gap-2">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hrs", value: timeLeft.hours },
                  { label: "Min", value: timeLeft.minutes },
                  { label: "Sec", value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center px-2 py-1 rounded-lg bg-black/5 border border-black/10 text-[10px] md:text-xs min-w-[40px]"
                  >
                    <span className="font-semibold text-sm md:text-base leading-none">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="uppercase tracking-[0.16em] mt-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <span className="studioname text-right flex-1">
            {weddingData.studioname}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;