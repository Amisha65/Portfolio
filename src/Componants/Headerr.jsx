import css from "./Headerr.module.css";

const Headerr = () => {
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
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Education</a>
            <a href="#">Contact</a>
          </div>

          <div className={`col-2 d-flex justify-content-center`}>
            <button
              className={`${css.hireMe} col-3 d-flex justify-content-center align-items-center ps-3 pe-3 text-white `}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headerr;
