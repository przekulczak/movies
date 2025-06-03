import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export const ErrorMessage = styled.pre`
  color: ${colors.error};
  margin: 0;
  padding: 1rem;
  background: ${colors.errorBackground};
  border-radius: 4px;
`;

export const RetryButton = styled.button`
  background: ${colors.buttonActive};
  color: ${colors.textPrimary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${colors.buttonActiveHover};
  }
`;
