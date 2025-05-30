import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../../../store/movieApi";
import favoritesReducer from "../../../store/favoritesSlice";
import { Movies } from "../index";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

describe("Movies", () => {
  it("renders search input", () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Search movies...")).toBeInTheDocument();
  });

  it("displays search results after successful search", async () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search movies...");
    const searchButton = screen.getByRole("button", { name: "Search" });

    fireEvent.change(searchInput, { target: { value: "kiler" } });

    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(
      screen.getByText("Ninja Dojo and the Kiler of Masters")
    ).toBeInTheDocument();
    expect(screen.getByText("Fantom Kiler 3")).toBeInTheDocument();
    expect(screen.getByText("Fantom Kiler 2")).toBeInTheDocument();
    expect(screen.getByText("Killer Bean Forever")).toBeInTheDocument();
    expect(screen.getByText("Killers")).toBeInTheDocument();
  });
});
