import Navbar from "../components/pages/Navbar";
import OtherHero from "../components/pages/OtherHero";
import StartedSection from "../components/pages/StartedSection";
import Footer from "../components/pages/Footer";


import ServiceBg from "../assets/ServiceBg.png";

const BusinessPlan = () => {
  const heroData = {
    subtitle: "BUSINESS PLANS",
    title: "USCIS-Compliant Business Plans Built for Immigration Attorneys",
    description:
      "LawAid Management partners with immigration law firms across the U.S. to prepare E2 and L1 business plans that are structured, credible, and ready to file — so you can focus on the law.",
    stats: [
      { number: "E2 / L1", label: "Specialized Plans" },
      { number: "From $500", label: "Introductory Pricing" },
      { number: "100%", label: "White-Label Delivery" },
      { number: "Unlimited", label: "Reasonable Revisions" },
    ],
  };

  const responsiveStyles = `
    .responsive-split-container {
      display: flex;
      flex-direction: column;
    border: 1px solid #e8e8e8;
    }
    @media (min-width: 768px) {
      .responsive-split-container {
        flex-direction: row;
      }
      .responsive-split-left {
        flex: 1.5;
        border-right: 1px solid #e8e8e8;
      }
      .responsive-split-right {
        flex: 1;
      }
    }
    .responsive-grid-auto {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .responsive-list-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <Navbar />

      <OtherHero
        subtitle={heroData.subtitle}
        title={heroData.title}
        backgroundImage={ServiceBg}
        description={heroData.description}
        stats={heroData.stats}
      />

      {/* What We Deliver Section */}
      <section
        className="advantage-section"
        style={{ backgroundColor: "#ffffff", padding: "4rem 1rem" }}
      >
        <div
          className="set-advantage"
          style={{
            padding: "0 1rem",
            maxWidth: "1200px",
            margin: "0 auto 2rem auto",
          }}
        >
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span
              className="subtitle subtitle-right"
              style={{ color: "rgba(15, 40, 52, 1)" }}
            >
              Our Offerings
            </span>
          </div>
          <h2
            className="main-heading"
            style={{
              color: "rgba(15, 40, 52, 1)",
              fontSize: "calc(1.8rem + 1vw)",
              marginBottom: "1rem",
            }}
          >
            What We Deliver
          </h2>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div className="responsive-grid-auto">
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">01</div>
              <h3 className="advantage-card-title">E2 Treaty Investor Plans</h3>
              <p className="advantage-card-description">
                Investment breakdown, market analysis, staffing projections.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">02</div>
              <h3 className="advantage-card-title">
                L1 Intracompany Transfer Plans
              </h3>
              <p className="advantage-card-description">
                Organizational structure, operational strategy, U.S. office
                viability.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">03</div>
              <h3 className="advantage-card-title">
                Franchise & Startup Plans
              </h3>
              <p className="advantage-card-description">
                For new U.S. ventures requiring immigration-grade documentation.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">04</div>
              <h3 className="advantage-card-title">
                RFE Response Documentation
              </h3>
              <p className="advantage-card-description">
                Targeted supplemental business documentation when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Work With Us (The Problem) */}
      <section className="advantage-section" style={{ padding: "4rem 1rem" }}>
        <div
          className="set-advantage"
          style={{
            padding: "0 1rem",
            maxWidth: "1200px",
            margin: "0 auto 2rem auto",
          }}
        >
          <h2
            className="main-heading"
            style={{ fontSize: "calc(1.8rem + 1vw)", marginBottom: "1rem" }}
          >
            Why Attorneys Work With Us
          </h2>
          <p className="advantage-description" style={{ maxWidth: "800px" }}>
            Business plans shouldn't slow down your practice. Most immigration
            attorneys either draft business plans in-house pulling billable
            hours away, or rely on clients to produce documents that rarely meet
            USCIS standards.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div className="responsive-grid-auto">
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">⚖️</div>
              <h3 className="advantage-card-title">Your Time Is Legal Time</h3>
              <p className="advantage-card-description">
                Every hour spent on business documentation is an hour not spent
                on strategy, filings, or client counsel. We handle the execution
                so you don't have to.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">📋</div>
              <h3 className="advantage-card-title">
                Client-Submitted Plans Fall Short
              </h3>
              <p className="advantage-card-description">
                Business plans written by clients often lack the structure,
                financial depth, and USCIS-specific framing that adjudicators
                expect. That's a preventable risk.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">🔄</div>
              <h3 className="advantage-card-title">
                Inconsistency Across Cases
              </h3>
              <p className="advantage-card-description">
                Without a reliable support partner, quality varies case to case.
                We bring a consistent standard to every plan — structured for
                review and built to hold up under scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Pricing Card Layout */}
      <section
        className="advantage-section"
        style={{ backgroundColor: "#ffffff", padding: "4rem 1rem" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div className="responsive-split-container">
            {/* Left Box: Inclusions */}
            <div
              className="workflows-content responsive-split-left"
              style={{ padding: "2rem" }}
            >
              <h2>Everything in Every Plan</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                No tiers, no surprises. Every business plan includes the full
                scope of documentation required for a well-supported filing:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "12px",
                  fontSize: "0.95rem",
                  color: "#555",
                }}
              >
                <div>• Executive Summary</div>
                <div>• Market Research & Analysis</div>
                <div>• Business Description</div>
                <div>• Competitive Landscape</div>
                <div>• Marketing Strategy</div>
                <div>• Operations & Staffing Plan</div>
                <div>• 3–5 Year Financial Projections</div>
                <div>• Investment Breakdown (E2)</div>
              </div>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontWeight: "500",
                  color: "rgba(15, 40, 52, 1)",
                }}
              >
                ✓ USCIS-compliant formatting | ✓ Attorney-review ready
              </p>
            </div>

            {/* Right Box: Pricing Card */}
            <div
              className="workflows-content responsive-split-right"
              style={{
                padding: "2rem",
                background: "rgba(7, 44, 44, 0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                className="subtitle"
                style={{ color: "rgba(15, 40, 52, 0.6)", letterSpacing: "2px" }}
              >
                Introductory Pricing
              </span>
              <div
                style={{
                  fontSize: "calc(2rem + 1vw)",
                  fontWeight: "bold",
                  color: "rgba(15, 40, 52, 1)",
                  margin: "10px 0",
                }}
              >
                from{" "}
                <span style={{ color: "rgba(212, 165, 116, 1)" }}>$500</span>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  marginBottom: "1.5rem",
                }}
              >
                Per business plan. Full drafting, unlimited reasonable
                revisions, and white-label delivery with your branding included.
              </p>
              <button
                className="consult-btn"
                style={{ width: "100%", padding: "14px" }}
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        className="advantage-section"
        style={{
          backgroundColor: "rgba(249, 246, 238, 1)",
          padding: "4rem 1rem",
        }}
      >
        <div
          className="set-advantage"
          style={{
            padding: "0 1rem",
            maxWidth: "1200px",
            margin: "0 auto 2rem auto",
          }}
        >
          <h2 style={{ fontSize: "calc(1.8rem + 1vw)" }}>How It Works</h2>
          <p className="advantage-description">
            Designed to fit seamlessly directly into your existing law firm
            workflow.
          </p>
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div
            className="workflows-content"
            style={{ background: "transparent", padding: 0 }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="responsive-list-item">
                <div
                  className="advantage-icon"
                  style={{
                    flexShrink: 0,
                    marginRight: "20px",
                    marginBottom: 0,
                  }}
                >
                  1
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <strong>Case Details Shared:</strong> Attorney shares client
                  information and case requirements.
                </div>
              </li>
              <li className="responsive-list-item">
                <div
                  className="advantage-icon"
                  style={{
                    flexShrink: 0,
                    marginRight: "20px",
                    marginBottom: 0,
                  }}
                >
                  2
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <strong>Initial Draft Prepared:</strong> We build a complete
                  first draft aligned to USCIS expectations.
                </div>
              </li>
              <li className="responsive-list-item">
                <div
                  className="advantage-icon"
                  style={{
                    flexShrink: 0,
                    marginRight: "20px",
                    marginBottom: 0,
                  }}
                >
                  3
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <strong>Attorney Review:</strong> You review and flag any
                  revisions — we turn them around quickly.
                </div>
              </li>
              <li className="responsive-list-item">
                <div
                  className="advantage-icon"
                  style={{
                    flexShrink: 0,
                    marginRight: "20px",
                    marginBottom: 0,
                  }}
                >
                  4
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <strong>Final Document Delivered:</strong> USCIS-ready plan
                  delivered in your preferred format.
                </div>
              </li>
              <li className="responsive-list-item">
                <div
                  className="advantage-icon"
                  style={{
                    flexShrink: 0,
                    marginRight: "20px",
                    marginBottom: 0,
                  }}
                >
                  5
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <strong>Ongoing Support:</strong> Available for additional
                  filings or RFE documentation as needed.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section
        className="advantage-section"
        style={{ backgroundColor: "#fff", padding: "4rem 1rem" }}
      >
        <div
          className="set-advantage"
          style={{
            padding: "0 1rem",
            maxWidth: "1200px",
            margin: "0 auto 2rem auto",
          }}
        >
          <h2
            className="main-heading"
            style={{ fontSize: "calc(1.8rem + 1vw)" }}
          >
            Our Commitment
          </h2>
          <p className="advantage-description">
            We work as a behind-the-scenes execution partner — not a vendor you
            have to manage.
          </p>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div className="responsive-grid-auto">
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">White-Label by Default</h4>
              <p className="advantage-card-description">
                Our work is yours. Every document is delivered without LawAid
                branding — fully ready to present as your firm's package.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Fast & Predictable</h4>
              <p className="advantage-card-description">
                We understand filings have tight deadlines. Clear communication
                and strict timelines are non-negotiable on our end.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">USCIS-Aligned Reasoning</h4>
              <p className="advantage-card-description">
                Our plans are structured around the specific logic and
                evidentiary thresholds that E2 and L1 adjudicators look for.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Unlimited Revisions</h4>
              <p className="advantage-card-description">
                We revise until the document meets your standard during
                drafting. No caps, no friction — just clean execution.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Strict Confidentiality</h4>
              <p className="advantage-card-description">
                Client information is protected with law-firm-level discretion.
                We never disclose, repurpose, or retain case data.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Volume-Ready Scaling</h4>
              <p className="advantage-card-description">
                Whether you need one plan a month or twenty, we can scale our
                workflow and pricing models with your caseload.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StartedSection
        title="Ready to strengthen your E2 and L1 filings?"
        subtitle="We're currently onboarding a limited number of partner firms. Partner with LawAid management to support your cases with precision, consistency, and scale."
      />

      <Footer />
    </>
  );
};

export default BusinessPlan;
