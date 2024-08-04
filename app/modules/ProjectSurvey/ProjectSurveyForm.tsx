import { useState } from "react";
import Steps from "~/components/RequirementForm/Steps";

const ProjectSurveyForm = () => {
  const [step, setStep] = useState(1);
  const [userReq, setUserReq] = useState<any>({
    industry: [],
    technology: [],
    duration: [],
    budget: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleCardSelect = (propertyName: string, propertyValue: string) => {
    setUserReq({ ...userReq, [`${propertyName}`]: [`${propertyValue}`] });
    nextStep();
  };

  return (
    <>
      <Steps
        handleCardSelect={handleCardSelect}
        nextStep={nextStep}
        step={step}
        userReq={userReq}
        prevStep={prevStep}
      />
    </>
  );
};

export default ProjectSurveyForm;
