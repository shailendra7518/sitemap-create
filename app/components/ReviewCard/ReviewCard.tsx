import React from "react";
import { getRatingPercent } from "./getRatingPercent";

const ReviewCard: React.FC<{ cardData: any }> = ({ cardData }) => {
  return (
    <a
      href={cardData.link || ""}
      target="_blank"
      rel="noopener"
      className="col-lg-6 reviews mb-1 my-2 review-card text-decoration-none"
      role="button"
    >
      <span className="d-block animated-line" role="presentation"></span>
      <section className="block pt-4 pb-4 px-4">
        <span className="d-flex align-items-center justify-content-between mb-2">
          <h4 className="block-name m-0">{cardData.name}</h4>
          <span
            className="Stars d-inline-block"
            style={{
              ["--rating-percent" as any]: getRatingPercent(cardData.rating),
            }}
            role="presentation"
          />
        </span>
        <h4 className="block-sub-title pb-2">{cardData.designation}</h4>
        <p className="client-review">{cardData.testimonial}</p>
      </section>
    </a>
  );
};

export default ReviewCard;
