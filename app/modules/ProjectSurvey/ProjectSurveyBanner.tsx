import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import type { ServiceBanner } from "~/constants/types";

const ProjectSurveyBanner: React.FC<{ data: ServiceBanner }> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.CLUTCHCO.Init();
    };

    return () => {
      window.CLUTCHCO.Destroy();
      document.body.removeChild(script);
    };
  }, []);

  const handleScroll = () => {
    if (typeof window === "object") {
      window.scrollTo({
        top: window.innerHeight - 180,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="main-banner d-flex align-items-center mt-5 pt-5">
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-xl-7 col-lg-7 col-md-12 banner-text position-lg-absolute ms-auto mb-0 order-lg-1 order-2 mt-5 mt-lg-0">
            <h1 className="banner-title fw-bolder mb-lg-2">{data.title}</h1>
            <h2 className="banner-detail mb-4 ">{data.subtitle}</h2>
            <h2 className="survey-banner-sub-title" onClick={handleScroll}>
              Let’s try our survey
              <FiArrowRight className="right-arrow ms-3 mx-2" />
            </h2>
            <div
              className="clutch-widget mt-4 project-survey-widget"
              data-url="https://widget.clutch.co"
              data-widget-type="12"
              data-height="360"
              data-nofollow="true"
              data-expandifr="true"
              data-reviews="2273662,2208288,2102379,2024764,1945886"
              data-clutchcompany-id="1666446"
            ></div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 d-none d-lg-block order-lg-2 order-1 text-center">
            <img
              src={data.coverImage}
              alt={data.alternate}
              width="411px"
              height="725px"
              className="img-fluid p-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSurveyBanner;
