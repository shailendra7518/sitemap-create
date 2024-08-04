import React from "react";
import type { TestimonialData } from "~/constants/types";
import { urlFor } from "~/root";

const BDEReviewCard: React.FC<{ testimonialData: TestimonialData }> = ({
  testimonialData,
}) => {
  if (!testimonialData.review) {
    return <></>;
  }

  return (
    <article className="testimonial_review">
      <div className="testimonial-user_heading">
        <div className="testimonial-user_details">
          {testimonialData.review?.image && (
            <img
              className="testimonial-user_image"
              src={urlFor(testimonialData.review?.image).url()}
              alt={testimonialData.review?.name}
              width={50}
              height={50}
              loading="lazy"
            />
          )}
          <div className="d-flex flex-column">
            <h3 className="testimonial-user_name">
              {testimonialData.review?.name}
            </h3>
            <p className="testimonial-user_designation">
              {testimonialData.review?.designation}
            </p>
          </div>
        </div>
        <div className="testimonial-user_rating">
          <p className="m-0">{testimonialData.review?.rating}</p>
          <img
            src="/images/partnerships/star.svg"
            alt="yellow rating star"
            height={18}
            width={18}
            loading="lazy"
          />
        </div>
      </div>
      <p className="testimonial-user_review">
        {testimonialData.review?.summary}
      </p>
    </article>
  );
};

export default BDEReviewCard;
