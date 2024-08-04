import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { emailID } from "~/constants/emailID";
import ContactForm from "../Form/ContactForm";

const StepFive: React.FC = ({ formData, prevStep, step }: any) => {
  return (
    <div className="container">
      <div className="project-survey-block">
        <div className="project-survey-block-title">
          <div className="pagination-box mt-4 d-flex justify-content-center">
            <MdKeyboardArrowLeft className="text-theme" role="presentation" onClick={prevStep} />
            <p className="page-number">{step}</p>
            <span>/5</span>
            <MdKeyboardArrowRight role="presentation" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 survey-form-text px-3 mt-3">
            <h2 className="mt-3">
              Leave your contacts and we will provide free final estimation
            </h2>
            <p className="text-white">
              Email us to <a href={`mailto:${emailID}`}> {emailID}</a>
            </p>
            <p>
              or call <a href="tel:+918780173037">+91 8780 173 037</a>
            </p>
          </div>
          <ContactForm additionalInfo={formData} />
        </div>
      </div>
    </div>
  );
};

export default StepFive;
