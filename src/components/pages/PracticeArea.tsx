import React from "react";
import "../../styles/PracticeArea.css";

const practiceAreasData = [
  {
    title: "Solo Immigration Attorneys",
    number: "01",
    description:
      "Individual practitioners seeking reliable case support and documentation services to scale their practice",
  },
  {
    title: "Boutique Immigration & Humanitarian Firms",
    number: "02",
    description:
      "Specialized practices requiring expert case preparation and research support",
  },
  {
    title: "Multi-Attorney Practices",
    number: "03",
    description:
      "Firms managing high-volume caseloads with complex procedural requirements",
  },
  {
    title: "Business Immigration Specialists",
    number: "04",
    description:
      "Practices representing investors, entrepreneurs, and corporate clients",
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <section className="practice-areas-section">
      <div className="px-0 container">
        <div className="practice-areas-grid">
          {practiceAreasData.map((area, index) => (
            <div className="practice-area-card" key={index}>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{area.title}</h3>
                  <span className="card-number">{area.number}</span>
                </div>
                <p className="card-description">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
