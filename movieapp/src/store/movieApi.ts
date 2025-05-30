import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie, MovieDetails } from "../types/movie";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTllNTA2ZDI3ZDUwNGRlYzk3MTM4MGJlYTcwM2Y1MyIsIm5iZiI6MTc0ODU0NTUyNi42Nywic3ViIjoiNjgzOGFmZjYxZDljNzk3ODM2YTg3ZjhiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fv_qQ9Oo8vqT3hAqiFAPXFtMy2Wf8ZanwyhuBAR42PU";
const USE_BACKEND = false;
const BASE_URL = USE_BACKEND
  ? "http://localhost:8000"
  : "https://api.themoviedb.org/3";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (!USE_BACKEND) {
        headers.set("Authorization", `Bearer ${TMDB_TOKEN}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<
      { results: Movie[]; total_pages: number },
      { query: string; page: number }
    >({
      query: ({ query, page }) => ({
        url: USE_BACKEND
          ? `/search/movie?query=${query}&page=${page}`
          : `/search/movie`,
        params: USE_BACKEND ? undefined : { query, page },
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
              (result): result is PromiseFulfilledResult<any> =>
                result.status === "fulfilled" && result.value.data !== undefined
            )
            .map((result) => result.value.data as MovieDetails);

          if (successfulResults.length === 0) {
            return {
              error: {
                status: 500,
                data: "Failed to fetch any movies",
              } as FetchBaseQueryError,
            };
          }

          return { data: successfulResults };
        } catch (error) {
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
