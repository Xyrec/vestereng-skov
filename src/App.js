// Import af Routes og Route, så vi kan lave siden til en Single Page Application
import { Routes, Route, useLocation } from "react-router-dom";
// Import af alle custom components der skal bruges på siden
import Nav from './Nav';
import Footer from './Footer';
import Frontpage from './Frontpage';
import Skoven from './Skoven';
import Aktiviteter from './Aktiviteter';
import Udlejning from './Udlejning';
import Shelter from './Shelter';
// Import af useEffect, som bruges til scroll funktionen
import { useEffect } from "react";

function useScrollToTop() {
  const { pathname } = useLocation(); // React hook "useLocation" som henter den nuværende URL-sti

  useEffect(() => { // useEffect, der kører en funktion når dependency ændrer sig
    window.scrollTo(0, 0); // Scroller til toppen af siden
  }, [pathname]); // (dependency) URL-stien ændrer sig
}

export default function App() {
  // Scroll restoration til React-Router - normalt når man loader en side, bliver man automatisk smidt op i toppen af siden,
  // men fordi vi har lavet en SPA, skal man gendanne denne funktionalitet manuelt.
  // Denne løsning virker ikke 100% - jeg har forsøgt at løse det, men det ser ud til mange andre har problemer
  // med at få scroll restoration til at virke med react-router v6.
  useScrollToTop(); 
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <Nav />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="om-skoven" element={<Skoven />} />
          <Route path="aktiviteter" element={<Aktiviteter />} />
          <Route path="udlejning" element={<Udlejning />} />
          <Route path="udlejning/shelter" element={<Shelter />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}