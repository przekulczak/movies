import styled from "styled-components";
import { colors } from "../../config";

export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    transform: translateY(-4px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #646cff;
  }
`;

export const Card = styled.section`
  background: ${colors.backgroundSecondary};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: contain;
  margin-bottom: 10px;
  height: 324px;
`;

export const Content = styled.section`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.a`
  margin: 0;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.textPrimary};
  cursor: pointer;

  &:hover {
    color: ${colors.buttonActiveHover};
  }
`;
