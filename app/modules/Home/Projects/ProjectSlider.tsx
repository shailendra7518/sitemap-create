import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import ProjectOverview from "./ProjectOverview";
import SliderArrow from "~/components/Icons/Slider/SliderArrow";

const ProjectSlider: React.FC<any> = ({ id, projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow dir="next" />,
    prevArrow: <SliderArrow dir="prev" />,
  };
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    sliderRef?.current?.slickGoTo(id);
  }, [id]);
  return (
    <div className="project-detail-slider">
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project: any, index: number) => (
          <ProjectOverview project={project} id={index} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
