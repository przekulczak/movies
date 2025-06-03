import styled from "styled-components";
import { colors } from "../../config";

export const Back = styled.button`
  background: ${colors.backgroundSecondary};
  color: ${colors.textPrimary};
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  transition: background-color 0.2s;

  &:hover {
    background: #3a3a3a;
  }
`;
