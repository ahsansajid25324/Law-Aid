import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import ExecutionSection from "../components/pages/ExecutionSection";
import Professional from "../components/pages/Professional";
const Services = () => {
  const heroData = {
    subtitle: "OUR SERVICES",
    title: "Immigration Case Support Services.",
    description:
      "Structured, scalable support designed exclusively for U.S. immigration attorneys and law firms—strengthening attorney-led representation through reliable execution.",
    stats: [
      { number: "6", label: "Core Services" },
      { number: "25000+", label: "Cases Delivered" },
      { number: "100%", label: "Attorney Controlled" },
    ],
  };

  return (
    <>
      <Navbar />
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        description={heroData.description}
        stats={heroData.stats}
      />
      <ExecutionSection />
      <Professional />
      <Footer />
    </>
  );
};

export default Services;
