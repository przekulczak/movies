import { useEffect } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

interface UsePaginationProps {
  itemsCount?: number;
  totalPages?: number;
}

export const usePagination = ({
  itemsCount = 20,
  totalPages,
}: UsePaginationProps) => {
  const calculateTotalPages = (itemsCount: number): number => {
    return Math.ceil(itemsCount / 20);
  };
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page"));
  const setPage = (newPage: number) =>
    setSearchParams({ page: String(newPage) });

  useEffect(() => {
    if (!page) {
      setPage(1);
    }
  }, [page]);

  const paginationComponent = (
    <Pagination
      currentPage={page}
      totalPages={totalPages || calculateTotalPages(itemsCount)}
      onPageChange={setPage}
    />
  );

  return { page, paginationComponent, setPage };
};
