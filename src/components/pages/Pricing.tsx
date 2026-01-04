import "../../styles/Pricing.css";
import "../../styles/HeroSection.css";
import Stop from "../../assets/Stop.svg";
import Blacktick from "../../assets/BlackTick.svg";
import Line from "../../assets/line.svg";
const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container px-0 pricing-content">
        <div>
          <div className="subtitle-with-line  justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right text-center">
              CHOOSE YOUR PLAN
            </span>
            <span className="subtitle-line"></span>
          </div>
          <h2 className="main-heading  text-center">
            Choose a Paid Subscription That's Built for Your Law Firm
          </h2>
          <p className="pricing-description text-center">
            Select the plan that fits your firm's needs. All plans include
            comprehensive paralegal support and can be customized for your
            practice.
          </p>
        </div>
      </div>
      <div className="pricing-layout d-flex gap-3">
        <div className="general-pricing-card">
          <h4 className="card-title">GENERAL PRICING</h4>
          <h3 className="card-subtitle">Starting at $500 </h3>

          <p className="card-desc">per case</p>
          <button className="card-btn">Get Started</button>
          <ul className="card-list">
            <li>Standardized per-case pricing</li>
            <li>
              All visa types covered (B1/B2, F1, H1B, O1, E1/E2, L1, etc.)
            </li>
            <li>No additional charges for dependents</li>
            <li>Business plan & company formation options</li>
            <li>Email & phone support</li>
            <li>Standard processing time</li>
            <li>Document review included</li>
          </ul>
        </div>
        <div className="custom-pricing-card">
          <div className="card-badge">FLEXIBLE SOLUTION</div>

          <h4 className="card-title">CUSTOM PRICING</h4>
          <h3 className="card-subtitle">Custom </h3>

          <p className="card-desc">tailored to your needs</p>
          <button className="card-btn">Contact Sales</button>
          <ul className="card-list">
            <li>Volume-based discounts for high-volume firms</li>
            <li>Retainer arrangements available</li>
            <li>Custom service packages tailored to your practice</li>
            <li>Flexible payment terms</li>
            <li>Dedicated account manager</li>
            <li>Priority processing & rush options</li>
            <li>All General Pricing features included</li>
          </ul>
        </div>
      </div>
      <div className="pricing-layout d-flex flex-column">
        <div className="pricing-table-wrapper">
          <table className="pricing-set-table">
            <thead>
              <tr>
                <th>
                  <span>Services Included</span>
                </th>
                <th>General Pricing</th>
                <th style={{ color: "rgba(212, 165, 116, 1)" }}>Custom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standardized Per-Case Pricing</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Volume-Based Discounts</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Retainer Arrangements</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Flexible Payment Terms</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>

              <tr>
                <td>No Additional Charges for Dependents</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Email Support</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Phone Support</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Dedicated Account Manager</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Standard Processing Time</td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
              </tr>
              <tr>
                <td>Priority Processing & Rush Options</td>
                <td>
                  <img src={Line} alt="Stop Icon" />
                </td>
                <td>
                  <img src={Blacktick} alt="Stop Icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>
                  <span>Service Name</span>
                </th>
                <th>Price Per Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI/B2 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>F1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$200</td>
              </tr>
              <tr>
                <td>EI/E2 – CASE PREPARATION ONLY (INITIAL/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr className="highlight">
                <td>
                  EI/E2 – CASE PREP+BUSINESS PLAN+COMPANY FORMATION
                  (INITIAL/COS/EXTENSION)
                  <br></br>
                  <div className="badge">Complete Solution</div>
                </td>
                <td>$3,000</td>
              </tr>
              <tr>
                <td>L1 – CASE PREPARATION ONLY (INITIAL/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr className="highlight">
                <td>
                  L1 – CASE PREP+BUSINESS PLAN+COMPANY FORMATION
                  (INITIAL/COS/EXTENSION)
                  <br></br>
                  <div className="badge">Complete Solution</div>
                </td>
                <td>$3,000</td>
              </tr>
              <tr>
                <td>H1B (INITIAL FILING/COS/EXTENSION)</td>
                <td>$650</td>
              </tr>
              <tr>
                <td>O1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>TN (INITIAL FILING/COS/EXTENSION)</td>
                <td>$1,200</td>
              </tr>
              <tr>
                <td>TN (BORDER ONLY)</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>R1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr>
                <td>P1 (INITIAL FILING/COS/EXTENSION)</td>
                <td className="custom">CUSTOM</td>
              </tr>
              <tr>
                <td>I130 FILING</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>I140 FILING</td>
                <td>$1,500</td>
              </tr>
              <tr>
                <td>I485+I765+I131 (COMBO FILING)</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>DS260</td>
                <td>$700</td>
              </tr>
              <tr>
                <td>N400</td>
                <td>$700</td>
              </tr>
              <tr>
                <td>ETA 9141</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>ETA 9089</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>

          <div className="important-pricing-note">
            <div className="icon-and-content">
              <img className="note-icon" src={Stop} alt="Important Note"></img>
              <div>
                <span className="note-title">Important Pricing Note</span>
                <p className="note-bold">
                  For all non-immigrant cases, we will not charge any extra
                  service charges for cases with dependents.
                </p>
                <p>
                  For example: If an E2 Change of Status has 1 principal and 3
                  dependents, our paralegal service will still cost $2,000.00
                  for that case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
