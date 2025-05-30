import type { Movie } from "../../types/movie";
import { Card, Title, Poster } from "./styled";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  return (
    <Card>
      <div>
        <a href={`/movie/${movie.id}`}>
          <Poster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.jpg"
            }
            alt={movie.title}
          />
        </a>
        <FavoriteButton movieId={movie.id} />
      </div>
      <Title>{movie.title}</Title>
    </Card>
  );
}
