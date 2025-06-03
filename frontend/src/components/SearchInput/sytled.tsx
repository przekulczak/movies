import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 20px;
  align-items: flex-end;
  box-sizing: border-box;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  background: ${colors.backgroundSecondary};
  color: ${colors.textPrimary};
  transition: border-color 0.2s;
  height: 40px;

  &:focus {
    outline: none;
    border-color: ${colors.buttonActive};
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: ${colors.buttonActive};
  color: ${colors.textPrimary};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.buttonActiveHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.buttonActiveFocus};
  }

  &:disabled {
    background: ${colors.buttonDisabled};
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  color: ${colors.textPrimary};
  font-size: 1rem;
  margin-bottom: 4px;
  margin-left: 7px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
