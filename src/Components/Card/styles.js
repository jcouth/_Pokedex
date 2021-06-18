import styled from "styled-components";
import { PokeId } from "../UI";
import { white, defaultBorderRadius } from "../UI/variaveis";

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  height: 13rem;
  border-radius: ${defaultBorderRadius};
  background: ${white};
`;

export const PokeIdStyled = styled(PokeId).attrs({
  size: "0.9em",
})`
  margin-top: 0.5rem;
`;
