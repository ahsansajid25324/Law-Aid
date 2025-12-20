import "../../styles/OtherHero.css";

interface Stat {
  number: string;
  label: string;
}

interface OtherHeroProps {
  subtitle: string;
  title: string;
  description: string;
  stats: Stat[];
}

const OtherHero = ({ subtitle, title, description, stats }: OtherHeroProps) => (
  <>
    <div className="other-landing-container">
      <div className="container px-0  other-hero-section">
        <div className="subtitle-with-line">
          <span className="subtitle-line"></span>
          <span className="subtitle">{subtitle}</span>
          <span className="subtitle-line"></span>
        </div>
        <h1 className="text-center">{title}</h1>
        <p className="text-center">{description}</p>

        <div className="stats text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default OtherHero;
