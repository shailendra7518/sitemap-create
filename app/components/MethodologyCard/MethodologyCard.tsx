import React from "react";
import { Link } from "@remix-run/react";
import type { Card } from "~/constants/types";

const MethodologyCard: React.FC<{ cardData: Card }> = ({ cardData }) => {
  return (
    <div className="col-lg-4 col-md-6 reviews mb-3">
      {cardData.link && (
        <Link
          to={`/methodology${cardData.link}`}
          className="text-decoration-none"
        >
          <div className="animated-line"></div>
          <div className="block p-4 ">
            <div className="mb-3 h-50">
              <img src={cardData.logo} alt={cardData.alternate} loading="lazy"/>
            </div>
            <h2 className="block-name ">{cardData.title}</h2>
            <h3 className="block-sub-title pb-2">{cardData.description}</h3>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MethodologyCard;
