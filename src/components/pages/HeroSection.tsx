import { useNavigate } from "react-router-dom";
import "../../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing-container">
        <div className="container px-0  hero-section">
          <div className="d-flex align-items-center">
            <span className="subtitle-line"></span>
            <span className="subtitle">U.S. LEGAL & BUSINESS CONSULTANCY</span>
          </div>
          <h1>
            Legal Precision.
            <br />
            Business Strategy.
            <br />
            Reliable Execution.
          </h1>
          <p>
            LawAid partners with attorneys and law firms across the United
            States, delivering structured immigration, business, and
            humanitarian case support services with unwavering precision.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Start a Law Firm Inquiry</button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/services")}
            >
              Explore Our Services
            </button>
          </div>
          <div className="stats">
            <div>
              <span className="stat-number">150+</span>
              <span className="stat-label">Law Firms Served</span>
            </div>
            <div>
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div>
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
