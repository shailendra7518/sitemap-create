import React from "react";
import { Link } from "@remix-run/react";
import { urlFor } from "~/root";
import moment from "moment";

const Card: React.FC<{ blog: any; lazyLoadImage?:boolean }> = ({ blog,lazyLoadImage }) => {
  return (
    <div className="blog-card d-flex flex-column gap-4">
      <Link to={`/blogs/${blog.slug.current}`}>
        <div className="d-flex img-box ratio ratio-16x9">
          <img
            src={urlFor(blog.image).url()}
            className="img-fluid blog-card-img"
            alt={blog.name + "-image"}
            loading={lazyLoadImage? "lazy" :"eager"}
          />
        </div>
      </Link>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          {blog.tags && blog.tags.length > 0 ? (
            <span className="text-theme mb-1">
              {blog.tags.map((item: any, index: number) => (
                <>
                  {index > 0 && index !== blog.tags.length - 1 && ", "}
                  {index === blog.tags.length - 1 &&
                    blog.tags.length > 1 &&
                    " & "}
                  <Link className="blog-tag" to={`/blogs/${item}`}>
                    {item}
                  </Link>
                </>
              ))}
            </span>
          ) : (
            <Link className="blog-tag" to={`/blogs/${blog.type}`}>
              {blog.type}
            </Link>
          )}
          <p className="blog-date">{moment(blog.date).format("ll")}</p>
        </div>
        <Link to={`/blogs/${blog.slug.current}`}>
          <h2 className="blog-card-title">{blog.name}</h2>
          <p className="hover-underline-animation">Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
