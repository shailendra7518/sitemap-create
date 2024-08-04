import React from "react";
import { urlFor } from "~/root";

const ProjectDetailBanner: React.FC<any> = ({ project }) => {
  return (
    <div className="main-banner project-detail-banner d-flex align-items-center">
      <div className="container">
        <div className="project-detail-banner-inner banner-text d-flex justify-content-center align-items-center flex-column">
          <img
            className="img-fluid mt-lg-5"
            src={urlFor(project?.bannerImage).url()}
            alt={project.bannerTitle + "-banner-image"}
          />
          <h1 className="banner-title fw-bolder mb-lg-2 mt-5 text-center">
            {project.bannerTitle}
          </h1>
          <p
            className="banner-detail text-center"
            role="heading"
            aria-level={2}
          >
            {project.bannerSubtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailBanner;
