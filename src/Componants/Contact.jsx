import css from "./MySkills.module.css";
import cont from "./Contact.module.css";
import Links from "./Links";
import ContactForm from "./ContactForm";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className={`${css.containerBox} container-fluid py-5 my-5`}>
        <div className="container">
          <div className="row">
            <div
              className={` col-12 d-flex justify-content-center align-items-center`}
            >
              <h1 className={`${css.skillTitle}`}>Contact me</h1>
            </div>

            <div className={`${css.infoPara} col-12`}>
              <p>
                I'm currently available to take on new projects, also available
                to be hired! so feel free to contact.
              </p>
            </div>

            <div className={css.bothBox}>
              <div className="contactBody col-12 col-lg-8">
                <ContactForm />
              </div>

              <div className={`${css.contactBody} col-12 col-lg-4  `}>
                <p className={`${css.getConnected} mb-4`}>Get Connected</p>
                <Links />

                <p className={`${css.getConnected} pt-4 mb-3`}>Call Me</p>

                <CiMail id={`${css.icon}`} />
                <a href="amishadh00@gmail.com" className={`${css.callMe}`}>
                  {" "}
                  amisha00dh@gmail.com
                </a>

                <p>
                  <IoMdCall id={`${css.icon}`} /> +919011354082
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
