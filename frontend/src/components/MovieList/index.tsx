import type { Movie } from "../../types";
import { MovieCard } from "../MovieCard";
import { MovieListWrapper } from "./styled";
import { calculateTotalPages } from "../../helpers";
import { Pagination } from "../Pagination";
import { Loader } from "../Loader";
import { EmptyList } from "../EmptyList";

interface Props {
  movies?: Movie[];
  totalPages?: number;
  isFetching?: boolean;
}

export function MovieList({ movies, totalPages, isFetching }: Props) {
  if (movies?.length === 0) {
    return <EmptyList message="No movies found" />;
  }
  const pagination = totalPages && (
    <Pagination
      totalPages={totalPages || calculateTotalPages(movies?.length || 0)}
      disabled={isFetching}
    />
  );

  return (
    <>
      {pagination}
      {isFetching ? (
        <Loader />
      ) : (
        <MovieListWrapper>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieListWrapper>
      )}
      {pagination}
    </>
  );
}
