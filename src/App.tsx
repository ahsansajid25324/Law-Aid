import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCountry } from "./hooks/useCountry";
const App = () => {
  const location = useLocation();
  const { country, loading } = useCountry();
  console.log("User country:", country, "Loading:", loading);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
