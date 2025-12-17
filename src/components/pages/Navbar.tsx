import { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`main-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 py-3 navbar">
          <div className="logo">
            <img src={Logo} alt="LawAid Logo" />
          </div>
          <div className="d-flex gap-4 align-items-center">
            <ul className="nav-links">
              <li>Services</li>
              <li>About</li>
              <li>Expertise</li>
              <li>Contact</li>
            </ul>
            <button className="consult-btn">Begin Consultation</button>
          </div>
        </nav>
      </div>
      <div className={`mobile-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0  navbar">
          <div className="logo">
            <img width={140} height={20} src={Logo} alt="LawAid Logo" />
          </div>
          <div>
            <GiHamburgerMenu color="#fff" size={18} />
          </div>
        </nav>
      </div>
    </>
  );
};


// fdsd

export default Navbar;
