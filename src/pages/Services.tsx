import Footer from "../components/pages/Footer";
import Immigration from "../components/pages/Immigration";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import Practice from "../components/pages/Practice";
import StartedSection from "../components/pages/StartedSection";

const Services = () => {
  const heroData = {
    subtitle: "OUR SERVICES",
    title: "Immigration Case Support Services",
    description:
      "Structured, scalable support designed exclusively for U.S. immigration attorneys and law firms—strengthening attorney-led representation through reliable execution.",
    stats: [
      { number: "6", label: "Core Services" },
      { number: "2500+", label: "Cases Delivered" },
      { number: "100%", label: "Attorney-Controlled" },
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

      <Practice />
      <Immigration />
      <StartedSection
        title="Ready to Scale Your Practice?"
        subtitle="Partner with LawAid to enhance your firm's capacity while maintaining complete control over legal strategy and client representation."
      />
      <Footer />
    </>
  );
};

export default Services;
