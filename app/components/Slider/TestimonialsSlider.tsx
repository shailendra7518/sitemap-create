import React from "react";
import Slider from "react-slick";
import { useGlobalContext } from "~/root";
import TestimonialSliderItem from "./TestimonialSliderItem";
import SliderArrow from "../Icons/Slider/SliderArrow";

const TestimonialsSlider:React.FC = () => {
  
 const hideAriaHiddenTiles = () => {
   Array.from(document.querySelectorAll(".slick-slide")).forEach(
     (slide: any) => {
       slide.setAttribute(
         "aria-hidden",
         slide.classList?.contains("slick-active")
       );
     }
   );
 };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    speed: 400,
    autoplay: true,
    cssEase: "ease-in",
    nextArrow: <SliderArrow dir="next" />,
    prevArrow: <SliderArrow dir="prev" />,
    ariaHidden: true,
    responsive: [
      {
        breakpoint: 625,
        settings: { arrows: false },
      },
    ],
    afterChange: () => hideAriaHiddenTiles(),
  };

  const { testimonials } = useGlobalContext();
  return (
    <section className="testimonial-slider-section my-5">
      <div className="container testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialSliderItem sliderItem={testimonial} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
