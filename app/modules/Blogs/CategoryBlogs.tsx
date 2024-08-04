import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { sanityClient } from "~/sanity/client";
import { PaginatedBlogs } from "./PaginatedBlogs";

const CategoryBlogs = ({ categoryBlogs, blog }: any) => {
  let sortedBlogs = categoryBlogs;
  const [filteredBlogs, setFilteredBlogs] = useState(sortedBlogs);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    sortedBlogs = [...categoryBlogs];
    setFilteredBlogs(sortedBlogs);
  }, [categoryBlogs]);
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    const delayDebounceSearch = setTimeout(async () => {
      try {
        const result = await sanityClient.fetch(
          `*[_type == "blog" && ("${blog}" in tags[] || type == "${blog}") && (description match "${value}*" || body[].children[].text match "${value}*")] | order(_createdAt desc)`
        );
        if (!result.length) {
          setFilteredBlogs(filteredBlogs);
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
            <h1 className="blog-heading">{blog}</h1>
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
          <Tabs>
            <Tab eventKey="articles" title="">
              <hr className="mb-3 border-2 tab-bottom-line mt-0" />
              <div className="row" id="react-aria-1-tab-articles">
                <PaginatedBlogs data={filteredBlogs} itemsPerPage={6} />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CategoryBlogs;
