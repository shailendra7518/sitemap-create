import { useMemo } from "react";
import { useSearchParams } from "@remix-run/react";

export const usePagination = ({ itemsPerPage, data }: any) => {
  const pageCount = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  const currentPage = parseInt(searchParams.get("page") || "1");

  const currentItems = useMemo(() => {
    const itemOffset =
      (currentPage * itemsPerPage - itemsPerPage) % data.length;
    const endOffset = itemOffset + itemsPerPage;

    return data.slice(itemOffset, endOffset);
  }, [currentPage, data, itemsPerPage]);

  const handlePageClick = (event: any) => {
    setSearchParams({ page: event.selected + 1 });
  };

  return {
    currentItems,
    pageCount,
    handlePageClick,
    currentPage,
  };
};
