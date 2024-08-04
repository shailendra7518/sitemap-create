import React from "react";
import ReviewCard from "~/components/ReviewCard/ReviewCard";
import { useGlobalContext } from "~/root";

const TechStaunchReviews: React.FC = () => {
  const { testimonials } = useGlobalContext();
  return (
    <div className="company-reviews">
      <div className="container rating-content">
        <div className="company-reviews-heading text-center">
          <div className="heading justify-content-center">
            <h2>
              <span className="fw-bold"> TechStaunch </span> Reviews
            </h2>
          </div>
          <div className="rating-stars pt-3" role="heading" aria-level={3}>
            <span className="fas fa-star" role="presentation"></span>
            <span className="fas fa-star" role="presentation"></span>
            <span className="fas fa-star" role="presentation"></span>
            <span className="fas fa-star" role="presentation"></span>
            <span className="fas fa-star-half-alt me-0 me-sm-3" role="presentation"></span>
            <span className="rating fw-bold">5/5</span>
          </div>
        </div>
        <div className="row powered-by py-2">
          <h4>
            Powered by :
            <a
              target="_blank"
              rel="noopener"
              href="https://clutch.co/profile/techstaunch-software-solutions#highlights"
              aria-label="Clutch highlights of TechStaunch"
            >
              <img
                src="images/icons/clutch-logo.svg"
                alt="Clutch-logo"
                width="70px"
                height="20px"
                className="mx-2"
                loading="lazy"
              />
            </a>
          </h4>
        </div>
        <div className="row mb-3">
          {testimonials.map((review, index) => (
            <ReviewCard cardData={review} key={`review-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStaunchReviews;
