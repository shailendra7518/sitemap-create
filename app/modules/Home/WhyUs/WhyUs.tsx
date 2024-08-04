import React from "react";
import TimeLine from "./TimeLine";

const WhyUs: React.FC = () => {
  return (
    <section className="why-us h-100">
      <div className="container position-relative">
        <div className="why-us-heading heading d-flex justify-content-sm-end justify-content-center  align-items-center">
          <h2>
            <span className="fw-bold"> Why </span>Choose Us
          </h2>
          <img
            src="images/question-mark.svg"
            alt="question-mark"
            width="85"
            height="114"
            loading="lazy"
          />
        </div>
        <TimeLine />
      </div>
    </section>
  );
};

export default WhyUs;
