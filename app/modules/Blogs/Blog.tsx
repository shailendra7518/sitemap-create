import { PortableText } from "@portabletext/react";
import { urlFor } from "~/root";
import { Link } from "@remix-run/react";
import CategoryBlogs from "./CategoryBlogs";
import Accordion from "react-bootstrap/Accordion";
import { DisqusCommentBlock } from "~/components/DisqusCommentBlock";
import { MdKeyboardArrowLeft } from "react-icons/md";
import UseLazyLoad from "~/helpers/useLazyLoad";

const Blog = ({ blogData, categoryBlogs, blog }: any) => {
  const allTags = [
    "Interviews",
    "Engineering",
    "Design",
    "Products",
    "Business",
  ];
  const myPortableComponents: any = {
    types: {
      image: ({ value }: any) => (
        <img src={urlFor(value).url()} alt="blog-sub-image" loading="lazy" />
      ),
      customAccordion: (
        { value }: any // Custom serializer for the custom accordion type
      ) => (
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{value.title}</Accordion.Header>
            <Accordion.Body>
              <PortableText
                value={value.content}
                components={myPortableComponents}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
  };
  return (
    <>
      {categoryBlogs.length ? (
        <CategoryBlogs categoryBlogs={categoryBlogs} blog={blog} />
      ) : (
        <div className="blog">
          <div className="blog-details">
            <div className="container">
              <article className="blog__content">
                <div className="back-button my-3">
                  <Link
                    to="/blogs"
                    className="text-decoration-none text-theme d-sm-block d-none"
                  >
                    <MdKeyboardArrowLeft role="presentation" className="mb-1" />
                    <span>{"   Back "}</span>
                  </Link>
                </div>
                <h1 className="blog__title">{blogData.name}</h1>
                <div className="my-5">
                  <span className="blog__date my-3">
                    By TechStaunch at {blogData.date} on{" "}
                    {blogData.tags && blogData.tags.length > 0 ? (
                      <span className="fw-bolder text-theme">
                        {blogData.tags.map((item: any, index: number) => (
                          <>
                            {index > 0 &&
                              index !== blogData.tags.length - 1 &&
                              ", "}
                            {index === blogData.tags.length - 1 &&
                              blogData.tags.length > 1 &&
                              " & "}
                            <Link
                              className="text-decoration-none"
                              to={`/blogs/${item}`}
                            >
                              {item}
                            </Link>
                          </>
                        ))}
                      </span>
                    ) : (
                      <Link
                        className="fw-bolder text-decoration-none"
                        to={`/blogs/${blogData.type}`}
                      >
                        {blogData.type}
                      </Link>
                    )}
                  </span>
                  <div className="d-flex justify-content-center my-5">
                    <img
                      src={urlFor(blogData.image).url()}
                      className="blog__image"
                      alt={blogData.name}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center w-100 flex-column">
                  <div className="blog__data w-100">
                    <PortableText
                      value={blogData.body}
                      components={myPortableComponents}
                    />
                  </div>
                  <UseLazyLoad>
                    <DisqusCommentBlock blogData={blogData} />
                  </UseLazyLoad>
                </div>
                <div className="d-flex gap-3 flex-wrap mt-4">
                  {blogData.tags
                    ? allTags
                        .filter((item) => !blogData.tags.includes(item))
                        .map((filteredTags) => (
                          <Link
                            className="blog-tags"
                            to={`/blogs/${filteredTags}`}
                          >
                            {filteredTags}
                          </Link>
                        ))
                    : allTags
                        .filter((item) => item != blogData.type)
                        .slice(0, 3)
                        .map((tag) => (
                          <Link className="blog-tags" to={`/blogs/${tag}`}>
                            {tag}
                          </Link>
                        ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
