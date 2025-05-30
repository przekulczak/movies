import { useState } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSearchMoviesQuery } from "../../store/movieApi";

export function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.toString()}</div>;
  }
  console.log(JSON.stringify(data, null, 2));
  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {data && (
        <MovieList
          movies={data.results}
          currentPage={page}
          totalPages={data.total_pages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
