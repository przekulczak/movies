import { useNavigate } from "react-router-dom";
import { Container, FavoritesLink } from "./styled";

export function Topbar() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* <BackButton onClick={() => navigate(-1)}>← Back</BackButton> */}
      <FavoritesLink href="/favourites">Favorites</FavoritesLink>
    </Container>
  );
}
