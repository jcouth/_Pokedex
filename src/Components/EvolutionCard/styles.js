import styled from "styled-components";
import { defaultBorderRadius, defaultBorderSize, white } from "../UI/variaveis";
import { Image, PokeTypes, PokeName, PokeId, Type } from "../UI";

export const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  position: relative;
  border-radius: ${defaultBorderRadius};

  &:nth-child(n) {
    &::before {
      content: ">";
      font-size: 2em;
      position: absolute;
      top: calc(50% - 0.5em);
      right: -0.4em; /* numero magico */
      font-weight: bold;
      color: ${white};
      z-index: 1;
    }
  }

  &:last-child {
    &::before {
      content: "";
    }
  }
`;

export const RoundedImage = styled(Image)`
  border: ${defaultBorderSize} solid ${white};
  border-radius: 50%;
`;

export const PokeNameStyled = styled(PokeName).attrs({ size: "1em" })`
  margin-right: 0.25rem;
`;

export const PokeIdStyled = styled(PokeId).attrs({ size: "1em" })`
  font-weight: 500;
  margin-left: 0.25rem;
`;

export const PokeTypesStyled = styled(PokeTypes)`
  justify-content: center;
`;

export const TypeStyled = styled(Type)`
  font-size: 0.9em;
  padding: 0.35rem 1rem;
`;
