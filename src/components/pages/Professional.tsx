import "../../styles/Professional.css";
import "../../styles/HeroSection.css";
import ServiceCarousel from "./ServiceCarousel";
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react";

const Professional = () => {
  const serviceCarouselData = [
    {
      icon: <CheckCircle2 />,
      title: "Hybrid Service Model",
      description:
        "Legal expertise, business acumen, and operational excellence unified in a single partnership",
    },
    {
      icon: <Shield />,
      title: "Compliance-Driven Workflows",
      description:
        "Every deliverable structured to meet USCIS adjudication and evidentiary standards",
    },
    {
      icon: <Users />,
      title: "Scalable Without Overhead",
      description:
        "Expand your firm's capacity without hiring, training, or infrastructure investment",
    },
    {
      icon: <TrendingUp />,
      title: "Immigration-Specific Expertise",
      description:
        "Deep knowledge of visa categories, regulatory updates, and case strategy",
    },
  ];
  return (
    <section className="pro-section">
      <div className="container px-0 pro-content">
        <div>
          <div className="subtitle-with-line  justify-content-center">
            <span className="subtitle-line "></span>
            <span className="subtitle subtitle-right text-center">WHAT WE DO</span>
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
      <ServiceCarousel
        data={serviceCarouselData}
        testimonial="All work is performed strictly within permitted support functions, preserving attorney authority at every stage."
      />
    </section>
  );
};

export default Professional;
