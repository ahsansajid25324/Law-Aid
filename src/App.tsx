import HeroSection from "./components/pages/HeroSection";
import LegalSection from "./components/pages/LegalSection";
import LegalSupportSection from "./components/pages/LegalSupportSection";
import Navbar from "./components/pages/Navbar";
import EndSection from "./components/pages/EndSection";
import AdvantageSection from "./components/pages/AdvantageSection";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LegalSupportSection />
      <LegalSection />
      <EndSection />
      <AdvantageSection />
    </>
  );
};

export default App;
