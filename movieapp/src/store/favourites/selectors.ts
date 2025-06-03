import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const selectFavoritesCount = createSelector(
  [selectFavorites],
  (favorites) => favorites.length
);

export const selectPaginatedFavorites = (page: number) =>
  createSelector([selectFavorites], (favorites) => {
    const startIndex = (page - 1) * 20;
    return favorites.slice(startIndex, startIndex + 20);
  });
