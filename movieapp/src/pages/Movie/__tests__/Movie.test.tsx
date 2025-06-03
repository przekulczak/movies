import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Movie } from "../index";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const renderMovie = (movieId: string) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/movie/${movieId}`]}>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Routes>
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </ErrorBoundary>
      </MemoryRouter>
    </Provider>
  );
};

describe("Movie", () => {
  it("renders movie details correctly", async () => {
    renderMovie("31132");
    expect(await screen.findByText("Killer")).toBeInTheDocument();
    expect(screen.getByText("⭐ 7.6")).toBeInTheDocument();
    expect(screen.getByText("1997")).toBeInTheDocument();
    expect(screen.getByText("104 min")).toBeInTheDocument();
    expect(screen.getByText("IMDB")).toHaveAttribute(
      "href",
      "https://www.imdb.com/title/tt0127626"
    );
    expect(screen.getByText("Poland")).toBeInTheDocument();
    expect(
      screen.getByText(
        'An innocent cab driver is mistaken for a contract killer and imprisoned. Soon, he is sprung by a mob boss who needs a "killer" for a few more jobs.'
      )
    ).toBeInTheDocument();
  });
});
