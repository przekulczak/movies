import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie, MovieDetails } from "../types";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const BASE_URL = "http://localhost:8000";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<
      { results: Movie[]; total_pages: number },
      { query: string; page: number }
    >({
      query: ({ query, page }) => ({
        url: `/search/movie?query=${query}&page=${page}`,
      }),
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (movieId) => `/movie/${movieId}`,
    }),
    getMultipleMovies: builder.query<MovieDetails[], number[]>({
      async queryFn(movieIds, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const results = await Promise.allSettled(
            movieIds.map((id) => fetchWithBQ(`/movie/${id}`))
          );

          const successfulResults = results
            .filter(
              (
                result
              ): result is PromiseFulfilledResult<{ data: MovieDetails }> =>
                result.status === "fulfilled" && result.value.data !== undefined
            )
            .map((result) => result.value.data);

          if (successfulResults.length === 0) {
            return {
              error: {
                status: 500,
                data: "Failed to fetch any movies",
              } as FetchBaseQueryError,
            };
          }

          return { data: successfulResults };
        } catch {
          return {
            error: {
              status: 500,
              data: "Error fetching movies",
            } as FetchBaseQueryError,
          };
        }
      },
    }),
  }),
});

export const {
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMultipleMoviesQuery,
} = movieApi;
