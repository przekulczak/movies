import { Navigate, useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../store/movieApi";
import { FavoriteButton, Loader } from "../../components";
import {
  Container,
  Card,
  Poster,
  Info,
  Title,
  Meta,
  Rating,
  Overview,
  ImdbLink,
  AdultBadge,
  Countries,
  Country,
} from "./styled";
import { useHeader } from "../../hooks/useHeader";
import type { MovieDetails } from "../../types";
import { useErrorBoundary } from "react-error-boundary";

export function Movie() {
  useHeader({
    backButton: true,
    content: [],
  });
  const { id } = useParams();
  const { data: movie, isLoading, error } = useGetMovieDetailsQuery(Number(id));
  const { showBoundary } = useErrorBoundary();
  if (isLoading) return <Loader />;
  if (!movie) return <Navigate to="/" />;
  if (error) {
    showBoundary(error);
    return null;
  }
  return (
    <Container>
      <Card>
        <Poster
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.jpg"
          }
          alt={`${movie.title} poster`}
        />
        <Info>
          <Title>
            {movie.title}
            {movie.adult && <AdultBadge>18+</AdultBadge>}
            <FavoriteButton movieId={movie.id} />
          </Title>
          <Meta>
            <Rating>⭐ {movie.vote_average?.toFixed(1)}</Rating>
            <span>{movie.release_date?.split("-")[0]}</span>
            <span>{movie.runtime ? `${movie.runtime} min` : ""}</span>
            {movie.imdb_id && (
              <ImdbLink
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDB
              </ImdbLink>
            )}
          </Meta>
          {movie.production_countries.length > 0 && (
            <Countries>
              {movie.production_countries.map(
                (
                  country: Pick<
                    MovieDetails,
                    "production_countries"
                  >["production_countries"][number]
                ) => (
                  <Country key={country.iso_3166_1}>{country.name}</Country>
                )
              )}
            </Countries>
          )}
          {movie.overview && <Overview>{movie.overview}</Overview>}
        </Info>
      </Card>
    </Container>
  );
}
