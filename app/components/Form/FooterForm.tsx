import ContactForm from "./ContactForm";
import LetsTalk from "./LetsTalk";

const FooterContactForm = () => {
  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div className="row">
          <LetsTalk />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FooterContactForm;
