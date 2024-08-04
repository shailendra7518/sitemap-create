import React from "react";
import type { Card } from "~/constants/types";

const ContentCard: React.FC<{ cardData: Card }> = ({ cardData }) => {
  return (
    <div className="col-md-6 mb-4 mb-lg-0">
      <div className="content-card-icon block p-4 h-100">
        <img src={cardData.logo} alt={cardData.alternate} className="mb-3" />
        <h2 className="content-title">{cardData.title}</h2>
        {cardData.subtitle && (
          <h3 className="content-sub-title">
            {cardData.subtitle} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </h3>
        )}
        <h3 className="content-details">{cardData.description}</h3>
      </div>
    </div>
  );
};

export default ContentCard;
