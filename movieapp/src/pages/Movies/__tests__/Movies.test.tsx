import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../../../store/movieApi";
import favoritesReducer from "../../../store/favourites/favoritesSlice";
import { Movies } from "../index";
import { ErrorBoundary } from "react-error-boundary";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <ErrorBoundary fallback={<div>Error</div>}>{ui}</ErrorBoundary>
      </MemoryRouter>
    </Provider>
  );
};

describe("Movies", () => {
  it("renders search input", () => {
    renderWithProviders(<Movies />);
    expect(
      screen.getByPlaceholderText("Type to search...")
    ).toBeInTheDocument();
  });

  it("shows search results", async () => {
    renderWithProviders(<Movies />);

    const searchInput = screen.getByPlaceholderText("Type to search...");
    fireEvent.change(searchInput, { target: { value: "kiler" } });

    await waitFor(() => {
      expect(screen.getByText("Killer")).toBeInTheDocument();
      expect(
        screen.getByText("Ninja Dojo and the Kiler of Masters")
      ).toBeInTheDocument();
      expect(screen.getByText("Fantom Kiler 3")).toBeInTheDocument();
    });
  });
});
