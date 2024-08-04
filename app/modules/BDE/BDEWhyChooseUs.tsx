import BDEWhyUsCards from "./BDEWhyUsCards";

const BDEWhyChooseUs = () => {
  return (
    <section className="why-us-section h-100">
      <div className="container">
        <div className="why-us-inner">
          <div className="why-us-heading heading d-flex justify-content-center align-items-center">
            <h2>
              <span> Why </span>Choose Us
            </h2>
            <img
              src="/images/question-mark.svg"
              alt="question-mark"
              width="85"
              height="114"
              loading="lazy"
            />
          </div>
          <BDEWhyUsCards />
        </div>
      </div>
    </section>
  );
};

export default BDEWhyChooseUs;
