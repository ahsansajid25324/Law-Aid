import { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../assets/LogoW.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface DropdownItem {
  name: string;
  hash?: string;
  path?: string;
}

interface NavLink {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Immigration Case Support Services", path: "/immigration-services" },
        { name: "Business Plan", path: "/business-plan" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const isLinkActive = (link: NavLink): boolean => {
    if (location.pathname === link.path) return true;
    
    if (link.dropdown) {
      return link.dropdown.some(
        (sub) => sub.path === location.pathname || sub.hash === location.pathname
      );
    }
    
    return false;
  };

  const handleDropdownClick = (link: NavLink, sub: DropdownItem) => {
    setOpenDrawer(false);
    setShowDropdown(false);

    const targetPath = sub.path || link.path;

    if (sub.hash) {
      if (location.pathname !== targetPath) {
        navigate(targetPath);
        setTimeout(() => {
          const element = document.getElementById(sub.hash!.replace("#", ""));
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const element = document.getElementById(sub.hash.replace("#", ""));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (targetPath) {
      navigate(targetPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className={`main-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 py-3 navbar">
          <div className="logo">
            <img width={110} src={Logo} alt="LawAid Logo" />
          </div>

          <div className="d-flex gap-4 align-items-center">
            <ul className="nav-links">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <li
                      key={link.name}
                      className={`dropdown-container ${
                        isLinkActive(link) ? "active" : ""
                      }`}
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      {/* FIXED: Changed from <Link> to a button behavior so clicking it doesn't navigate */}
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          setShowDropdown(!showDropdown);
                        }}
                        className="d-flex align-items-center gap-1"
                        style={{ cursor: "pointer" }}
                      >
                        {link.name} <IoChevronDown size={14} />
                      </span>

                      {showDropdown && (
                        <ul className="dropdown-menu-custom">
                          {link.dropdown.map((sub) => (
                            <li
                              key={sub.name}
                              onClick={() => handleDropdownClick(link, sub)}
                            >
                              {sub.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li
                    key={link.name}
                    className={isLinkActive(link) ? "active" : ""}
                  >
                    <Link to={link.path} onClick={handleNavClick}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              className="consult-btn"
              onClick={() => {
                window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
              }}
            >
              Begin Consultation
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className={`mobile-navbar${scrolled ? " scrolled" : ""}`}>
        <nav className="container px-0 navbar">
          <div className="logo">
            <img width={80} src={Logo} alt="LawAid Logo" />
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

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${openDrawer ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <IoClose
            size={22}
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDrawer(false)}
          />
        </div>

        <ul className="drawer-links">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <li
                  key={link.name}
                  className={`mobile-dropdown-container ${
                    isLinkActive(link) ? "active" : ""
                  }`}
                >
                  <div
                    className="d-flex justify-content-between align-items-center w-100"
                    style={{ cursor: "pointer" }}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>{link.name}</span>
                    <IoChevronDown
                      style={{
                        transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                        transition: "0.2s",
                      }}
                    />
                  </div>

                  {mobileServicesOpen && (
                    <ul className="mobile-sub-links">
                      {link.dropdown.map((sub) => (
                        <li
                          key={sub.name}
                          onClick={() => handleDropdownClick(link, sub)}
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li
                key={link.name}
                className={isLinkActive(link) ? "active" : ""}
                onClick={() => {
                  handleNavClick();
                  setOpenDrawer(false);
                  navigate(link.path);
                }}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            window.open("https://zfrmz.com/tmeXpeb2zZy1P8Dj9gTb", "_blank");
          }}
          className="drawer-btn"
        >
          Begin Consultation
        </button>
      </div>
    </>
  );
};

export default Navbar;