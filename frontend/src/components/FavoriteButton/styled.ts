import styled from "styled-components";
import { colors } from "../../config";

export const StyledFavouriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: ${colors.favourite};
  transition: transform 0.2s;
  align-self: flex-end;
  font-size: 30px;
`;
