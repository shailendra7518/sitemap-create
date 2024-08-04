import React from "react";
import type { ServiceBanner } from "~/constants/types";

const NormalBanner: React.FC<{ data: ServiceBanner }> = ({ data }) => {
  return (
    <>
      <div className="main-banner d-flex align-items-center mt-5 pt-5">
        <div className="container">
          <div className="row align-items-md-center">
            <div className=" col-xl-5 col-lg-5 col-md-12 banner-text pt-lg-5 mb-5 order-lg-1 order-2 mt-5 mt-lg-0">
              <h1 className="banner-title fw-bolder mb-lg-2">{data.title}</h1>
              <h2 className="banner-detail mb-4 ">{data.subtitle}</h2>
            </div>
            <div className="col-xl-7  col-lg-7 col-md-12  order-lg-2 order-1 text-center review-banner-image">
              <img
                src={data.coverImage}
                alt={data.alternate}
                width="564px"
                height="614px"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalBanner;
