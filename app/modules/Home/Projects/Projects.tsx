import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import NavLink from "~/components/NavLink";
import Widgets from "../Hero/Widgets";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface ProjectProps {
  projects: Record<string, any>;
  settings?: Record<string, any>;
  isWidget?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC<ProjectProps> = ({ projects, settings, isWidget }) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [openProjectIndex, setOpenProjectIndex] = useState(-1);

  useEffect(() => {
    const projectCards = gsap.context(() => {
      if (window.innerWidth >= 1200) {
        const refCards = gsap.utils.selector(projectsRef);
        const anim = gsap.fromTo(
          refCards(".projects"),
          {
            y: 100,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.3,
          }
        );
        ScrollTrigger.create({
          trigger: projectsRef.current,
          toggleActions: "play none none reset",
          animation: anim,
        });
      }
    });

    return () => {
      projectCards.revert();
    };
  }, []);
  return (
    <div className="project-slider h-100" ref={projectsRef}>
      <div className="heading project-heading text-center justify-content-center py-5">
        <h2>
          <span className="fw-bold"> Our </span> Works
        </h2>
      </div>
      <div className="container">
        <Slider {...settings}>
          {projects.map((project: any, index: number) => {
            return (
              <div className="project-card-box projects" key={index}>
                <ProjectCard
                  project={project}
                  onClick={() => setOpenProjectIndex(index)}
                  lazyLoadImage
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="more-project-btn d-flex justify-content-center">
        <NavLink
          classes="main-btn shadow-none sec-btn px-md-3 py-2"
          href="/contact"
        >
          Schedule a Meeting
        </NavLink>

        <NavLink
          classes="main-btn shadow-none ms-5 px-3 py-2 meeting-btn"
          href="/projects/#portfolio"
        >
          View Our Portfolio
        </NavLink>
      </div>
      {isWidget && <Widgets />}
      <ProjectModal
        show={openProjectIndex >= 0}
        onHide={() => setOpenProjectIndex(-1)}
        index={openProjectIndex}
        projects={projects}
      />
    </div>
  );
};

export default Projects;
