import styled from "styled-components";

export const Back = styled.button`
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
  margin-bottom: 20px;
  transition: background-color 0.2s;

  &:hover {
    background: #3a3a3a;
  }
`;
