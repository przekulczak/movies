import type { Movie } from "../../types/movie";
import { MovieCard } from "../MovieCard";
import { MovieListWrapper } from "./styled";
import { usePagination } from "../../hooks";

interface Props {
  movies: Movie[];
  totalPages?: number;
}

export function MovieList({ movies, totalPages }: Props) {
  const { paginationComponent } = usePagination({
    itemsCount: movies.length,
    totalPages,
  });

  return (
    <>
      {paginationComponent}
      <MovieListWrapper>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieListWrapper>
      {paginationComponent}
    </>
  );
}
