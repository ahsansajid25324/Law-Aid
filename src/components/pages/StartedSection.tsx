import "../../styles/StartedSection.css";
import "../../styles/HeroSection.css";
const StartedSection = () => {
  return (
    <section className="started-section">
      <div className="container px-0 started-content">
        <div className="set-started">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle">GET STARTED</span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading text-white">
            Ready to Strengthen Your Firm's Capacity?
          </h2>
          <p className="started-description text-white ">
            Partner with LawAid to support your immigration, business, and
            humanitarian cases with precision, consistency, and scale.
          </p>
        </div>
        <div className="hero-actions">
          <button className="primary-btn">Start a Law Firm Inquiry</button>
          <button className="secondary-btn">Explore Our Services</button>
        </div>
      </div>
    </section>
  );
};

export default StartedSection;
