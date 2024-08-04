import React from "react";
import Slider from "react-slick";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";
import { clients } from "~/constants/clients";

const ClientIconSlider: React.FC = () => {
  const settings = {
    className: "center slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow dir="next" />,
    prevArrow: <SliderArrow dir="prev" />,
  };
  return (
    <Slider {...settings}>
      {clients.map((client, index) => (
        <div className="client-slider-item d-flex" key={`client-slider-item-${index}`}>
          <img
            src={client.image}
            alt={client.alternate}
            className="img-fluid client-image"
            loading="lazy"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ClientIconSlider;
