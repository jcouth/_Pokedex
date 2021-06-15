import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { getPokemons } from "../api.js";
import EvolutionCard from "../Components/EvolutionCard";
import Loading from "../Components/Loading";
import {
  black,
  blue,
  defaultBorderRadius,
  primary,
  tertiary,
  white,
  typeColors,
} from "../Components/UI/variaveis";
import {
  GridArea,
  PokeName,
  PokeId,
  Image,
  PokeTypes,
  Type,
  PokeTopArea,
} from "../Components/UI";

const PokemonInfoStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background: ${white};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${tertiary};
    border-radius: ${defaultBorderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${primary};
  }
`;

const PokeNameStyled = styled(PokeName)`
  margin-right: 0.5rem;
`;

const PokeIdStyled = styled(PokeId)`
  font-weight: 500;
  margin-left: 0.5rem;
`;

const LargeImage = styled(Image)`
  flex-grow: 0;
  width: 288px;
  height: 288px;
`;

const GridAreaStyled = styled(GridArea)`
  flex-grow: 1;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: ${defaultBorderRadius};
  background: ${blue};
`;

const InfoTitle = styled.p`
  color: ${white};
`;

const Info = styled.div`
  font-size: 1.2em;
`;

const Title = styled.p`
  font-size: 1.2em;
  color: ${black};
  margin: 1rem 0 0.25rem;
`;

const BottomArea = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: ${defaultBorderRadius};

  background: ${black};
`;

const getThreeDigits = (number) => {
  return ("000" + number).substr(-3);
};

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const PokemonInfo = () => {
  let history = useHistory();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(true);
  const [evolutions, setEvolutions] = useState([]);
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    async function fetchData() {
      let responseData = await getPokemons(initialURL + "" + name, history);
      /* não sei onde conseguir o id da evolução */
      // let responseEvolution = await getPokemons(`https://pokeapi.co/api/v2/evolution-chain/${responseData.id}`, history);
      // let evolutions = [];
      // let chain = responseEvolution.chain;
      // do {
      //   evolutions.push({
      //     "species_name": chain.species.name,
      //     "url": chain.species.url,
      //   });      
      //   chain = chain['evolves_to'][0];
      // } while (!!chain && chain.hasOwnProperty('evolves_to'));
      // console.log(evolutions);
      setPokemon(responseData);
      // setEvolutions(evolutions);
      setLoading(false);
    }
    fetchData();
  }, [name]);

  const getHeight = (height) => {
    let h = ((height * 3.048) / 10).toFixed(2).replace(".", "' ") + '"';
    return h;
  };

  const getWeight = (weight) => {
    return ((weight * 2.205) / 10).toFixed(1);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {pokemon ? (
            <PokemonInfoStyled>
              <PokeTopArea>
                <PokeNameStyled size={"2em"}>
                  {capitalizeFirstLetter(pokemon.name)}
                </PokeNameStyled>
                <PokeIdStyled size={"2em"}>
                  {`#${getThreeDigits(pokemon.id)}`}
                </PokeIdStyled>
              </PokeTopArea>
              <GridArea columns={"repeat(2, 1fr)"} align={"left"}>
                <LargeImage src={pokemon.sprites.front_default} />
                <div>
                  <GridAreaStyled columns={"repeat(2, 1fr)"}>
                    <div>
                      <InfoTitle>Height</InfoTitle>
                      <Info>{getHeight(pokemon.height)}</Info>
                    </div>
                    <div>
                      <InfoTitle>Category</InfoTitle>
                      <Info>-</Info>
                    </div>
                    <div>
                      <InfoTitle>Weight</InfoTitle>
                      <Info>{getWeight(pokemon.weight)} lbs</Info>
                    </div>
                    <div>
                      <InfoTitle>Abilities</InfoTitle>
                      <Info>
                        {capitalizeFirstLetter(
                          pokemon.abilities[0].ability.name
                        )}
                      </Info>
                    </div>
                  </GridAreaStyled>
                  <Title>Type</Title>
                  <PokeTypes>
                    {pokemon.types.map((typeSlot, index) => (
                      <Type
                        key={index}
                        background={typeColors[typeSlot.type.name].background}
                        color={typeColors[typeSlot.type.name].color}
                      >
                        {capitalizeFirstLetter(typeSlot.type.name)}
                      </Type>
                    ))}
                  </PokeTypes>
                  <Title>Weaknesses</Title>
                  <PokeTypes>
                    {pokemon.types.map((typeSlot, index) => (
                      <Type
                        key={index}
                        background={typeColors[typeSlot.type.name].background}
                        color={typeColors[typeSlot.type.name].color}
                      >
                        {capitalizeFirstLetter(typeSlot.type.name)}
                      </Type>
                    ))}
                  </PokeTypes>
                </div>
              </GridArea>
              <BottomArea>
                <GridArea columns={"repeat(3, 1fr)"}>
                  <EvolutionCard pokemon={pokemon} />
                  <EvolutionCard pokemon={pokemon} />
                  <EvolutionCard pokemon={pokemon} />
                </GridArea>
              </BottomArea>
            </PokemonInfoStyled>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default PokemonInfo;
