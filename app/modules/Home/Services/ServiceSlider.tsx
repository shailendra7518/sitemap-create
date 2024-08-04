import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";

const sliderSettings = {
  focusOnSelect: true,
  className: "center",
  centerPadding: "30px",
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SliderArrow dir="next" />,
  prevArrow: <SliderArrow dir="prev" />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 625,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const ServiceSlider: React.FC<any> = ({ services }) => {
  return (
    <Slider {...sliderSettings}>
      {services.map((service: any, index: number) => (
        <ServiceCard service={service} key={index} />
      ))}
    </Slider>
  );
};
export default ServiceSlider;
