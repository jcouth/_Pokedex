import React from "react";
import { gray, white, typeColors } from "../UI/variaveis";
import { LinkStyled, PokeTopArea } from "../UI";
import {
  Evolution,
  RoundedImage,
  PokeNameStyled,
  PokeIdStyled,
  PokeTypesStyled,
  TypeStyled,
} from "./styles";

const EvolutionCard = ({ pokemon }) => {
  const getThreeDigits = (number) => {
    return ("000" + number).substr(-3);
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Evolution>
      <LinkStyled to={`/pokemon/${pokemon.name}`}>
        <RoundedImage src={pokemon.sprites.front_default} />
      </LinkStyled>
      <PokeTopArea>
        <PokeNameStyled color={white}>
          {capitalizeFirstLetter(pokemon.name)}
        </PokeNameStyled>
        <PokeIdStyled color={gray}>
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
};

export default EvolutionCard;
