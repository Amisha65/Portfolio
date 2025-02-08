import css from "./Headerr.module.css";
import { GoArrowUpRight } from "react-icons/go";

const Headerr = () => {
  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`${css.mainContainer} container-fluid position-sticky top-0 z-3 bg-white `}
      >
        <div className={`pt-3 d-flex align-items-center p-1 pb-2`}>
          <div className={`${css.myName} col-3 d-flex justify-content-center`}>
            <h1>Amisha</h1>
          </div>

          <div className={`${css.links} col-7 d-flex justify-content-end`}>
            <button onClick={() => handleScroll("home")}>Home</button>
            <button onClick={() => handleScroll("about")}>About</button>
            <button onClick={() => handleScroll("skills")}>Skills</button>
            <button onClick={() => handleScroll("education")}>Education</button>
            <button onClick={() => handleScroll("contact")}>Contact</button>
          </div>

          <div className={`col-2 d-flex justify-content-center`}>
            <button
              className={`${css.hireMe} col-3 d-flex justify-content-center align-items-center ps-3 pe-3 text-white `}
              onClick={() => handleScroll("contact")}
            >
              Hire Me <GoArrowUpRight className={css.hireMeIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headerr;
