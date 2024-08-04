import { Link } from "@remix-run/react";
import React, { useState } from "react";
import { ProjectData } from "~/constants/types";
import { urlFor } from "~/root";

const StartUpSuccess: React.FC<{ projects: ProjectData[] }> = ({
  projects,
}) => {
  const filteredProjects = projects.filter((project) => project.review);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const getActiveProject = (index: number) => {
    const projectIndex = (activeIndex + index) % filteredProjects.length;
    return filteredProjects[projectIndex];
  };

  return (
    <section className="start-up-success-section">
      <div className="container">
        <div className="start-up-success-section-inner">
          <h2 className="start-up-success-heading">
            Let this be your <span>success story</span> too
          </h2>
          <div className="custom-tabs">
            <ul className="custom-tabs__list" role="tablist">
              {Array.from({ length: 5 }).map((_, index) => {
                const project = getActiveProject(index);
                return (
                  <li
                    key={index}
                    className={`custom-tab ${index === 0 && "active"}`}
                    onClick={() =>
                      setActiveIndex((prevIndex) => prevIndex + index)
                    }
                    role="tab"
                    aria-selected={index === 0 ? "true" : "false"}
                    tabIndex={0}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={project?.bannerTitle}
                  >
                    {project?.bannerTitle}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="start-up-portfolio-content">
            <img
              src="/images/icons/final-slick-left.svg"
              className="arrow arrow-left"
              alt="left arrow"
              onClick={prevProject}
            />
            <div className="start-up-project-container">
              <div className="project-card">
                <Link to={"/projects/" + getActiveProject(0)?.slug?.current}>
                  {getActiveProject(0)?.thumbnail ? (
                    <img
                      className="testimonial-user_image"
                      src={urlFor(getActiveProject(0)?.thumbnail).url()}
                      alt={getActiveProject(0)?.slug?.current}
                      width={530}
                      height={290}
                      loading="lazy"
                    />
                  ) : (
                    <div className="d-none" />
                  )}
                </Link>
                <div className="testimonial-user_details">
                  <p className="testimonial-user_review">
                    {getActiveProject(0)?.review?.summary}
                  </p>
                  <div className="testimonial-user_logo">
                    {getActiveProject(0)?.review?.image ? (
                      <img
                        src={urlFor(getActiveProject(0)?.review?.image).url()}
                        alt={getActiveProject(0)?.review?.name}
                        width={80}
                        height={80}
                        loading="lazy"
                      />
                    ) : (
                      <div className="d-none" />
                    )}
                    <div className="testimonial-user-detail">
                      <p className="testimonial-user-name">
                        {getActiveProject(0)?.review?.name}
                      </p>
                      <p className="testimonial-user-designation">
                        {getActiveProject(0)?.review?.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/images/icons/final-slick-right.svg"
              className="arrow arrow-right"
              alt="right arrow"
              onClick={nextProject}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUpSuccess;
