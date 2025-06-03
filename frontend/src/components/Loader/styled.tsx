import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-top: 5px solid #646cff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export { SpinnerContainer, Spinner };
