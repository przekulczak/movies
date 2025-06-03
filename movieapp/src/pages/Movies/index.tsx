import { MovieList } from "../../components";
import { useSearchMoviesQuery } from "../../store/movieApi";
import { useHeader } from "../../hooks/useHeader";
import { useErrorBoundary } from "react-error-boundary";
import { headerContent } from "../../data";
import { SearchInput } from "../../components";
import { useSearch, usePageParams } from "../../hooks";

export function Movies() {
  useHeader({
    backButton: false,
    content: [headerContent.FAVORITES],
    title: "Search",
  });
  const { showBoundary } = useErrorBoundary();
  const { page, setPage } = usePageParams();
  const { query, setQuery, debouncedQuery, isTyping } = useSearch();

  const { data, isFetching, error } = useSearchMoviesQuery(
    { query: debouncedQuery, page },
    { skip: !debouncedQuery }
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(debouncedQuery);
  };

  if (error) {
    showBoundary(error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput value={query} onChange={handleSearch} />
      {data && (
        <MovieList
          movies={data.results}
          totalPages={data.total_pages}
          isFetching={isFetching || isTyping}
        />
      )}
    </form>
  );
}
