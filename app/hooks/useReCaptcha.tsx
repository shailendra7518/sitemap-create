import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useReCaptcha = (actionType: string) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
  }, [executeRecaptcha]);

  return {
    handleReCaptchaVerify,
  };
};

export default useReCaptcha;
