import React from "react";
import Slider from "react-slick";
import TeamSliderItem from "./TeamSliderItem";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";

const TeamSlider: React.FC = ({ team }: any) => {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: false,
    swipe: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SliderArrow dir="next" />,
    prevArrow: <SliderArrow dir="prev" />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {team.map((member: any, index: any) => (
        <TeamSliderItem member={member} key={index} />
      ))}
    </Slider>
  );
};

export default TeamSlider;
