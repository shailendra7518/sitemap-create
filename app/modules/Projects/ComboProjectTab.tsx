import React from "react";
import { PaginatedProjects } from "~/components/PaginatedProjects";

const ComboProjectTab: React.FC<any> = ({ projects }) => {
  return (
    <div className="container pb-5" id="portfolio">
      <div className="project-showcase">
        <div className="header-title py-sm-3">
          <h1 className="text-center my-5">
            <span className="fw-bold">Our</span> Works
          </h1>
        </div>

        {projects && <PaginatedProjects itemsPerPage={6} data={projects} />}
      </div>
      <div></div>
    </div>
  );
};

export default ComboProjectTab;
