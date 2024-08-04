import React from "react";

const MethodologyBanner: React.FC<{
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
}> = ({ title, subtitle, description, coverImage }) => {
  return (
    <div className="main-banner d-flex align-items-center pt-5 mt-5">
      <div className="container">
        <div className="row align-items-md-center pt-5">
          <div className=" col-xl-6 col-lg-6 col-md-12 banner-text pt-lg-5 my-5 mt-lg-0 order-lg-1 order-2">
            {title === "Discovery Workshop" ? (
              <h1 className="main-banner-title fw-bolder mb-lg-2 pe-5">
                {title}
              </h1>
            ) : (
              <h1 className="main-banner-title fw-bolder mb-lg-2">{title}</h1>
            )}
            {subtitle && <h4 className="banner-sub-title">{subtitle}</h4>}
            <p className="banner-detail mb-4 ">{description}</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2 order-1">
            <img src={coverImage} alt={title} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyBanner;
