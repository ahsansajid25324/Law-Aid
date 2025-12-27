import "../../styles/Cost.css";
import "../../styles/HeroSection.css";
import ServiceCarousel from "./ServiceCarousel";
import { CheckCircle2 } from "lucide-react";

const Cost = () => {
  const serviceCarouselData = [
    {
      icon: <CheckCircle2 />,
      title: "No Hidden Fees",
      description:
        "Transparent per-case pricing with no surprise charges or add-ons",
    },
    {
      icon: <CheckCircle2 />,
      title: "Family-Friendly",
      description:
        "No additional charges for dependent cases—one price covers the entire family",
    },
    {
      icon: <CheckCircle2 />,
      title: "Scalable Solutions",
      description:
        "Flexible capacity for high-volume periods without per-case rate increases",
    },
    {
      icon: <CheckCircle2 />,
      title: "Custom Options",
      description:
        "Tailored pricing available for complex cases or unique firm requirements",
    },
  ];
  return (
    <section className="cost-section">
      <div className="container px-0 cost-content">
        <div>
          <div className="subtitle-with-line  justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right text-center">
              WHY CHOOSE LAWAID MANAGEMENT
            </span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading  text-center">
            Predictable Costs, Measurable Value
          </h2>
          <p className="cost-description text-center">
            Our pricing structure is designed to eliminate uncertainty and
            provide law firms with scalable, cost-effective support that
            enhances operational efficiency.
          </p>
        </div>
      </div>
      <ServiceCarousel
        data={serviceCarouselData}
        testimonial="All services are delivered within attorney-controlled frameworks, ensuring legal strategy and client representation remain fully under attorney direction."
      />
    </section>
  );
};

export default Cost;
