import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.textPrimary};
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
`;

export const BackButton = styled.button`
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
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.buttonActiveHover};
  }
`;

export const TopbarLink = styled.a`
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.2s;
  color: ${colors.textPrimary};

  &:hover {
    color: ${colors.buttonActiveHover};
  }
`;
