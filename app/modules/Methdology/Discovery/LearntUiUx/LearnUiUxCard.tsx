import React from "react";
import type { LearnUiUxCard as LearnUiUxCardProps } from "~/constants/types";

const LearnUiUxCard: React.FC<{ data: LearnUiUxCardProps }> = ({ data }) => {
  return (
    <div className="discovery-details">
      <h4 className="content-sub-title text-theme mt-5 mb-3">{data.title}</h4>
      <div className="row position-relative align-items-start">
        <div className="col-xl-5 col-lg-5  order-1 order-lg-2 ">
          <div className="company-image">
            <div className="image-block my-md-5 ms-md-5  me-md-5">
              <img
                className="img-fluid"
                src={data.image}
                alt="ui-ux-card-images"
              />
            </div>
          </div>
        </div>
        <div className="main-content col-xl-7 col-lg-7  position-relative order-2 order-lg-1 mt-0">
          <ul className="ps-4 detail-list-group  ms-3 mt-4 mt-lg-0 ">
            {data.points.map((point, index) => (
              <li className="detail-list my-lg-3" key={index}>
                <span className=" list-content position-relative">{point}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center mt-4">
            <h4 className="content-details fs-5 text-theme">Executed by :</h4>
            <div className="executed-icon text-center me-3">
              <img src="/images/icons/analyst.svg" className="mb-2" alt="" />
              <p className="content-details fs-6 m-0">Analyst</p>
            </div>
            <div className="executed-icon text-center me-3">
              <img src="/images/icons/strategist.svg" className="mb-2" alt="" />
              <p className="content-details fs-6 m-0">Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnUiUxCard;
