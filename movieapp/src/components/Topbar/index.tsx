import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, BackButton, TopbarLink } from "./styled";
import type { RootState } from "../../store/store";
import type { HeaderContent } from "../../types";

export function Topbar() {
  const navigate = useNavigate();
  const { backButton, content } = useSelector(
    (state: RootState) => state.header
  );

  return (
    <Container>
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
    </Container>
  );
}
