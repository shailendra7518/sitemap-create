import React from "react";
import Slider from "react-slick";
import { Link } from "@remix-run/react";
import { urlFor } from "~/root";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../Home/Services/ServiceSlider";

const ProjectCarousel: React.FC<{ sliderImages: any }> = ({ sliderImages }) => {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    cssEase: "linear",
    speed: 500,
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {sliderImages.map((image: any, index: number) => {
        return (
          <div key={index}>
            <Link to={image.slug.current}>
              <img
                src={urlFor(image.sliderImage).url()}
                className="img-fluid"
                alt={image.slug.current + "-image"}
              />
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default ProjectCarousel;
