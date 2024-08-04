import ReactPaginate from "react-paginate";
import { usePagination } from "~/hooks/usePagination";
import BlogCard from "~/modules/Home/BlogSection/Card";

function Blogs({ currentItems }: any) {
  return (
    <>
      {currentItems &&
        currentItems.map((blog: any, index: number) => (
          <div className="col-md-4" key={`blog-${index}`}>
            <article className="blog">
              <BlogCard blog={blog} key={`blogs-${index}`} />
            </article>
          </div>
        ))}
    </>
  );
}

export function PaginatedBlogs({ itemsPerPage, data }: any) {
  const { currentItems, pageCount, handlePageClick, currentPage } =
    usePagination({ itemsPerPage, data });

  return (
    <>
      <Blogs currentItems={currentItems} />
      <div></div> {/* to center the page list numbers*/}
      {pageCount > 1 && (
        <ReactPaginate
          pageLinkClassName="text-decoration-none"
          className="paginated d-flex justify-content-center gap-4"
          pageClassName="py-2 px-4 fs-5"
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          hrefBuilder={(page) => {
            return `/projects?page=${page}`;
          }}
          forcePage={currentPage - 1}
          hrefAllControls={true}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
        />
      )}
    </>
  );
}
