import styled from "styled-components";
import { mediaQuery } from "../../config";

export const MovieListWrapper = styled.section`
  display: grid;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: calc(100vw - 40px);
  grid-template-columns: 1fr;

  ${mediaQuery.m} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.l} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQuery.xl} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
