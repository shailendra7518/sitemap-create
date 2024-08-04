import React from "react";
import InvertedComma from "~/components/Icons/InvertedComma";
import { getRatingPercent } from "~/components/ReviewCard/getRatingPercent";
import { urlFor } from "~/root";

const ClientSliderItem:React.FC<any> = ({ sliderItem }) => {
  return (
    <div className="testimonial-details px-2">
      <div className="row justify-content-between">
        <div className="col-4"> </div>
        <span className="inverted-comma col-lg-9 col-xl-8 col-xl-8 col-md-12 d-none d-lg-block">
          <InvertedComma />
        </span>
      </div>
      <div className="row justify-content-between mt-4">
        <div className="testimonial-image col-lg-3 col-md-4 ms-xl-4 text-md-center">
          <img
            className=""
            src={urlFor(sliderItem?.image).url()}
            alt={sliderItem.name}
            width="138"
            height="138"
            loading="lazy"
          />
        </div>
        <div className="col-lg-9 col-xl-8 col-xl-8 col-md-12">
          <div className="d-block d-sm-flex justify-content-between testimonial-client-block">
            <div className="testimonial-title fw-bolder my-2 my-lg-0 mb-lg-2" role="heading" aria-level={2}>
              {sliderItem.name}
            </div>
            <div
              className="Stars d-inline-block"
              style={{
                ["--rating-percent" as any]: getRatingPercent(
                  sliderItem.rating
                ),
              }}
            />
          </div>

          <p className="testimonial-review mb-4 mb-md-4 mb-lg-5 text-start">
            {sliderItem.testimonial}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientSliderItem;
