import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (document.getElementById("ze-snippet")) return;

    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=407014fb-0de6-47f9-8332-022b890b137d";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("ze-snippet");
      if (existingScript) existingScript.remove();
      delete window.zE; // remove Zendesk global object
    };
  }, []);
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
