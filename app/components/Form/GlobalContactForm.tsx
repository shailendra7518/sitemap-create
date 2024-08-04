import ClientSlider from "~/modules/Home/TestimonialSection/ClientSlider";
import ContactForm from "./ContactForm";

const GlobalContactForm = () => {
  return (
    <div className="container global-contact-footer">
      <div className="row">
        <ClientSlider />
        <ContactForm />
      </div>
    </div>
  );
};

export default GlobalContactForm;
