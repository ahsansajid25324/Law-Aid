import "@splidejs/react-splide/css";
import "../../styles/Touch.css";
import "../../styles/HeroSection.css";

import { Mail, Phone, MapPin } from "lucide-react";
import "../../styles/SemiContact.css";

const semicontact = [
  {
    icon: <Mail />,
    title: "Email",
    description: "filing@law-aid.org",
  },
  {
    icon: <Phone />,
    title: "Phone",
    description: "+1 (888) 512 2168",
    quote: "Monday - Friday, 9AM - 6PM EST",
  },
  {
    icon: <MapPin />,
    title: "Location",
    description: "United States",
    quote: "2600 S Gessner Road, Houston, TX, 77063",
  },
];

// fd
const Touch = () => {
  return (
    <section className="touch-section">
      <div className="container px-0 touch-content">
        <div className="touch-header">
          <h2 className="touch-heading">Get In Touch</h2>

          <p className="touch-description">
            Reach out to discuss partnership opportunities and how we can
            support your firm's growth.
          </p>
        </div>
      </div>

      <div className="container px-0 semicontact-content">
        <div className="semicontact-cards-grid">
          {semicontact.map((advantage, index) => (
            <div key={index} className="semicontact-card">
              <div className="semicontact-icon">{advantage.icon}</div>
              <h3 className="semicontact-card-title">{advantage.title}</h3>
              <p className="semicontact-card-description">
                {advantage.description}
              </p>
              <p className="semicontact-card-quote">{advantage.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Touch;
