import React from "react";
import type { Card } from "~/constants/types";

const NonActiveCard: React.FC<{ cardData: Card; col: string }> = ({
  cardData,
  col,
}) => {
  return (
    <>
      <div className={`col-lg-${col} col-md-6 mb-3 text-center`}>
        <div className="block bg-transparent p-sm-4 ">
          <img src={cardData.logo} alt={cardData.alternate} className="pb-3" />
          <h2 className="block-name">{cardData.title}</h2>
          {cardData.subtitle && (
            <h3 className="block-sub-title">
              {cardData.subtitle} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </h3>
          )}
          <h3 className="block-sub-title pb-2">{cardData.description}</h3>
        </div>
      </div>
    </>
  );
};

export default NonActiveCard;
