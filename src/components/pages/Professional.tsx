import "../../styles/Professional.css";
import "../../styles/HeroSection.css";
import ServiceCarousel from "./ServiceCarousel";

const Professional = () => {
  return (
    <section className="pro-section">
      <div className="container px-0 pro-content">
        <div>
          <div className="subtitle-with-line  justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle text-center">WHAT WE DO</span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading  text-center">
            Professional Extension of Your Firm
          </h2>
          <p className="pro-description text-center">
            LawAid provides legal support services, business advisory, and
            operational execution designed specifically for law firm workflows.
            We do not replace legal counsel. Instead, we operate as a
            professional extension of the firm—supporting attorneys by
            strengthening case preparation, improving documentation quality, and
            increasing operational efficiency.
          </p>
        </div>
      </div>
      <ServiceCarousel />
    </section>
  );
};

export default Professional;
