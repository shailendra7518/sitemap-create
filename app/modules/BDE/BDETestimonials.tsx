import React from "react";
import Slider from "react-slick";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";
import type { TestimonialData } from "~/constants/types";
import BDEProjectCard from "./BDEProjectCard";
import BDEReviewCard from "./BDEReviewCard";

const sliderSettings = {
  focusOnSelect: true,
  className: "center",
  centerPadding: "30px",
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SliderArrow dir="next" />,
  prevArrow: <SliderArrow dir="prev" />,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 625,
      settings: {
        arrows: false,
      },
    },
  ],
};

const BDETestimonials: React.FC<{ bdeTestimonialData: TestimonialData[] }> = ({
  bdeTestimonialData,
}) => {
  return (
    <section className="testimonial-section h-100">
      <div className="container">
        <Slider {...sliderSettings}>
          {bdeTestimonialData.map(
            (testimonialData: TestimonialData, index: number) => (
              <div
                className="d-flex justify-content-center card-container"
                key={index}
              >
                <div className="testimonial-card">
                  <BDEProjectCard testimonialData={testimonialData} />
                  <BDEReviewCard testimonialData={testimonialData} />
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default BDETestimonials;
