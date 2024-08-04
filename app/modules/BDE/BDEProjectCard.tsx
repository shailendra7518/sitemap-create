import React from "react";
import { TestimonialData } from "~/constants/types";
import { urlFor } from "~/root";

const BDEProjectCard: React.FC<{ testimonialData: TestimonialData }> = ({
  testimonialData,
}) => {
  return (
    <article className="project-card">
      <div className="project-card__img-box" role="button" tabIndex={0}>
        <img
          src={urlFor(testimonialData.thumbnail).url()}
          alt={testimonialData.name}
          className="project-card__img"
          loading="lazy"
        />
      </div>
      <h2>{testimonialData.name}</h2>
      <p>{testimonialData.subTitle}</p>
    </article>
  );
};

export default BDEProjectCard;
