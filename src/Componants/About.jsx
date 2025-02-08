import css from "./About.module.css";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className={`container-fluid my-5 py-5 ${css.mainContainer}`}>
        <div className={`container ${css.subContainer}`}>
          <div className={`row ${css.rowContainer}`}>
            <div
              className={`${css.imageContainer} col-12 col-lg-5 d-flex  flex-wrap justify-content-center align-content-center`}
            >
              <img
                src="Images/my1.jpg"
                alt="Styled"
                className={css.styledImage}
              />
              <div className={css.decorativeElements}>
                <div className={css.topLeftLines}></div>
                <div className={css.greenSquare}></div>
                <div className={css.blueSquare}></div>
              </div>
            </div>

            <div className={`col-1 p-0 m-0 ${css.line}`}></div>

            <div className={`${css.myInfo} col-6 d-grid align-content-center`}>
              <h2>About me</h2>
              <p>
                Hi, I'm Amisha Dhanawade, a web developer skilled in HTML,{" "}
                <b>CSS, JavaScript,</b> and <b>modern frameworks.</b> I've
                completed several personal and collaborative projects,
                specializing in <b>responsive designs</b> and{" "}
                <b>seamless user experiences.</b> I'm passionate about building{" "}
                <b>impactful digital solutions</b> and continuously improving my
                skills. Excited to contribute to innovative projects and make a{" "}
                <b>positive difference</b> in the tech world.
              </p>
              <div className={`${css.persnolnfo} pt-3`}>
                <p>
                  <LiaBirthdayCakeSolid className={`${css.icon}`} />
                  September 27, 2004
                </p>

                <p>
                  <CiLocationOn className={`${css.icon}`} />
                  Baramati, Pune, Maharastra
                </p>

                <p>
                  <IoLanguageOutline className={`${css.icon}`} />
                  Marathi, Hindi, English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
