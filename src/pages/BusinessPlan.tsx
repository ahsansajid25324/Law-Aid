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
      "LawAid Management partners with immigration law firms across the U.S. to prepare E-2 and L-1 business plans structured around the specific evidentiary standards USCIS adjudicators apply — so your clients' petitions are supported by thorough, credible documentation.",
    stats: [
      { number: "E-2 / L-1", label: "Specialized Plans" },
      { number: "From $500", label: "Introductory Pricing" },
      { number: "5–7 Days", label: "Turnaround Time" },
      { number: "Unlimited", label: "Revisions Until Submission" },
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
    .responsive-grid-2col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 32px;
    }
    .responsive-list-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
    .l1-tab-panel {
      background: #fff;
      border: 1px solid #e8e8e8;
      padding: 2rem;
    }
    .l1-sub-item {
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid #f0f0f0;
    }
    .l1-sub-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .inclusions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 10px;
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
              <div className="advantage-icon">📄</div>
              <h3 className="advantage-card-title">E-2 Treaty Investor Plans</h3>
              <p className="advantage-card-description">
                Substantiality, funds at risk, non-marginality, active direction — addressed directly and credibly.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">🏢</div>
              <h3 className="advantage-card-title">L-1A Managerial & Executive Plans</h3>
              <p className="advantage-card-description">
                New office requirements, executive capacity, entity relationships — built for RFE-heavy L-1A cases.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">🔬</div>
              <h3 className="advantage-card-title">L-1B Specialized Knowledge Plans</h3>
              <p className="advantage-card-description">
                Proprietary knowledge articulation, U.S. operations necessity — distinguishing genuine specialization.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">⚡</div>
              <h3 className="advantage-card-title">RFE Response Documentation</h3>
              <p className="advantage-card-description">
                Targeted supplemental business documentation to address requests for evidence when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Work With Us */}
      <section className="advantage-section" style={{ padding: "4rem 1rem" }}>
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
            <span className="subtitle subtitle-right">The Challenge</span>
          </div>
          <h2
            className="main-heading"
            style={{ fontSize: "calc(1.8rem + 1vw)", marginBottom: "1rem" }}
          >
            Why Attorneys Work With Us
          </h2>
          <p className="advantage-description" style={{ maxWidth: "800px" }}>
            Business documentation is not where your time belongs. Most immigration attorneys either
            draft business plans in-house — pulling hours away from legal strategy — or rely on
            clients to produce documentation that rarely meets USCIS standards. Neither scales
            well, and both carry preventable risk.
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
              <h3 className="advantage-card-title">Attorney Time Is Legal Time</h3>
              <p className="advantage-card-description">
                Every hour spent structuring a business narrative or building financial projections
                is time not spent on petition strategy, legal analysis, or client counsel. We handle
                the execution so you don't have to.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">📋</div>
              <h3 className="advantage-card-title">Client-Submitted Plans Fall Short</h3>
              <p className="advantage-card-description">
                Business plans written by clients rarely address the proportionality test, the
                funds-at-risk standard, or the non-marginality threshold with the depth USCIS
                expects. That creates avoidable exposure in your filing.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <div className="advantage-icon">🔄</div>
              <h3 className="advantage-card-title">Inconsistency Across a Caseload</h3>
              <p className="advantage-card-description">
                Without a reliable support partner, quality varies case to case. We bring a
                consistent standard to every plan — built around the specific evidentiary logic
                USCIS adjudicators apply to E-2 and L-1 petitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-2 Treaty Investor Section */}
      <section
        className="advantage-section"
        style={{ backgroundColor: "#ffffff", padding: "4rem 1rem" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <div className="set-advantage" style={{ marginBottom: "2rem" }}>
            <div className="subtitle-with-line">
              <span className="subtitle-line"></span>
              <span
                className="subtitle subtitle-right"
                style={{ color: "rgba(15, 40, 52, 1)" }}
              >
                E-2 Treaty Investor
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
              Plans Built Around Every Element USCIS Evaluates
            </h2>
            <p className="advantage-description" style={{ maxWidth: "800px" }}>
              Our E-2 business plans are drafted to directly address the adjudication criteria —
              not just to describe the business, but to substantiate the investment, establish
              non-marginality, and document active direction in a way that holds up under USCIS
              review. Each plan includes a proportionality analysis, 3–5 year financial projections
              with conservative, base, and optimistic scenarios, job creation forecasts, and
              economic contribution analysis.
            </p>
          </div>

          <div className="responsive-grid-auto">
            {[
              {
                num: "01",
                title: "Substantiality of Investment",
                desc:
                  "We document that the investment is substantial relative to the total cost of establishing or acquiring the enterprise, with a proportionality analysis supported by sourced industry benchmarks, comparables, and a clear breakdown of funds committed versus capital earmarked for future operations.",
              },
              {
                num: "02",
                title: "Funds at Risk",
                desc:
                  "We clearly establish that capital is irrevocably committed and subject to partial or total loss — referencing supporting documentation such as wire transfers, purchase agreements, lease agreements, and invoices to demonstrate funds actively deployed.",
              },
              {
                num: "03",
                title: "Non-Marginality",
                desc:
                  "One of the most scrutinized elements in E-2 adjudications. We present projections demonstrating that the enterprise has the present or prospective capacity to generate income significantly beyond merely providing a living for the investor and family.",
              },
              {
                num: "04",
                title: "Active Development & Direction",
                desc:
                  "We document that the investor is not passive — outlining their operational role, day-to-day responsibilities, and decision-making authority within the organizational structure to address this element directly and credibly.",
              },
              {
                num: "05",
                title: "Real and Operating Enterprise",
                desc:
                  "We ensure the plan reflects a genuine commercial enterprise — not a paper company — with physical presence, operational infrastructure, and a credible go-to-market strategy that demonstrates commercial viability.",
              },
              {
                num: "06",
                title: "Treaty Country Nexus",
                desc:
                  "Where relevant, we note the nationality tie and ensure the business narrative is consistent with the qualifying investment origin — maintaining coherence across the full petition package.",
              },
            ].map((item) => (
              <div className="advantage-card" key={item.num} style={{ height: "100%" }}>
                <div className="advantage-icon">{item.num}</div>
                <h3 className="advantage-card-title">{item.title}</h3>
                <p className="advantage-card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L-1 Intracompany Section */}
      <section className="advantage-section" style={{ padding: "4rem 1rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            // padding: "0 1rem",
          }}
        >
          <div className="set-advantage" style={{ marginBottom: "2rem" }}>
            <div className="subtitle-with-line">
              <span className="subtitle-line"></span>
              <span className="subtitle subtitle-right">L-1 Intracompany Transferee</span>
            </div>
            <h2
              className="main-heading"
              style={{ fontSize: "calc(1.8rem + 1vw)", marginBottom: "1rem" }}
            >
              Separate Plans for L-1A and L-1B — Because the Criteria Are Different
            </h2>
            <p className="advantage-description" style={{ maxWidth: "800px" }}>
              L-1 business plans need to establish the qualifying organizational relationship,
              document continuity of employment, and define the beneficiary's role with the
              precision USCIS applies in RFE-heavy L-1A and L-1B cases.
            </p>
          </div>

          <div className="responsive-grid-2col">
            {/* L-1A */}
            <div className="l1-tab-panel">
              <h3
                style={{
                  color: "rgba(15, 40, 52, 1)",
                  fontSize: "1.3rem",
                  marginBottom: "0.25rem",
                }}
              >
                L-1A — Managers & Executives
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#888",
                  marginBottom: "1.5rem",
                }}
              >
                For intracompany transferees in qualifying managerial or executive roles — including
                new U.S. office petitions.
              </p>
              {[
                {
                  title: "Qualifying Organizational Relationship",
                  desc:
                    "We document the legal and operational relationship between the foreign and U.S. entities — parent, subsidiary, affiliate, or branch — with supporting corporate structure charts and entity documentation.",
                },
                {
                  title: "New Office L-1 Requirements",
                  desc:
                    "For new office petitions, we provide a comprehensive plan demonstrating that the U.S. entity will support a managerial or executive role within one year — including staffing plans, projected revenues, premises documentation, and organizational growth trajectory.",
                },
                {
                  title: "Managerial & Executive Capacity",
                  desc:
                    "We clearly define the beneficiary's role, distinguishing genuine managerial and executive functions from operational or supervisory duties — a distinction USCIS scrutinizes closely in RFE-heavy L-1A cases.",
                },
                {
                  title: "Continuity of Employment",
                  desc:
                    "We establish the required one-year qualifying employment abroad within the last three years, with supporting role descriptions and documentation references.",
                },
              ].map((item, i) => (
                <div className="l1-sub-item" key={i}>
                  <strong
                    style={{ color: "rgba(15, 40, 52, 1)", display: "block", marginBottom: "6px" }}
                  >
                    {item.title}
                  </strong>
                  <p style={{ fontSize: "0.9rem", color: "#555", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* L-1B */}
            <div className="l1-tab-panel">
              <h3
                style={{
                  color: "rgba(15, 40, 52, 1)",
                  fontSize: "1.3rem",
                  marginBottom: "0.25rem",
                }}
              >
                L-1B — Specialized Knowledge
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#888",
                  marginBottom: "1.5rem",
                }}
              >
                For intracompany transferees whose role involves advanced, proprietary knowledge of
                the company's operations, products, or methodologies.
              </p>
              {[
                {
                  title: "Qualifying Organizational Relationship",
                  desc:
                    "We document the legal and operational relationship between entities with the supporting corporate structure documentation required for a complete filing.",
                },
                {
                  title: "Specialized Knowledge Articulation",
                  desc:
                    "We articulate the beneficiary's advanced and proprietary knowledge of the company's products, services, processes, or methodologies — and explain clearly why that knowledge is both specialized and essential to U.S. operations.",
                },
                {
                  title: "U.S. Operations Necessity",
                  desc:
                    "We build the case that the beneficiary's specific knowledge is required for the U.S. entity to function effectively — not simply that the employee is skilled, but that the knowledge itself is non-generic and organizationally critical.",
                },
                {
                  title: "Continuity of Employment",
                  desc:
                    "We establish the required one-year qualifying employment abroad within the last three years, with supporting role descriptions and documentation references.",
                },
              ].map((item, i) => (
                <div className="l1-sub-item" key={i}>
                  <strong
                    style={{ color: "rgba(15, 40, 52, 1)", display: "block", marginBottom: "6px" }}
                  >
                    {item.title}
                  </strong>
                  <p style={{ fontSize: "0.9rem", color: "#555", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
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
              <h2>Every Plan. Every Time. No Tiers.</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Every business plan we produce includes the full scope of documentation needed for
                a well-supported E-2 or L-1 filing — structured for attorney review and ready to file.
              </p>
              <div className="inclusions-grid" style={{ fontSize: "0.92rem", color: "#555" }}>
                <div>• Executive Summary</div>
                <div>• Business Description & Legal Structure</div>
                <div>• Market Research & Industry Analysis</div>
                <div>• Competitive Landscape Overview</div>
                <div>• Marketing & Customer Acquisition Strategy</div>
                <div>• Operations Plan</div>
                <div>• Staffing Plan & Hiring Roadmap</div>
                <div>• 3–5 Year Financial Projections (3 scenarios)</div>
                <div>• Investment Breakdown & Proportionality Analysis <em style={{ fontSize: "0.8rem" }}>(E-2)</em></div>
                <div>• Org Structure & Entity Relationship Docs <em style={{ fontSize: "0.8rem" }}>(L-1)</em></div>
                <div>• Job Creation Forecasts & Economic Contribution Analysis</div>
              </div>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontWeight: "500",
                  color: "rgba(15, 40, 52, 1)",
                }}
              >
                ✓ USCIS-compliant formatting throughout &nbsp;|&nbsp; ✓ Attorney review-ready upon delivery
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
              <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
                Per business plan. Full drafting and financial model included.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem 0",
                  fontSize: "0.9rem",
                  color: "#444",
                }}
              >
                <li style={{ marginBottom: "8px" }}>⚡ 5–7 Business Day Turnaround</li>
                <li style={{ marginBottom: "8px" }}>✓ Complete plan drafting</li>
                <li style={{ marginBottom: "8px" }}>✓ Full financial model included</li>
                <li style={{ marginBottom: "8px" }}>✓ Unlimited revisions until submission</li>
                <li style={{ marginBottom: "8px" }}>✓ USCIS-aligned structure and reasoning</li>
                <li style={{ marginBottom: "8px" }}>✓ White-label delivery — your branding</li>
                <li style={{ marginBottom: "8px" }}>🔒 Confidential, non-disclosed support</li>
              </ul>
              <button
                className="consult-btn"
                style={{ width: "100%", padding: "14px" }}
              >
                Request a Sample Plan
              </button>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#888",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                For high-volume firms, custom pricing and priority turnaround arrangements are
                available. Contact us to discuss.
              </p>
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
            Five steps from intake to filing-ready — designed to integrate directly into your
            existing legal workflow, with minimal burden on your end.
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
              {[
                {
                  step: "1",
                  title: "Case Details Shared",
                  desc: "Attorney shares client information and case requirements.",
                },
                {
                  step: "2",
                  title: "Initial Draft Prepared",
                  desc: "We build a complete first draft aligned to USCIS adjudication criteria.",
                },
                {
                  step: "3",
                  title: "Attorney Review",
                  desc: "You review and request any revisions — we turn them around promptly.",
                },
                {
                  step: "4",
                  title: "Final Document Delivered",
                  desc: "USCIS-ready plan delivered within 5–7 business days.",
                },
                {
                  step: "5",
                  title: "Ongoing Support",
                  desc:
                    "Available for additional filings, RFE documentation, or volume arrangements.",
                },
              ].map((item) => (
                <li className="responsive-list-item" key={item.step}>
                  <div
                    className="advantage-icon"
                    style={{ flexShrink: 0, marginRight: "20px", marginBottom: 0 }}
                  >
                    {item.step}
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <strong>{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
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
          <h2 className="main-heading" style={{ fontSize: "calc(1.8rem + 1vw)" }}>
            Our Commitment
          </h2>
          <p className="advantage-description">
            Built for firms that expect consistency. We work as a behind-the-scenes execution
            partner — not a vendor you have to manage. Every engagement is designed to reduce
            friction on your end.
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
              <h4 className="advantage-card-title">USCIS-Aligned Reasoning</h4>
              <p className="advantage-card-description">
                Our plans are structured around the specific evidentiary logic that E-2 and L-1
                adjudicators apply. Substantiality, non-marginality, funds at risk, managerial
                capacity — addressed directly, not generically.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">White-Label by Default</h4>
              <p className="advantage-card-description">
                Every document is delivered without LawAid branding — ready to present as part of
                your firm's petition package. Our involvement is fully confidential.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Fast, Predictable Turnaround</h4>
              <p className="advantage-card-description">
                Typically 5–7 business days from intake to final document. Filings have deadlines
                — we build our process around that reality.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Unlimited Revisions Until Submission</h4>
              <p className="advantage-card-description">
                We revise until the document meets your standard. No caps, no surcharges — just
                clean execution on what you and your client need.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Minimal Burden on Your End</h4>
              <p className="advantage-card-description">
                We work directly with you and your clients to gather information efficiently.
                You're not managing the process — you're reviewing the output.
              </p>
            </div>
            <div className="advantage-card" style={{ height: "100%" }}>
              <h4 className="advantage-card-title">Volume-Ready for Active Practices</h4>
              <p className="advantage-card-description">
                Whether you need two plans a month or twenty, we can build a workflow and pricing
                model that scales with your caseload. Custom arrangements available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StartedSection
        title="Ready to strengthen your E-2 and L-1 filings?"
        subtitle="We're currently onboarding a limited number of partner firms at our introductory rate. Request a sample plan or reach out to discuss your firm's volume and workflow needs."
      />

      <Footer />
    </>
  );
};

export default BusinessPlan;