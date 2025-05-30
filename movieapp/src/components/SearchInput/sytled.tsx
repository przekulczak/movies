import styled from "styled-components";

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
  border: 2px solid #2a2a2a;
  border-radius: 8px;
  background: #1a1a1a;
  color: white;
  transition: border-color 0.2s;
  height: 40px;

  &:focus {
    outline: none;
    border-color: #646cff;
  }

  &::placeholder {
    color: #666;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #646cff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #535bf2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #535bf2;
  }

  &:disabled {
    background: #3a3a3a;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 1rem;
  margin-bottom: 4px;
  margin-left: 7px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
