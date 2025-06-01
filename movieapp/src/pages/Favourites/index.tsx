import { useGetMultipleMoviesQuery } from "../../store/movieApi";
import { MovieList, Loader } from "../../components";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Container, EmptyState } from "./styled";
import { useHeader } from "../../hooks/useHeader";
import { useErrorBoundary } from "react-error-boundary";

export function Favourites() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const { showBoundary } = useErrorBoundary();

  useHeader({
    backButton: false,
    content: [{ name: "Search", href: "/" }],
  });

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
    return <Loader />;
  }

  if (error) {
    showBoundary(error);
  }

  if (!movies) {
    return null;
  }

  return (
    <Container>
      <MovieList movies={movies} />
    </Container>
  );
}
