import ReactPaginate from "react-paginate";
import { Link } from "@remix-run/react";
import ProjectCard from "~/modules/Home/Projects/ProjectCard";
import { usePagination } from "~/hooks/usePagination";

function Items({ currentItems }: any) {
  return (
    <>
      {currentItems &&
        currentItems.map((item: any, index: number) => (
          <Link
            to={`/projects/${item.slug.current}`}
            className="project-card-box text-decoration-none"
            key={index}
          >
            <ProjectCard project={item} key={index} />
          </Link>
        ))}
    </>
  );
}

function topToProject() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export function PaginatedProjects({ itemsPerPage, data }: any) {
  const { currentItems, pageCount, handlePageClick, currentPage } =
    usePagination({ itemsPerPage, data });

  return (
    <>
      <div className="grid-container">
        <Items currentItems={currentItems} />
      </div>

      {pageCount > 1 && (
        <ReactPaginate
          pageLinkClassName="text-decoration-none"
          className="paginated d-flex justify-content-center gap-4 mt-4"
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
          onClick={topToProject}
        />
      )}
    </>
  );
}
