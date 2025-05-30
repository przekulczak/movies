import { useGetMultipleMoviesQuery } from "../../store/movieApi";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Container, EmptyState } from "./styled";

export function Favourites() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const {
    data: movies,
    isLoading,
    error,
  } = useGetMultipleMoviesQuery(favorites, {
    skip: favorites.length === 0,
  });

  if (favorites.length === 0) {
    return (
      <Container>
        <EmptyState>
          No favorite movies yet. Add some movies to your favorites!
        </EmptyState>
      </Container>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading favorites</div>;
  }

  if (!movies) {
    return null;
  }

  return (
    <Container>
      <MovieList
        movies={movies}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    </Container>
  );
}
