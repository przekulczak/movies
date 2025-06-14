import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
`;

export const Button = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: ${(props) =>
    props.$active ? colors.buttonActive : colors.buttonDisabled};
  color: ${colors.textPrimary};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.$active ? colors.buttonActiveHover : colors.buttonDisabledHover};
  }

  &:disabled {
    background: ${colors.backgroundSecondary};
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.buttonActiveFocus};
  }
`;
