import React from "react";
import { Link } from "@remix-run/react";
import type { BlogCard as BlogCardProps } from "~/constants/types";
import { urlFor } from "~/root";

const BlogCard: React.FC<{ cardData: BlogCardProps }> = ({ cardData }) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-0 mb-lg-3 p-3 p-lg-4 justify-content-between">
      <Link to={cardData?.slug.current} className="text-decoration-none">
        <div className="Blog-block p-3">
          <div className="card-body p-0">
            <h5 className="card-title m-0 pb-2 d-flex align-items-center justify-content-between">
              {cardData.name}
            </h5>
            <div className="d-flex justify-content-between">
              <h4 className="card-text mb-2"> {cardData.type}</h4>
              <h4 className="card-text mb-2"> {cardData.date}</h4>
            </div>
            <div className="blog-image-box">
              <div className="card blog-image rounded-0">
                {cardData.image && (
                  <img
                    src={urlFor(cardData.image).width(900).height(900).url()}
                    className="card-img-top "
                    alt={cardData.name}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
            <h4 className="card-text mt-2 mb-0">{cardData.description}</h4>
            <span className="read-more-link text-decoration-none">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
