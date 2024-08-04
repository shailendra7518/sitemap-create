import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import BlogCard from "~/components/BlogCard/BlogCard";
import { dialogConstants } from "~/constants/dialogConstants";
import { DialogBoxData, DialogConstantData } from "~/constants/types";
import { PaginatedBlogs } from "~/modules/Blogs/PaginatedBlogs";
import { urlFor } from "~/root";
import { sanityClient } from "~/sanity/client";
import blogCSS from "../../styles/blogs.css";
import globalCSS from "../../styles/global.css";

export async function loader() {
  const [blogs, seo] = await Promise.all([
    sanityClient.fetch(`*[_type == "blog"] | order(_createdAt desc)`),
    sanityClient.fetch(
      `*[_type == "page" && name == "About"]{seo} | order(_createdAt desc)`
    ),
    // sanityClient.fetch(
    //   `*[_type == "blog" && type == "Interviews" ] | order(_updatedAt asc)`
    // ),
    // sanityClient.fetch(
    //   `*[_type == "blog" && type == "Products" ] | order(_updatedAt asc)`
    // ),
    // sanityClient.fetch(
    //   `*[_type == "blog" && type == "Design" ] | order(_updatedAt asc)`
    // ),
    // sanityClient.fetch(
    //   `*[_type == "blog" && type == "Engineering" ] | order(_updatedAt asc)`
    // ),
    // sanityClient.fetch(
    //   `*[_type == "blog" && type == "Business" ] | order(_updatedAt asc)`
    // ),
  ]);

  return {
    blogs,
    interviews: [],
    products: [],
    design: [],
    engineering: [],
    business: [],
    seo: seo[0].seo,
  };
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: blogCSS,
    },
    {
      rel: "stylesheet",
      href: globalCSS,
    },
  ];
};

export const meta: MetaFunction = ({ data: { seo } }) => {
  return {
    title: seo.title,
    description: seo.description,
    "twitter:site": "@TechStaunch",
    "twitter:title": seo.title,
    "twitter:description": seo.description,
    "og:title": seo.title,
    "og:description": seo.description,
    "og:image": urlFor(seo.image).url(),
    "og:image:height": "200",
    "og:image:width": "200",
    "og:type": "website",
    "og:url": `/blog`,
    "og:site_name": "TechStaunch",
  };
};

const Blogs = () => {
  const { blogs, interviews, products, design, engineering, business } =
    useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const dialogData = blogs.map((blog: DialogBoxData) => ({
    name: blog.name,
    title: blog.dialogHeading ? blog.dialogHeading : "Have a Query?",
    link: `/blogs/${blog.slug.current}`,
  }));

  dialogData.forEach((data: DialogConstantData) => {
    if (!dialogConstants.some((item) => item.name === data.name)) {
      dialogConstants.push(data);
    }
  });

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    const delayDebounceSearch = setTimeout(async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "blog" && (description match "${value}*" || body[].children[].text match "${value}*")] | order(_createdAt desc)`
        );
        if (!result.length) {
          setFilteredBlogs(blogs);
        } else {
          setFilteredBlogs(result);
        }
      } catch (error) {
        console.error("Error searching blogs:", error);
      }
    }, 500);
    return () => clearTimeout(delayDebounceSearch);
  };
  return (
    <section className="blog-showcase">
      <div className="container">
        <div className="blog-tabs">
          <div className="blog-heading-search-container">
            <h1 className="blog-heading">All Articles</h1>
            <div className="search-tab">
              <FaSearch />
              <input
                className="py-1 flex-grow-1"
                type="text"
                placeholder="Search for blogs"
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="search"
              />
            </div>
          </div>

          <Tabs defaultActiveKey="articles">
            <Tab eventKey="articles" title="">
              <hr className="mb-3 border-2 tab-bottom-line mt-0" />
              <div className="row" id="react-aria-1-tab-articles">
                <PaginatedBlogs data={filteredBlogs} itemsPerPage={6} />
              </div>
            </Tab>
            {interviews.length > 0 && (
              <Tab eventKey="Interviews" title="Interviews">
                <hr className="mb-3 border-2 tab-bottom-line mt-0" />
                <div className="row">
                  {interviews.map((blog: any, index: number) => (
                    <BlogCard cardData={blog} key={`interviews-${index}`} />
                  ))}
                </div>
              </Tab>
            )}
            {products.length > 0 && (
              <Tab eventKey="Product" title="Product">
                <hr className="mb-3 border-2 tab-bottom-line mt-0" />
                <div className="row">
                  {products.length > 0 &&
                    products.map((blog: any, index: number) => (
                      <BlogCard cardData={blog} key={`products-${index}`} />
                    ))}
                </div>
              </Tab>
            )}
            {design.length > 0 && (
              <Tab eventKey="Design" title="Design">
                <hr className="mb-3 border-2 tab-bottom-line mt-0" />
                <div className="row">
                  {design.length > 0 &&
                    design.map((blog: any, index: number) => (
                      <BlogCard cardData={blog} key={`design-${index}`} />
                    ))}
                </div>
              </Tab>
            )}
            {engineering.length > 0 && (
              <Tab eventKey="Engineering" title="Engineering">
                <hr className="mb-3 border-2 tab-bottom-line mt-0" />
                <div className="row">
                  {engineering.length > 0 &&
                    engineering.map((blog: any, index: number) => (
                      <BlogCard cardData={blog} key={`engineering-${index}`} />
                    ))}
                </div>
              </Tab>
            )}
            {business.length > 0 && (
              <Tab eventKey="Bussiness" title="Bussiness">
                <hr className="mb-3 border-2 tab-bottom-line mt-0" />
                <div className="row">
                  {business.length > 0 &&
                    business.map((blog: any, index: number) => (
                      <BlogCard cardData={blog} key={`business-${index}`} />
                    ))}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
