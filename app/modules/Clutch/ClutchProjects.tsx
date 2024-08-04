import React from "react";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";
import { Projects } from "~/modules/Home";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  rows: 1,
  nextArrow: (
    <SliderArrow dir="next" externalClass="project-slider-arrows next" />
  ),
  prevArrow: (
    <SliderArrow dir="prev" externalClass="project-slider-arrows prev" />
  ),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        rows: 1,
        infinite: true,
        arrow: true,
      },
    },
  ],
};

const ClutchProjects: React.FC<Record<string, any>> = ({ projects }) => {
  return (
    <div className="clutch-project-container">
      <Projects projects={projects} settings={settings} />
    </div>
  );
};

export default ClutchProjects;
