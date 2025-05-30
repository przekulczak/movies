import styled from "styled-components";

export const MovieListWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: calc(100vw - 40px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1260px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
