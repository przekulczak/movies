import type { Movie } from "../../types/movie";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../Pagination/Pagination";
import { MovieListWrapper } from "./styled";

interface Props {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function MovieList({
  movies,
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pagination = (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
  return (
    <>
      {pagination}
      <MovieListWrapper>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieListWrapper>
      {pagination}
    </>
  );
}
