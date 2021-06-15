import React from "react";
import styled from "styled-components";
import {
  defaultBorderRadius,
  defaultBorderSize,
  gray,
  white,
  typeColors,
} from "../UI/variaveis";
import { Image, PokeTypes, PokeTopArea, PokeName, PokeId, Type } from "../UI";

const Evolution = styled.div`
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

const RoundedImage = styled(Image)`
  border: ${defaultBorderSize} solid ${white};
  border-radius: 50%;
`;

const PokeNameStyled = styled(PokeName)`
  margin-right: 0.25rem;
`;

const PokeIdStyled = styled(PokeId)`
  font-weight: 500;
  margin-left: 0.25rem;
`;

const PokeTypesStyled = styled(PokeTypes)`
  justify-content: center;
`;

const TypeStyled = styled(Type)`
  font-size: 0.9em;
  padding: 0.35rem 1rem;
`;

const getThreeDigits = (number) => {
  return ("000" + number).substr(-3);
};

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const EvolutionCard = ({ pokemon }) => (
  <Evolution>
    <RoundedImage src={pokemon.sprites.front_default} />
    <PokeTopArea>
      <PokeNameStyled size={"1em"} color={white}>
        {capitalizeFirstLetter(pokemon.name)}
      </PokeNameStyled>
      <PokeIdStyled size={"1em"} color={gray}>
        {`#${getThreeDigits(pokemon.id)}`}
      </PokeIdStyled>
    </PokeTopArea>
    <PokeTypesStyled>
      {pokemon.types.map((typeSlot, index) => (
        <TypeStyled
          key={index}
          background={typeColors[typeSlot.type.name].background}
          color={typeColors[typeSlot.type.name].color}
        >
          {capitalizeFirstLetter(typeSlot.type.name)}
        </TypeStyled>
      ))}
    </PokeTypesStyled>
  </Evolution>
);

export default EvolutionCard;
