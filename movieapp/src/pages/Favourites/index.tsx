import { useSelector } from "react-redux";
import { useGetMultipleMoviesQuery } from "../../store/movieApi";
import { MovieList } from "../../components";
import { useHeader } from "../../hooks/useHeader";
import { useErrorBoundary } from "react-error-boundary";
import { calculateTotalPages } from "../../helpers";
import {
  selectFavoritesCount,
  selectPaginatedFavorites,
} from "../../store/favourites/selectors";
import { headerContent } from "../../data";
import { usePageParams } from "../../hooks";

export function Favourites() {
  const { page } = usePageParams();
  const favouritesCount = useSelector(selectFavoritesCount);
  const currentPageFavourites = useSelector(selectPaginatedFavorites(page));
  const totalPages = calculateTotalPages(favouritesCount);

  const { showBoundary } = useErrorBoundary();

  useHeader({
    backButton: false,
    content: [headerContent.SEARCH],
    title: "Favourites",
  });

  const {
    data: movies,
    isFetching,
    isLoading,
    error,
  } = useGetMultipleMoviesQuery(currentPageFavourites, {
    skip: currentPageFavourites.length === 0,
  });

  if (error) {
    showBoundary(error);
  }

  return (
    <MovieList
      movies={movies}
      totalPages={totalPages}
      isFetching={isFetching || isLoading}
    />
  );
}
