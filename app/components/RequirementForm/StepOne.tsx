import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { industries } from "~/constants/industry";
import SurveyCard from "../SurveyForm/SurveyCard";

const StepOne = ({ formData, setFormData, nextStep, step }: any) => {
  return (
    <div>
      <div className="container">
        <div className="project-survey-block">
          <div className="project-survey-block-title">
            <h2 className="text-center">Choose Your Industry</h2>
            <div className="pagination-box mt-4 d-flex justify-content-center">
              <MdKeyboardArrowLeft role="presentation" />
              <p className="page-number">{step}</p>
              <span>/5</span>
              {formData.industry.length ? (
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
            {industries.map((industry, index) => (
              <div
                key={`industries-${index}`}
                onClick={() => setFormData("industry", industry.name)}
              >
                <SurveyCard
                  title={industry.name}
                  logo={industry.logo}
                  classes={`${
                    formData.industry.find((n: any) => n === industry.name)
                      ? "bottom-animated-line"
                      : "animated-line"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
