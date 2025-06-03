import { Container, EmptyState } from "./styled";

interface Props {
  message: string;
}

export function EmptyList({ message }: Props) {
  return (
    <Container>
      <EmptyState>{message}</EmptyState>
    </Container>
  );
}
