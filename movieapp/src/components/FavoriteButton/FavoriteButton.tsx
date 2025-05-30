import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { StyledFavouriteButton } from "./styled";

interface Props {
  movieId: number;
}

export function FavoriteButton({ movieId }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.includes(movieId);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movieId));
    } else {
      dispatch(addFavorite(movieId));
    }
  };

  return (
    <StyledFavouriteButton
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "★" : "☆"}
    </StyledFavouriteButton>
  );
}
