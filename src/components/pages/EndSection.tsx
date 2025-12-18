import "../../styles/EndSection.css";
import "../../styles/HeroSection.css";
import InfoCard from "./InfoCard";
import Icon1 from "../../assets/Support.svg";
import Icon2 from "../../assets/b.svg";
import Icon3 from "../../assets/c.svg";
import Icon4 from "../../assets/d.svg";
import Icon5 from "../../assets/e.svg";
import Icon6 from "../../assets/f.svg";

const EndSection = () => {
  const cardData = [
    {
      icon: <img src={Icon2} alt="Humanitarian Relief Support icon" />,
      title: "Immigration Case Support",
      description:
        "Comprehensive preparation for immigrant & non-immigrant visa categories",
      items: [
        "Family-based petitions",
        "Employment visas",
        "Investment visas",
        "Consular processing",
      ],
    },
    {
      icon: <img src={Icon1} alt="Humanitarian Relief Support icon" />,
      title: "Business Plan Creation",
      description:
        "Immigration-compliant business plans for investor and entrepreneur visas",
      items: [
        "E-2 Treaty Investor",
        "EB-5 Immigrant Investor",
        "L-1 Intracompany Transfer",
        "Market analysis",
      ],
    },
    {
      icon: <img src={Icon3} alt="Humanitarian Relief Support icon" />,
      title: "Company Formation Support",
      description: "Entity formation and structuring across all U.S. states",
      items: [
        "Corporate structuring",
        "Operating agreements",
        "Immigration compliance",
        "State registration",
      ],
    },
    {
      icon: <img src={Icon4} alt="Humanitarian Relief Support icon" />,
      title: "Business Acquisition Support",
      description: "Strategic guidance for E-2 and L-1 visa business purchases",
      items: [
        "Business identification",
        "Due diligence support",
        "Valuation analysis",
        "Acquisition structuring",
      ],
    },
    {
      icon: <img src={Icon5} alt="Humanitarian Relief Support icon" />,
      title: "Humanitarian Relief Support",
      description: "Specialized case preparation for vulnerable populations",
      items: [
        "Asylum applications",
        "VAWA petitions",
        "U & T visas",
        "TPS & CAT",
      ],
    },
    {
      icon: <img src={Icon6} alt="Humanitarian Relief Support icon" />,
      title: "Legal Operations Support",
      description: "Comprehensive law firm operational services",
      items: [
        "Case documentation",
        "Research & analysis",
        "Form preparation",
        "Client communication",
      ],
    },
  ];

  return (
    <section className="end-section">
      <div className="container px-0 end-content">
        <div className="set-margin">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle">CORE SERVICES</span>
          </div>{" "}
          <h2 className="main-heading text-white">
            End-to-End Legal Support Services
          </h2>
          <p className="end-description text-white">
            LawAid exclusively serves attorneys and law firms across the United
            States. Each engagement is structured to align with your practice
            focus, internal processes, timelines, and risk profile.
          </p>
        </div>

        <div className="info-grid">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              items={card.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndSection;
