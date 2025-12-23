import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import ExecutionSection from "../components/pages/ExecutionSection";
import Professional from "../components/pages/Professional";
import Vendor from "../components/pages/Vendor";
const About = () => {
  const heroData = {
    subtitle: "ABOUT US",
    title: "Precision. Discipline. Accountability.",
    description:
      "LawAid Management exists to strengthen attorney-led representation through structured legal support, immigration-aligned business services, and reliable execution at scale.",
    stats: [
      { number: "3+", label: "Years of Service" },
      { number: "2500+", label: "Cases Delivered" },
      { number: "20+", label: "Law Firms Partners" },
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
      <Vendor />
      <Footer />
    </>
  );
};

export default About;
