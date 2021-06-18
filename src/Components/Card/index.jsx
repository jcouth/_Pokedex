import React from "react";
import { PokeCard, PokeIdStyled } from "./styles";
import { LinkStyled, Image, PokeName, PokeTypes, Type } from "../UI";
import { gray, black, typeColors } from "../UI/variaveis";

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
    <PokeIdStyled color={gray}>#{getThreeDigits(id)}</PokeIdStyled>
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
