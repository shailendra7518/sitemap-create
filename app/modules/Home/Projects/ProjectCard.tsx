import React from "react";
import { Link } from "@remix-run/react";
import { urlFor } from "~/root";

const ProjectCard: React.FC<{ project: any; onClick?: any; lazyLoadImage?: boolean }> = ({
  project,
  onClick,
  lazyLoadImage
}) => {
  return (
    <article className="project-card d-flex flex-column" onClick={onClick}>
      <div className="project-card__img-box" role="button" tabIndex={0}>
        <img
          src={urlFor(project.thumbnail).url()}
          className="project-card__img"
          alt={project.name}
          width="368"
          height="272"
          loading={lazyLoadImage ? "lazy" : "eager" }
        />
      </div>
      <div className="project-card__content p-4" role="button" tabIndex={0}>
        <h2 className="project-card__title">{project.name}</h2>
        <p className="project-card__desc">{project.subTitle}</p>
      </div>
      <div className="d-flex justify-content-center">
        {onClick ? (
          <button className="project-card__icon-box bg-transparent border-0">
            <img
              src="/images/icons/explore.svg"
              className="p-2 rounded-circle project-card__icon"
              onClick={onClick}
              alt="explore"
              width="42"
              height="42"
              loading="lazy"
            />
          </button>
        ) : (
          <Link to={"/projects/" + project.slug.current}>
            <button className="project-card__icon-box bg-transparent border-0">
              <img
                src="/images/icons/explore.svg"
                className="p-2 rounded-circle project-card__icon"
                alt="explore"
                width="42"
                height="42"
                onClick={onClick}
              />
            </button>
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
