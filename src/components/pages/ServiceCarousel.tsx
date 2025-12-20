import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../../styles/ServiceCarousel.css";
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react";

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

// ✅ Mobile detector (SSR safe)
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const ServiceCarousel: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="sc-section">
      <div className="container px-0">
        {isMobile ? (
          <Splide
            options={{
              perPage: 1,
              gap: 16,
              arrows: true,
              pagination: false,
              drag: "free",
              type: "loop",
            }}
          >
            {serviceCarouselData.map((item, index) => (
              <SplideSlide key={index}>
                <div className="sc-card">
                  <div className="sc-card-header">
                    <div className="sc-card-icon">{item.icon}</div>
                  </div>

                  <div className="sc-card-content">
                    <h3 className="sc-card-title">{item.title}</h3>
                    <p className="sc-card-description">{item.description}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="sc-grid">
            {serviceCarouselData.map((item, index) => (
              <div key={index} className="sc-card">
                <div className="sc-card-header">
                  <div className="sc-card-icon">{item.icon}</div>
                </div>

                <div className="sc-card-content">
                  <h3 className="sc-card-title">{item.title}</h3>
                  <p className="sc-card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="sc-testimonial">
          <p>
            <em>
              "All work is performed strictly within permitted support
              functions, preserving attorney authority at every stage."
            </em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
