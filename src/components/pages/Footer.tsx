import "../../styles/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Column 1 */}
        <div className="footer-col footer-about">
          <img src={Logo} alt="LawAid Management Logo" />
          <p>
            U.S.-based legal and business consultancy partnering with attorneys
            and law firms nationwide.
          </p>

          <div className="footer-social">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col give-margin">
          <h3>Services</h3>
          <ul>
            <li>Immigration Case Support</li>
            <li>Business Plan Creation</li>
            <li>Company Formation</li>
            <li>Business Acquisition</li>
            <li>Humanitarian Relief</li>
            <li>Legal Operations</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Expertise</li>
            <li>Case Studies</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Confidentiality Agreement</li>
            <li>Professional Ethics</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 LawAid Management. All rights reserved.</p>
        <p>Serving U.S. Law Firms with Precision and Integrity</p>
      </div>
    </footer>
  );
};

export default Footer;
