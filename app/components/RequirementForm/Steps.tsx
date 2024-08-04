import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const Steps = ({
  handleCardSelect,
  nextStep,
  step,
  userReq,
  prevStep,
}: any) => {
  switch (step) {
    case 1:
      return (
        <StepOne
          formData={userReq}
          setFormData={handleCardSelect}
          nextStep={nextStep}
          step={step}
        />
      );
    case 2:
      return (
        <StepTwo
          formData={userReq}
          setFormData={handleCardSelect}
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <StepThree
          formData={userReq}
          setFormData={handleCardSelect}
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <StepFour
          formData={userReq}
          setFormData={handleCardSelect}
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return <StepFive formData={userReq} step={step} prevStep={prevStep} />;
    default:
      return <></>;
  }
};

export default Steps;
