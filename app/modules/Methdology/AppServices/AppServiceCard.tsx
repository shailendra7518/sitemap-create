import React from "react";
import type { Card } from "~/constants/types";

const AppServiceCard: React.FC<{ cardData: Card }> = ({ cardData }) => {
  return (
    <div className="col-lg-4 col-md-6 reviews mb-2">
      <div className="d-flex flex-column flex-sm-row d-lg-block gap-0 gap-sm-2 p-4">
        <div className="content-card-icon mt-sm-2 mt-md-0 mt-lg-0 mb-3 h-50">
          <img src={cardData.logo} alt={cardData.alternate} loading="lazy"/>
        </div>
        <h3 className="content-title">{cardData.title}</h3>
      </div>
      <h3 className="content-sub-title px-4 pb-2">{cardData.description}</h3>
    </div>
  );
};

export default AppServiceCard;
