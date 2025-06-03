import { useSelector } from "react-redux";
import { useGetMultipleMoviesQuery } from "../../store/movieApi";
import { MovieList } from "../../components";
import { useHeader } from "../../hooks/useHeader";
import { useErrorBoundary } from "react-error-boundary";
import { headerContent } from "../../data";
import { selectFavorites } from "../../store/favourites/selectors";
import { useRef } from "react";

export function Favourites() {
  const favourites = useSelector(selectFavorites);
  const initialFavourites = useRef(favourites);
  const { showBoundary } = useErrorBoundary();

  useHeader({
    backButton: true,
    content: [headerContent.SEARCH],
    title: "Favourites",
  });

  const {
    data: movies,
    isFetching,
    error,
  } = useGetMultipleMoviesQuery(initialFavourites.current, {
    skip: initialFavourites.current.length === 0,
  });

  if (error) {
    showBoundary(error);
  }

  return <MovieList movies={movies} isFetching={isFetching} />;
}
