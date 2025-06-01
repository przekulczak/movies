import { Container, Message, ErrorMessage, RetryButton } from "./styled";

export function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <Container role="alert">
      <Message>Something went wrong:</Message>
      <ErrorMessage>{error.message}</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>Try again</RetryButton>
    </Container>
  );
}
