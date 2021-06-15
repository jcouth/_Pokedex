import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image, PokeId, PokeName, PokeTypes, Type } from "../UI";
import {
  white,
  defaultBorderRadius,
  black,
  gray,
  typeColors,
} from "../UI/variaveis";

const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  height: 13rem;
  border-radius: ${defaultBorderRadius};
  background: ${white};
`;

const LinkStyled = styled(Link)`
  width: 100%;
`;

const PokeIdStyled = styled(PokeId)`
  margin-top: 0.5rem;
`;

const getThreeDigits = (number) => {
  return ("000" + number).substr(-3);
};

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const Card = ({ img, id, name, types }) => (
  <PokeCard>
    <LinkStyled to={`/pokemon/${name}`}>
      <Image src={img} alt={capitalizeFirstLetter(name)} />
    </LinkStyled>
    <PokeIdStyled color={gray} size={"0.9em"}>
      #{getThreeDigits(id)}
    </PokeIdStyled>
    <PokeName flexGrow={"1"} size={"1.2em"} color={black}>
      {capitalizeFirstLetter(name)}
    </PokeName>
    <PokeTypes>
      {types.map((typeSlot, index) => (
        <Type
          key={index}
          background={typeColors[typeSlot.type.name].background}
          color={typeColors[typeSlot.type.name].color}
        >
          {capitalizeFirstLetter(typeSlot.type.name)}
        </Type>
      ))}
    </PokeTypes>
  </PokeCard>
);

export default Card;
