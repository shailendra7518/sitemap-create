import React from "react";
import { Link } from "@remix-run/react";
import type { ShowCaseCard } from "~/constants/types";

const ProjectShowcaseCard: React.FC<{ ShowcaseCard: ShowCaseCard }> = ({
  ShowcaseCard,
}) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-0 mb-lg-3 p-3 p-lg-4">
      <div className="project-block">
        <Link to={"/projects/" + ShowcaseCard.title.toLowerCase()}>
          <div className="card project-block-image  rounded-0">
              <img
                src={ShowcaseCard.thumbnail}
                className="card-img-top p-2"
                alt={ShowcaseCard.alternate}
              />
          </div>
        </Link>
        <div className="card-body p-0">
          <h5 className="card-title m-0 pt-1 d-flex align-items-center justify-content-between">
            {ShowcaseCard.title}
            <span>
              <img src={ShowcaseCard.logo} className="showcard-logo" alt="" />
            </span>
          </h5>
          <p className="card-text m-0">{ShowcaseCard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcaseCard;
