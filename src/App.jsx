import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Gallery from "./components/Gallery";
import EventDetails from "./components/EventDetails";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Header from "./components/Header";
import FOOTER from "./components/FOOTER";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <>
           
          <Header/>
     <section className="relative"  >
    <Hero />
  <div className="absolute opacity-60 bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none " />
</section>     
 
  
<section className="relative">
  <OurStory />
 
 <div className="absolute opacity-60 top-0 bottom-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />
  <div className="absolute  opacity-70 bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
</section>
         
   
  
       <section className="relative bg-[#e0c78d]">
 <Gallery />

  {/* Soft glowing feather */}
  <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white blur-2xl opacity-90" />
  </div>
</section>
          <section className="relative bg-[#d4bf9d]">
   <EventDetails />

  {/* Soft glowing feather */}
  <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white blur-2xl opacity-90" />
  </div>
</section>
<Venue />
    <RSVP />
         <FOOTER/>
        </>
      )}
    </>
  );
}