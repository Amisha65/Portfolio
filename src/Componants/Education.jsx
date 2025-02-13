import css from "./Education.module.css";
import skill from "./MySkills.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import VisibilityWrapper from "./VisibilityWrapper";

const Education = () => {
  return (
    <>
      <div className={`${skill.containerBox} container-fluid py-5 my-5`}>
        <div className="container">
          <VisibilityWrapper delay={0.14}>
            <div className="row">
              <div
                className={` col-12 d-flex justify-content-center align-items-center`}
              >
                <h1 className={`${skill.skillTitle}`}>My Education</h1>
              </div>

              <div className={`${skill.infoPara} col-12`}>
                <p>A small Brief Summary of my education</p>
              </div>
            </div>
          </VisibilityWrapper>
          <VisibilityWrapper delay={0.12}>
            <div className={`${css.timeline}`}>
              <div className={`${css.timelineitem} ${css.left}`}>
                <div className={css.timelineicon}>
                  <FaCircleCheck />
                </div>
                <div className={`${css.timelinecontent}`}>
                  <p id={css.degree}>S.S.C </p>
                  <h5 className="title">
                    Shri Shambhu Mahadev Vidyalay, Kukudwad
                  </h5>
                  <p>2018 - 2020</p>
                </div>
              </div>

              <div className={`${css.timelineitem} ${css.right}`}>
                <div className={css.timelineicon}>
                  <FaCircleCheck />
                </div>
                <div className={css.timelinecontent}>
                  <p id={css.degree}>H.S.C</p>
                  <h5 className="title">
                    Shardabai Pawar Mahila Arts, Commerce & Science College,
                    Baramati{" "}
                  </h5>
                  <p>2020 - 2022</p>
                </div>
              </div>

              <div className={`${css.timelineitem} ${css.left}`}>
                <div className={css.timelineicon}>
                  <FaCircleCheck />
                </div>
                <div className={css.timelinecontent}>
                  <p id={css.degree}>3rd Year BE in IT</p>
                  <h5 className="title">
                    Vidya Pratishthan’s Kamalnayan Bajaj Institute of
                    Engineering and Technology, Baramati
                  </h5>
                  <p>2022 - Current</p>
                </div>
              </div>
            </div>
          </VisibilityWrapper>
        </div>
      </div>
    </>
  );
};

export default Education;
