import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { developmentTime } from "~/constants/developmentTime";
import SurveyCard from "../SurveyForm/SurveyCard";

const StepThree = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  step,
}: any) => {
  return (
    <div className="container">
      <div className="project-survey-block">
        <div className="project-survey-block-title">
          <h2 className="text-center">
            How much time you have for a development?
          </h2>
          <div className="pagination-box mt-4 d-flex justify-content-center">
            <MdKeyboardArrowLeft
              className="text-theme"
              role="presentation"
              onClick={prevStep}
            />
            <p className="page-number">{step}</p>
            <span>/5</span>
            {formData.duration.length ? (
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
          {developmentTime.map((development, index) => (
            <div
              key={`technologies-${index}`}
              onClick={() => setFormData("duration", development.name)}
            >
              <SurveyCard
                title={development.name}
                classes={`${
                  formData.duration.find((n: any) => n === development.name)
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

export default StepThree;
