import css from "./About.module.css";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import VisibilityWrapper from "./VisibilityWrapper";

const About = () => {
  return (
    <>
      <div className={`container-fluid my-5 py-5 ${css.mainContainer}`}>
        <div className={`container ${css.subContainer}`}>
          <VisibilityWrapper delay={0.8} fullWidth>
            <div className={`row ${css.rowContainer}`}>
              <div
                className={`${css.imageContainer} col-12 col-lg-5 d-flex flex-wrap justify-content-center align-content-center`}
              >
                <div className={css.imageFrame}>
                  <img
                    src="Images/my1.jpg"
                    alt="Styled"
                    className={css.styledImage}
                  />
                  <div className={css.decorativeElements}>
                    <div className={css.greenSquare}></div>
                    <div className={css.blueSquare}></div>
                  </div>
                </div>
              </div>

              <div className={`col-lg-1 p-0 m-0 ${css.line}`}></div>

              <div
                className={`${css.myInfo} col-12 col-lg-6`}
              >
                <div className={css.mobileContent}>
                  <h2>About me</h2>
                  <p>
                    <b>
                      Hi, I&apos;m Amisha Dhanawade, a software developer with a
                      strong foundation in full-stack development and
                      problem-solving.
                    </b>
                  </p>
                  <p>
                    I have solved <b>400+ DSA problems</b>, which has
                    strengthened my ability to write efficient and scalable
                    code. I enjoy building real-world applications using
                    technologies like <b>JavaScript, React, Node.js, and SQL</b>.
                  </p>
                  <p>
                    I focus on writing clean, maintainable code and creating
                    user-friendly solutions, while continuously improving my
                    skills and learning new technologies.
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
          </VisibilityWrapper>
        </div>
      </div>
    </>
  );
};

export default About;
