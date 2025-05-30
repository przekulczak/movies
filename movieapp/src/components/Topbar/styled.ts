import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const BackButton = styled.button`
  background: #2a2a2a;
  color: white;
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
    background: #3a3a3a;
  }
`;

export const FavoritesLink = styled.a`
  color: #646cff;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.2s;

  &:hover {
    color: #535bf2;
  }
`;
