import { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Services", "About", "Expertise", "Contact"];

  return (
    <>
      {/* Desktop Navbar */}
      <div className={`main-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 py-3 navbar">
          <div className="logo">
            <img src={Logo} alt="LawAid Logo" />
          </div>
          <div className="d-flex gap-4 align-items-center">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className={activeLink === link ? "active" : ""}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                </li>
              ))}
            </ul>
            <button className="consult-btn">Begin Consultation</button>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className={`mobile-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 navbar">
          <div className="logo">
            <img width={140} src={Logo} alt="LawAid Logo" />
          </div>
          <GiHamburgerMenu
            color="#fff"
            size={20}
            onClick={() => setOpenDrawer(true)}
            style={{ cursor: "pointer" }}
          />
        </nav>
      </div>

      {/* Overlay */}
      {openDrawer && (
        <div className="drawer-overlay" onClick={() => setOpenDrawer(false)} />
      )}

      {/* Drawer */}
      <div className={`mobile-drawer ${openDrawer ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <IoClose size={22} onClick={() => setOpenDrawer(false)} />
        </div>

        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li
              key={link}
              className={activeLink === link ? "active" : ""}
              onClick={() => {
                setActiveLink(link);
                setOpenDrawer(false);
              }}
            >
              {link}
            </li>
          ))}
        </ul>

        <button className="drawer-btn">Begin Consultation</button>
      </div>
    </>
  );
};

export default Navbar;
