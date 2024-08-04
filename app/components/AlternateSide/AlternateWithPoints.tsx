import React from "react";
import type { Myths } from "~/constants/types";

const AlternateWithPoints: React.FC<{ data: Myths[]; numbers: boolean }> = ({
  data,
  numbers,
}) => {
  return (
    <>
      {data.map((dataItem, index) => (
        <div
          className={
            index % 2 === 0
              ? "row align-items-center justify-content-between"
              : "row align-items-center justify-content-between flex-row-reverse "
          }
          key={index}
        >
          <div className="col-xl-7 order-1 order-lg-2 text-center">
            <div className="my-md-5 ms-md-5 me-md-5">
              <img
                className="img-fluid"
                src={dataItem.image}
                alt={dataItem.alternate}
              />
            </div>
          </div>
          <div className="main-content col-xl-5 order-2 order-lg-1 mt-0">
            <div className="d-flex detail-list align-items-center">
              {numbers && (
                <div className="list-number text-theme px-3 py-0 px-sm-4 py-sm-2 rounded me-3 fw-bold">
                  {index + 1}
                </div>
              )}
              <h4 className="content-sub-title text-theme">{dataItem.title}</h4>
            </div>
            {dataItem.description && (
              <p className="content-details">{dataItem.description}</p>
            )}
            <ul className="ps-4 detail-list-group ms-3 mt-0 mt-lg-2 ">
              {dataItem.points.map((point, index) => (
                <li className="detail-list my-lg-3" key={index}>
                  <span className="list-content ms-2 position-relative">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default AlternateWithPoints;
