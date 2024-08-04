import type { MouseEventHandler } from "react";
import React from "react";

const SurveyCard: React.FC<{
  onClick?: MouseEventHandler<HTMLDivElement>;
  title: string;
  logo?: string;
  classes: string;
}> = ({ title, logo, classes, onClick }) => {
  return (
    <div className="col survey-icon-box d-flex justify-content-around p-sm-3 p-0 pb-4" role="button" tabIndex={0}>
      <div className="survey-icon-box-inner position-relative h-100  w-100 text-center py-4">
        {logo && <img src={logo} width="56px" height="56px" className="mb-4" alt={`Survey Icon of ${title}`} loading="lazy"/>}
        <h2 className="survey-icon-name m-sm-0"> {title}</h2>
        <div className={`${classes}  position-absolute bottom-0`}></div>
      </div>
    </div>
  );
};

export default SurveyCard;
