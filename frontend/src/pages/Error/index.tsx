import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";
import styled from "styled-components";
import { colors } from "../../config";

const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: ${colors.backgroundSecondary};
  border-radius: 8px;
  margin: 2rem;
`;

const ErrorTitle = styled.h2`
  color: ${colors.error};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ErrorMessage = styled.p`
  color: ${colors.textPrimary};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  max-width: 600px;
`;

const RetryButton = styled.button`
  background: #ff4d4d;
  color: ${colors.textPrimary};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: #ff3333;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <ErrorContainer>
      <ErrorTitle>Oops! Something went wrong</ErrorTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>Try again</RetryButton>
    </ErrorContainer>
  );
}

export function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
