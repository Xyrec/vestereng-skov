import { Routes, Route, useLocation } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import Frontpage from './Frontpage';
import Skoven from './Skoven';
import Aktiviteter from './Aktiviteter';
import Udlejning from './Udlejning';
import Shelter from './Shelter';
import { useEffect } from "react";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default function App() {
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