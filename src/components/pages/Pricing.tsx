import "../../styles/Pricing.css";
import "../../styles/HeroSection.css";
import Stop from "../../assets/Stop.svg";
import Price from "../../assets/PriceTick.svg";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container px-0 pricing-content">
        <div>
          <div className="subtitle-with-line  justify-content-center">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right text-center">
              PARALEGAL SERVICES
            </span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading  text-center">
            Tentative Paralegal Services Pricing{" "}
          </h2>
          <p className="pricing-description text-center">
            Our pricing is designed to provide law firms with clear, predictable
            costs for immigration case support services. All prices are per case
            and include comprehensive support within attorney-directed
            workflows.
          </p>
        </div>
      </div>
      <div className="pricing-layout">
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
                <td>$500</td>
              </tr>
              <tr>
                <td>F1 (INITIAL FILING/COS/EXTENSION)</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>EI/E2 – CASE PREPARATION ONLY (INITIAL/COS/EXTENSION)</td>
                <td>$2,000</td>
              </tr>
              <tr className="highlight">
                <td>
                  EI/E2 – CASE PREP+BUSINESS PLAN+COMPANY FORMATION
                  (INITIAL/COS/EXTENSION)
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
                <td>$1,000</td>
              </tr>
              <tr>
                <td>N400</td>
                <td>$1,000</td>
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
        <div className="custom-pricing-card">
          <h4 className="card-title">CUSTOM PRICING</h4>

          <div className="card-icon">
            <img src={Price}></img>
          </div>

          <p className="card-desc">
            For high-volume firms or unique case requirements, we offer tailored
            pricing solutions.
          </p>

          <ul className="card-list">
            <li>Volume-based discounts</li>
            <li>Retainer arrangements</li>
            <li>Custom service packages</li>
            <li>Flexible payment terms</li>
          </ul>

          <button className="card-btn">Get Custom Quote</button>

          <span className="card-footnote">
            Our team will respond within 24 hours
          </span>
        </div>
      </div>

      {/* <div className="important-pricing-note">
        <div className="icon-and-content">
          <img className="note-icon" src={Stop} alt="Important Note"></img>
          <div>
            <span className="note-title">Important Pricing Note</span>
            <p className="note-bold">
              For all non-immigrant cases, we will not charge any extra service
              charges for cases with dependents.
            </p>
            <p>
              For example: If an E2 Change of Status has 1 principal and 3
              dependents, our paralegal service will still cost $2,000.00 for
              that case.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Pricing;
