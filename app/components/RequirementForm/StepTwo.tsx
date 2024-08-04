import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { technologies } from "~/constants/technology";
import SurveyCard from "../SurveyForm/SurveyCard";

const StepTwo = ({ formData, setFormData, nextStep, prevStep, step }: any) => {
  return (
    <div className="container">
      <div className="project-survey-block">
        <div className="project-survey-block-title">
          <h2 className="text-center">What service do you search for ?</h2>
          <div className="pagination-box mt-4 d-flex justify-content-center">
            <MdKeyboardArrowLeft
              className="text-theme"
              role="presentation"
              onClick={prevStep}
            />
            <p className="page-number">{step}</p>
            <span>/5</span>
            {formData.technology.length ? (
              <MdKeyboardArrowRight
                role="presentation"
                onClick={nextStep}
                className="text-theme"
              />
            ) : (
              <MdKeyboardArrowRight role="presentation" />
            )}
          </div>
        </div>
      </div>
      <div role="group" aria-labelledby="checkbox-group">
        <div
          id="checkbox-group"
          className="row row-cols-lg-4 row-cols-md-3 row-cols-2 mb-3 mb-md-5 project-survey-block"
        >
          {technologies.map((technology, index) => (
            <div
              key={`technologies-${index}`}
              onClick={() => setFormData("technology", technology.name)}
            >
              <SurveyCard
                title={technology.name}
                logo={technology.logo}
                classes={`${
                  formData.technology.find((n: any) => n === technology.name)
                    ? "bottom-animated-line"
                    : "animated-line"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
