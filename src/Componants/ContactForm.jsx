import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <p id={`${css.getInTouch}`}>Get in Touch</p>
      <form className={`${css.contactform}`}>
        <div className="d-flex justify-content-between">
          <div className="d-grid">
            <label>First Name</label>
            <input type="text" placeholder="First Name" required />
          </div>

          <div className="d-grid justify-content-end">
            <label>Last Name</label>

            <input type="text" placeholder="Last Name" required />
          </div>
        </div>

        <label>Email</label>
        <input type="email" placeholder="you@company.com" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="Your Phone Number" required />

        <label>Message</label>
        <textarea placeholder="Leave a message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default ContactForm;
