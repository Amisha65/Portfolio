import css from "./MySkills.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

const MySkills = () => {
  return (
    <>
      <div className={`container-fluid my-5 py-5 ${css.mainContainer}`}>
        <div className="container">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <h1 className={`${css.skillTitle}`}>My Skills</h1>
            </div>

            <div className="col-12">
              <p className={`${css.infoPara} py-4`}>
                Proficient in modern technologies, frameworks and tools. Skilled
                in responsive design, problem-solving, and creating seamless
                user experiences.
              </p>
            </div>

            <div
              className={`${css.skillContainer} d-flex justify-content-center align-items-center flex-wrap`}
            >
              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <FaHtml5 />
                </div>
              </div>

              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <FaCss3Alt />
                </div>
              </div>

              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <IoLogoJavascript />
                </div>
              </div>

              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <PiFileCpp />
                </div>
              </div>

              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <FaBootstrap />
                </div>
              </div>

              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <FaReact />
                </div>
              </div>

              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <div className={`${css.icon}`}>
                  <SiMongodb />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
