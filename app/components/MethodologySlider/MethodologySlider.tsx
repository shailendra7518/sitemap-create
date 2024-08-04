import React from "react";
import Slider from "react-slick";
import type { MethodologySliderItem } from "~/constants/types";

const MethodologySlider: React.FC<{ data: MethodologySliderItem[] }> = ({
  data,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="container px-4">
      <Slider {...settings}>
        {data.map((sliderItem, index) => (
          <div className="method-wrapper" key={index}>
            <div className="method-block position-relative pe-5">
              <div className="method-title py-2 text-center">
                {sliderItem.title}
              </div>
              <p className="method-detail method-detail-line p-4 text-center">
                {sliderItem.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MethodologySlider;
