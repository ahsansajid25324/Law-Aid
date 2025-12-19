import { Mail, Phone, MapPin } from "lucide-react";
import "../../styles/SemiContact.css";
const SemiContact = () => {
  const semicontact = [
    {
      icon: <Mail />,
      title: "Email",
      description: "contact@lawaid.com",
      quote: "inquiries@lawaid.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      description: "+1 (555) 123-4567",
      quote: "Monday - Friday, 9AM - 6PM EST",
    },
    {
      icon: <MapPin />,
      title: "Location",
      description: "United States",
      quote: "Serving law firms nationwide",
    },
  ];

  return (
    <section className="semicontact-section">
      <div className="container px-0 semicontact-content">
        <div className="semicontact-cards-grid">
          {semicontact.map((advantage, index) => (
            <div key={index} className="semicontact-card">
              <div className="semicontact-icon">{advantage.icon}</div>
              <h3 className="semicontact-card-title">{advantage.title}</h3>
              <p className="semicontact-card-description">
                {advantage.description}
              </p>
              <p className="semicontact-card-quote">
                {advantage.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemiContact;
