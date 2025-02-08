import css from "./Footer.module.css";

const Footer = () => {
  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={`${css.containerBox} container-fluid pt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Amisha Dhanawade</p>
            </div>

            <div
              className={`${css.links} col-12 d-flex justify-content-center gap-3`}
            >
              <button onClick={() => handleScroll("home")}>Home</button>
              <button onClick={() => handleScroll("about")}>About</button>
              <button onClick={() => handleScroll("skills")}>Skills</button>
              <button onClick={() => handleScroll("education")}>
                Education
              </button>
              <button onClick={() => handleScroll("contact")}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
