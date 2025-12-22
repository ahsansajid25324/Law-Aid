import "../../styles/Immigration.css";
import "../../styles/HeroSection.css";
import im from "../../assets/Support2.png";
const Immigration = () => {
  return (
    <section className="imm-support-section">
      <div className="container px-0 imm-support-content">
        {/* TOP SECTION (keep as-is) */}
        <div>
          <h2 className="main-heading text-center">
            Immigration Case Support Services
          </h2>

          <p className="description text-center">
            Comprehensive support designed exclusively for law firms handling
            U.S. immigration matters
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="imm-support-grid">
          {/* LEFT CONTENT */}
          <div className="imm-support-text">
            <h3>Immigrant Visa Case Support</h3>

            <p className="intro-text">
              LawAid supports all major employment-based immigrant visa
              categories, including EB-1, EB-2, EB-2 NIW, EB-3, EB-4, and EB-5.
            </p>

            <h4>Our Support Includes:</h4>

            <ul className="support-list">
              <li>Eligibility review support and category alignment</li>
              <li>Structured organization of supporting documentation</li>
              <li>
                Evidence mapping aligned with USCIS adjudication standards
              </li>
              <li>
                Drafting and organization of case narratives, exhibits, and
                supporting letters
              </li>
              <li>
                Consistency review across forms, filings, and supporting
                materials
              </li>
              <li>Pre-submission quality control to reduce RFE risk</li>
              <li>
                Case tracking, deadline monitoring, and filing readiness
                coordination
              </li>
            </ul>

            <div className="law-firm-box">
              <p className="law-text">For Law Firms, This Provides:</p>
              <ul>
                <li>Scalable case preparation capacity</li>
                <li>Consistent documentation quality across caseloads</li>
                <li>
                  Reduced internal workload without compromising attorney
                  oversight
                </li>
                <li>Improved efficiency and submission readiness</li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="imm-support-image">
            <img src={im} alt="Immigration Case Support" />
          </div>
        </div>
      </div>

      <div className="container px-0 imm-support-content">
        {/* MAIN CONTENT */}
        <div className="imm-reverse-grid">
          {/* LEFT CONTENT */}

          {/* RIGHT IMAGE */}
          <div className="imm-support-image mt-2 mt-md-0">
            <img src={im} alt="Immigration Case Support" />
          </div>
          <div className="imm-support-text mt-0 mt-md-0">
            <h3>Non-Immigrant Visa Case Support</h3>

            <p className="intro-text">
              LawAid provides comprehensive support across all major
              non-immigrant visa categories, including B, F, H, L, E, O, P, R,
              TN, and J visas.
            </p>

            <h4>Our Support Includes:</h4>

            <ul className="support-list">
              <li>Visa-specific eligibility framework support</li>
              <li>Case-level documentation planning and organization</li>
              <li>Assembly and review of petitions and supporting exhibits</li>
              <li>Compliance checks aligned with visa category requirements</li>
              <li>Deadline management and filing readiness support</li>
              <li>Internal review processes to reduce RFE exposure</li>
              <li>
                Support for new filings, extensions, amendments, and renewals
              </li>
            </ul>

            <div className="law-firm-box">
              <p className="law-text">For Law Firms, This Provides:</p>
              <ul>
                <li>
                  On-demand operational capacity during high-volume periods
                </li>
                <li>
                  Uniform quality standards across multiple visa categories
                </li>
                <li>Reduced dependency on in-house staffing and training</li>
                <li>
                  Predictable execution within attorney-directed workflows
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-0 imm-support-content">
        {/* MAIN CONTENT */}
        <div className="imm-support-grid">
          {/* LEFT CONTENT */}

          {/* RIGHT IMAGE */}

          <div className="imm-support-text">
            <h3>Business Plan Creation (Immigration-Focused)</h3>

            <p className="intro-text">
              LawAid develops immigration-compliant and adjudication-ready
              business plans used in support of E-2, L-1, EB-5, and other
              employment-based filings.
            </p>

            <h4>Key Components:</h4>

            <ul className="support-list">
              <li>Executive Summary</li>
              <li>Market Analysis</li>
              <li>Competitive Analysis</li>
              <li>Business Model & Operations</li>
              <li>Financial Projections</li>
              <li>Growth and Hiring Plans</li>
            </ul>

            <div className="imm-testimonial">
              <p>
                <em>
                  All plans are tailored to the specific visa category, business
                  structure, and case strategy defined by the attorney.
                </em>
              </p>
            </div>
          </div>
          <div className="imm-support-image">
            <img src={im} alt="Immigration Case Support" />
          </div>
        </div>
      </div>

      <div className="container px-0 imm-support-content">
        {/* MAIN CONTENT */}
        <div className="imm-reverse-grid">
          {/* LEFT CONTENT */}

          {/* RIGHT IMAGE */}
          <div className="imm-support-image mt-2 mt-md-0">
            <img src={im} alt="Immigration Case Support" />
          </div>
          <div className="imm-support-text mt-0 mt-md-0">
            <h3>Company Formation Support (All U.S. States)</h3>

            <p className="intro-text">
              LawAid assists law firms in supporting their clients with U.S.
              entity formation across all states.
            </p>

            <h4>Key Components:</h4>

            <ul className="support-list">
              <li>Entity structure coordination</li>
              <li>State registration filings</li>
              <li>EIN application support</li>
              <li>Initial compliance alignment</li>
            </ul>

            <div className="imm-testimonial">
              <p>
                <em>
                  Our support ensures that entity formation decisions remain
                  aligned with immigration case strategy and regulatory
                  requirements.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-0 imm-support-content">
        {/* MAIN CONTENT */}
        <div className="imm-support-grid">
          {/* LEFT CONTENT */}

          {/* RIGHT IMAGE */}

          <div className="imm-support-text">
            <h3>Business Identification & Acquisition Support (E-2 / L-1)</h3>

            <p className="intro-text">
              LawAid provides specialized operational support for law firms
              representing E-2 Treaty Investors and L-1 Intra-Company Transfer
              clients.
            </p>

            <h4>Key Components:</h4>

            <ul className="support-list">
              <li>Immigration-aligned business eligibility screening</li>
              <li>Business sourcing and preliminary evaluation</li>
              <li>Operational and financial review support</li>
              <li>
                Documentation coordination for acquisitions or new ventures
              </li>
              <li>Transition and post-acquisition readiness support</li>
            </ul>

            <div className="imm-testimonial">
              <p>
                <em>
                  This service reduces risk for both attorneys and clients by
                  ensuring business decisions support visa eligibility and
                  long-term compliance.
                </em>
              </p>
            </div>
          </div>
          <div className="imm-support-image">
            <img src={im} alt="Immigration Case Support" />
          </div>
        </div>
      </div>

      <div className="container px-0 imm-support-content">
        {/* MAIN CONTENT */}
        <div className="imm-reverse-grid">
          {/* LEFT CONTENT */}

          {/* RIGHT IMAGE */}
          <div className="imm-support-image mt-2 mt-md-0">
            <img src={im} alt="Immigration Case Support" />
          </div>
          <div className="imm-support-text mt-0 mt-md-0">
            <h3>Humanitarian Relief Case Support</h3>

            <p className="intro-text">
              LawAid supports law firms handling humanitarian relief matters,
              including asylum, VAWA, U visas, T visas, TPS, CAT, and related
              protections.
            </p>

            <h4>Key Components:</h4>

            <ul className="support-list">
              <li>Organized evidence compilation</li>
              <li>Consistent narrative structuring</li>
              <li>Documentation accuracy and confidentiality</li>
              <li>Attorney-led case preparation support</li>
            </ul>

            <div className="imm-testimonial">
              <p>
                <em>
                  All humanitarian case support is handled with heightened
                  sensitivity, confidentiality, and procedural care.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immigration;
