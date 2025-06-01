import { useState } from "react";
import { SearchInput, Loader, MovieList } from "../../components";
import { useSearchMoviesQuery } from "../../store/movieApi";
import { useHeader } from "../../hooks/useHeader";
import { useErrorBoundary } from "react-error-boundary";
import { usePagination } from "../../hooks";

export function Movies() {
  useHeader({
    backButton: false,
    content: [{ name: "Favorites", href: "/favourites" }],
  });
  const { showBoundary } = useErrorBoundary();
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const { page, setPage } = usePagination({});

  const { data, isLoading, error } = useSearchMoviesQuery(
    { query, page },
    { skip: !query }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setQuery(searchQuery);
      setPage(1);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    showBoundary(error);
  }

  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {data && (
        <MovieList movies={data.results} totalPages={data.total_pages} />
      )}
    </>
  );
}
