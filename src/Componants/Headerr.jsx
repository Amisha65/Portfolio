import css from "./Headerr.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Headerr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`${css.mainContainer} container-fluid position-sticky top-0 z-3 bg-white`}
      >
        <div className={`${css.navBar} container`}>
          <div className={`${css.myName}`}>
            <h1>Amisha</h1>
          </div>

          <div
            className={`${css.menuPanel} ${isMenuOpen ? css.menuOpen : ""}`}
          >
            <div className={`${css.links}`}>
              <button onClick={() => handleScroll("home")}>Home</button>
              <button onClick={() => handleScroll("about")}>About</button>
              <button onClick={() => handleScroll("skills")}>Skills</button>
              <button onClick={() => handleScroll("education")}>Education</button>
              <button onClick={() => handleScroll("contact")}>Contact</button>
            </div>

            <button
              className={`${css.hireMe} ${css.mobileHireMe} d-flex justify-content-center align-items-center ps-3 pe-3 text-white`}
              onClick={() => handleScroll("contact")}
            >
              Hire Me <GoArrowUpRight className={css.hireMeIcon} />
            </button>
          </div>

          <div className={css.desktopActions}>
            <button
              className={`${css.hireMe} d-flex justify-content-center align-items-center ps-3 pe-3 text-white`}
              onClick={() => handleScroll("contact")}
            >
              Hire Me <GoArrowUpRight className={css.hireMeIcon} />
            </button>
          </div>

          <button
            className={css.menuToggle}
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Headerr;
