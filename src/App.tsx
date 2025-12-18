import HeroSection from "./components/pages/HeroSection";
import LegalSection from "./components/pages/LegalSection";
import LegalSupportSection from "./components/pages/LegalSupportSection";
import Navbar from "./components/pages/Navbar";
import "./styles/HeroSection.css";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LegalSupportSection />
      <LegalSection />
    </>
  );
};

export default App;
