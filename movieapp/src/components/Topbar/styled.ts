import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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

export const TopbarLink = styled.a`
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.2s;
  color: #fff;

  &:hover {
    color: #535bf2;
  }
`;
