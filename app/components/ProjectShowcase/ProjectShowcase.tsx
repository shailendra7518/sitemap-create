import React from "react";
import Slider from "react-slick";
import { useNavigate } from "@remix-run/react";
import ProjectCard from "~/modules/Home/Projects/ProjectCard";
import NavLink from "../NavLink";
import SliderArrow from "../Icons/Slider/SliderArrow";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  rows: 2,
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

const ProjectShowcase: React.FC<any> = ({ projects }) => {
  const navigate = useNavigate();
  const handleCardClick = (project: any) => {
    return navigate(`/projects/${project.slug.current}`);
  };
  return (
    <section className="project-showcase">
      <div className="container">
        <div className="heading showcase-heading text-center justify-content-center">
          <h2>
            <span className="fw-bold me-2"> Our </span> Works
          </h2>
        </div>
        <Slider {...settings}>
          {projects &&
            projects.map((project: any, index: number) => {
              return (
                <div className="project-card-box projects" key={index}>
                  <ProjectCard
                    project={project}
                    onClick={() => handleCardClick(project)}
                    lazyLoadImage
                  />
                </div>
              );
            })}
        </Slider>
        <div className="d-flex justify-content-center py-sm-5 py-0 ">
          <NavLink
            classes="main-btn shadow-none px-5 py-2 fs-5"
            href="/projects"
          >
            View More
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
