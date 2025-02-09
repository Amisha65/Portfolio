import css from "./MySkills.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import VisibilityWrapper from "./VisibilityWrapper";

const MySkills = () => {
  return (
    <>
      <div className={`container-fluid my-5 py-5 ${css.mainContainer}`}>
        <div className="container">
          <div className="row ">
            <VisibilityWrapper delay={0.13}>
              <div className="col-12 d-flex justify-content-center align-items-center">
                <h1 className={`${css.skillTitle} fadein`}>My Skills</h1>
              </div>

              <div className="col-12">
                <p className={`${css.infoPara} py-4 `}>
                  Proficient in modern technologies, frameworks and tools.
                  Skilled in responsive design, problem-solving, and creating
                  seamless user experiences.
                </p>
              </div>
            </VisibilityWrapper>

            <div
              className={`${css.skillContainer} d-flex justify-content-center align-items-center flex-wrap `}
            >
              <VisibilityWrapper delay={0.12}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.html}`}>
                    <FaHtml5 />
                  </div>
                </div>
              </VisibilityWrapper>

              <VisibilityWrapper delay={0.11}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.css}`}>
                    <FaCss3Alt />
                  </div>
                </div>
              </VisibilityWrapper>

              <VisibilityWrapper delay={0.1}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.js}`}>
                    <IoLogoJavascript />
                  </div>
                </div>
              </VisibilityWrapper>

              <VisibilityWrapper delay={0.9}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.cpp}`}>
                    <PiFileCpp />
                  </div>
                </div>
              </VisibilityWrapper>

              <VisibilityWrapper delay={0.8}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.bootstrap}`}>
                    <FaBootstrap />
                  </div>
                </div>
              </VisibilityWrapper>

              <VisibilityWrapper delay={0.7}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.react}`}>
                    <FaReact />
                  </div>
                </div>
              </VisibilityWrapper>

              <VisibilityWrapper delay={0.6}>
                <div className="col-12 col-lg-3 d-flex justify-content-center fadein">
                  <div className={`${css.icon} ${css.mongo}`}>
                    <SiMongodb />
                  </div>
                </div>
              </VisibilityWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
