import React, { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const weddingDate = new Date("2026-12-20T00:00:00"); // change to your date

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft("We Are Married! 💍");
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        setTimeLeft(`${days} Days To Go`);
      }
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
      <div className="header-top">
        <h1 className="names"> {weddingData.bride} & {weddingData.groom}</h1>
        

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

      <div className="countdown flex items-center justify-between w-full">
          <span>{timeLeft}</span>
          <span className="studioname"> {weddingData.studioname}</span>
      </div>
    </header>
  );
};

export default Header;