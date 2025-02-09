import css from "./Hello.module.css";
import Links from "./Links";
import VisibilityWrapper from "./VisibilityWrapper";

const Hello = () => {
  return (
    <>
      <div
        className={`container-fluid pb-5 ${css.mainContainer} d-flex justify-content-start align-content-center`}
      >
        <div className={`${css.box} container mt-5 `}>
          <div className={`${css.row} d-flex px-4 pt-4`}>
            <VisibilityWrapper delay={0.5}>
              <div className={`${css.column8} col-8`}>
                <p className={`${css.frondEnd} mb-1`}>Front End Developer</p>

                <p className={`${css.helloIm}`}>Hello I'm</p>

                <p className={`${css.myName}`}>Amisha Dattatray Dhanawade</p>

                <p className={`${css.myInfo}`}>
                  I am crafting websites with responsive design, modern UI/UX,
                  and cutting-edge web technologies.
                </p>
              </div>
            </VisibilityWrapper>
            <VisibilityWrapper delay={0.7}>
              <div
                className={`${css.photoContainer} col-4  justify-content-center `}
              >
                <img
                  className={`${css.myPhoto} d-flex align-content-center justify-content-end `}
                  src="Images/my.jpg"
                  alt="My Image"
                />
              </div>
            </VisibilityWrapper>
          </div>
          <VisibilityWrapper delay={0.9}>
            <div className={`${css.links} col-12 pb-2 ps-4`}>
              <Links></Links>
            </div>
          </VisibilityWrapper>
        </div>
      </div>
    </>
  );
};

export default Hello;
