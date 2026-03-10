import Footer from "../components/pages/Footer";
import Immigration from "../components/pages/Immigration";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import Practice from "../components/pages/Practice";
import StartedSection from "../components/pages/StartedSection";
import ServiceBg from "../assets/ServiceBg.png";
const Services = () => {
  const heroData = {
    subtitle: "OUR SERVICES",
    title: "Immigration & Business Support Services",
    description:
      "Structured, scalable support designed exclusively for U.S. Immigration Attorneys / law firms & foreign businesses-through reliable execution.",
    stats: [
      { number: "6", label: "Core Services" },
      { number: "2500+", label: "Cases Delivered" },
      { number: "100%", label: "Attorney-Controlled" },
    ],
  };

  // fds
  return (
    <>
      <Navbar />
      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={ServiceBg}
        description={heroData.description}
        stats={heroData.stats}
      />

      <Practice />
      <Immigration />
      <StartedSection
        title="Ready to Scale Your Practice?"
        subtitle="Partner with LawAid management to enhance your firm's capacity while maintaining complete control over legal strategy and client representation."
      />
      <Footer />
    </>
  );
};

export default Services;
