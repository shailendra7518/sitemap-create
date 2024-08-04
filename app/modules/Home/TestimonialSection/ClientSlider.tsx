import React from "react";
import Slider from "react-slick";
import { useGlobalContext } from "~/root";
import ClientSliderItem from "./ClientSliderItem";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";

const ClientSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    cssEase: "ease-in",
    nextArrow: <SliderArrow dir="next" src="/images/right-arrow-border.svg" />,
    prevArrow: <></>,
  };
  const { testimonials } = useGlobalContext();
  return (
    <>
      <div className="col-md-6 ms-auto client-say">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <ClientSliderItem
              sliderItem={item}
              key={`client-slider-${index}`}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ClientSlider;
