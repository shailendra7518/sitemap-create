import React from "react";
import { urlFor } from "~/root";
import InvertedComma from "../Icons/InvertedComma";
import { getRatingPercent } from "../ReviewCard/getRatingPercent";
 
const TestimonialSliderItem: React.FC<{ sliderItem: any }> = ({
  sliderItem,
}) => {
  return (
    <div className="testimonial-slide d-flex flex-column justify-content-center align-items-center">
      <div className="testimonial-slide__comma my-5">
        <InvertedComma />
      </div>
      <div className="testimonial-slide__review mb-5">
        {sliderItem.testimonial}
      </div>
      <div className="testimonial-profile d-flex justify-content-center align-items-center">
        {sliderItem?.image && (
          <img
            src={urlFor(sliderItem?.image).url()}
            className="testimonial-profile-img"
            width="112px"
            alt={sliderItem.name}
            loading="lazy"
          />
        )}
        <div className="testimonial-profile-details d-flex flex-column">
          <div className="testimonial-profile-name">{sliderItem.name}</div>
          <div className="testimonial-profile-rating">
            <div
              className="Stars d-inline-block"
              style={{
                ["--rating-percent" as any]: getRatingPercent(
                  sliderItem.rating
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderItem;
