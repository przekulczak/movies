import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, BackButton, TopbarLink, Navigation, Title } from "./styled";
import type { RootState } from "../../store/store";
import type { HeaderContent } from "../../types";

export function Topbar() {
  const navigate = useNavigate();
  const { backButton, content, title } = useSelector(
    (state: RootState) => state.header
  );

  return (
    <Container>
      <Navigation>
        <div>
          {backButton && (
            <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
          )}
        </div>
        {content.map((item: HeaderContent, index: number) => (
          <TopbarLink key={index} href={item.href}>
            {item.name}
          </TopbarLink>
        ))}
      </Navigation>
      {title && <Title>{title}</Title>}
    </Container>
  );
}
