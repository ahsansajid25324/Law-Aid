import "../../styles/EndSection.css";
import "../../styles/HeroSection.css";

const LegalSection = () => {
  return (
    <section className="end-section">
      <div className="container px-0 end-content">
        <div>
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
      </div>
    </section>
  );
};

export default LegalSection;
