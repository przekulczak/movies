import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../store/movieApi";
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";
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
import { Loader } from "../../components/Loader";

export function Movie() {
  useHeader({
    backButton: true,
    content: [],
  });
  const { id } = useParams();
  const { data: movie, isLoading, error } = useGetMovieDetailsQuery(Number(id));

  if (isLoading) return <Loader />;
  if (error || !movie) return <div>Error loading movie</div>;
  return (
    <Container>
      <Card>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <Info>
          <Title>
            {movie.title}
            {movie.adult && <AdultBadge>18+</AdultBadge>}
            <FavoriteButton movieId={movie.id} />
          </Title>
          <Meta>
            <Rating>⭐ {movie.vote_average.toFixed(1)}</Rating>
            <span>{movie.release_date.split("-")[0]}</span>
            <span>{movie.runtime} min</span>
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
              {movie.production_countries.map((country) => (
                <Country key={country.iso_3166_1}>{country.name}</Country>
              ))}
            </Countries>
          )}
          <Overview>{movie.overview}</Overview>
        </Info>
      </Card>
    </Container>
  );
}
