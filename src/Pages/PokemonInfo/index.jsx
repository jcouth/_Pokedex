import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPokemons } from "../../api.js";
import EvolutionCard from "../../Components/EvolutionCard";
import Loading from "../../Components/Loading";
import changePokemon from "../../Contexts/ChangePokemon.js";
import { typeColors } from "../../Components/UI/variaveis";
import { GridArea, PokeTypes, Type, PokeTopArea } from "../../Components/UI";
import {
  PokemonInfoStyled,
  PokeNameStyled,
  PokeIdStyled,
  LargeImage,
  GridAreaStyled,
  PokeTitle,
  PokeInfo,
  Text,
  BottomArea,
} from "./styles.js";

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
  const [loadingEvolution, setLoadingEvolution] = useState(true);
  const [evolutions, setEvolutions] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const initialURL = "https://pokeapi.co/api/v2/";

  const change = useContext(changePokemon);

  useEffect(() => {
    const fetchInitial = async () => {
      let responseData = await getPokemons(
        initialURL + "pokemon/" + name,
        history
      );
      let responseSpecie = await getPokemons(responseData.species.url, history);
      fetchWeaknesses(responseData.types[0].type.url);
      setPokemon({
        data: responseData,
        category: responseSpecie.genera[7],
      });
      change.setPrevPokemon({
        url: false,
        pokemon: parseInt(responseData.id) - 1,
      });
      change.setNextPokemon({
        url: false,
        pokemon: parseInt(responseData.id) + 1,
      });
      fetchEvolutions(responseData, responseSpecie.evolution_chain.url);
      setLoading(false);

      return () => {
        responseData.unsubscribe();
        responseSpecie.unsubscribe();
      };
    };

    const fetchEvolutions = async (pokemon, url) => {
      let responseEvolution = await getPokemons(url, history);
      let evolutionsData = [];
      let chain = responseEvolution.chain;
      let pokemonData = pokemon;
      let specieData;
      do {
        if (chain.species.name !== pokemon.name) {
          specieData = await getPokemons(chain.species.url, history);
          pokemonData = await getPokemons(
            initialURL + "pokemon/" + specieData.id,
            history
          );
        }
        evolutionsData.push(pokemonData);
        chain = chain["evolves_to"][0];
        pokemonData = pokemon;
      } while (!!chain && chain.hasOwnProperty("evolves_to"));
      setEvolutions(evolutionsData);
      setLoadingEvolution(false);

      return () => {
        responseEvolution.unsubscribe();
        specieData.unsubscribe();
        pokemonData.unsubscribe();
      };
    };

    const fetchWeaknesses = async (url) => {
      let responseWeaknesses = await getPokemons(url, history);
      let weaknessesData = [];
      responseWeaknesses.damage_relations.double_damage_from.forEach(
        (weakness) => {
          weaknessesData.push(weakness.name);
        }
      );
      setWeaknesses(weaknessesData);

      return () => {
        responseWeaknesses.unsubscribe();
      };
    };
    setLoading(true);
    setLoadingEvolution(true);
    fetchInitial();
    // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    const fetchPrev = async () => {
      if (1 < pokemon.data.id) {
        let responseData = await getPokemons(
          initialURL + "pokemon/" + (parseInt(pokemon.data.id) - 1),
          history
        );
        let responseSpecie = await getPokemons(
          responseData.species.url,
          history
        );
        fetchEvolutions(responseData, responseSpecie.evolution_chain.url);
        setPokemon({
          data: responseData,
          flavor_text: responseSpecie.flavor_text_entries[0].flavor_text,
          category: responseSpecie.genera[7],
        });
        setLoading(false);

        return () => {
          responseData.unsubscribe();
          responseSpecie.unsubscribe();
        };
      }
    };

    const fetchEvolutions = async (pokemon, url) => {
      let responseEvolution = await getPokemons(url, history);
      let evolutionsData = [];
      let chain = responseEvolution.chain;
      do {
        let pokemonData = pokemon;
        if (chain.species.name !== pokemon.name) {
          let specieData = await getPokemons(chain.species.url, history);
          pokemonData = await getPokemons(
            initialURL + "pokemon/" + specieData.id,
            history
          );
        }
        evolutionsData.push(pokemonData);
        chain = chain["evolves_to"][0];
      } while (!!chain && chain.hasOwnProperty("evolves_to"));
      setEvolutions(evolutionsData);
      setLoadingEvolution(false);
    };

    if (pokemon) {
      setLoading(true);
      setLoadingEvolution(true);
      fetchPrev();
    }
    // eslint-disable-next-line
  }, [change.prev]);

  useEffect(() => {
    const fetchNext = async () => {
      let responseData = await getPokemons(
        initialURL + "pokemon/" + (parseInt(pokemon.data.id) + 1),
        history
      );
      let responseSpecie = await getPokemons(responseData.species.url, history);
      fetchEvolutions(responseData, responseSpecie.evolution_chain.url);
      setPokemon({
        data: responseData,
        category: responseSpecie.genera[7],
      });
      setLoading(false);
    };

    const fetchEvolutions = async (pokemon, url) => {
      let responseEvolution = await getPokemons(url, history);
      let evolutionsData = [];
      let chain = responseEvolution.chain;
      do {
        let pokemonData = pokemon;
        if (chain.species.name !== pokemon.name) {
          let specieData = await getPokemons(chain.species.url, history);
          pokemonData = await getPokemons(
            initialURL + "pokemon/" + specieData.id,
            history
          );
        }
        evolutionsData.push(pokemonData);
        chain = chain["evolves_to"][0];
      } while (!!chain && chain.hasOwnProperty("evolves_to"));
      setEvolutions(evolutionsData);
      setLoadingEvolution(false);
    };

    if (pokemon) {
      setLoading(true);
      setLoadingEvolution(true);
      fetchNext();
    }
    // eslint-disable-next-line
  }, [change.next]);

  const getHeight = (height) => {
    // 1 decimeter = 3.048 foot
    return (height / 3.048).toFixed(2).replace(".", "' ") + '"';
  };

  const getWeight = (weight) => {
    // 1 hectogram = 4.536 pound
    return (weight / 4.536).toFixed(1);
  };

  const getCategory = (category) => {
    return category.split(" ")[0];
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          {pokemon ? (
            <PokemonInfoStyled>
              <PokeTopArea>
                <PokeNameStyled>
                  {capitalizeFirstLetter(pokemon.data.name)}
                </PokeNameStyled>
                <PokeIdStyled>
                  {`#${getThreeDigits(pokemon.data.id)}`}
                </PokeIdStyled>
              </PokeTopArea>
              <GridArea columns={"repeat(2, 1fr)"} align={"left"}>
                <LargeImage src={pokemon.data.sprites.front_default} />
                <div>
                  <GridAreaStyled columns={"repeat(2, 1fr)"}>
                    <div>
                      <PokeTitle>Height</PokeTitle>
                      <PokeInfo>{getHeight(pokemon.data.height)}</PokeInfo>
                    </div>
                    <div>
                      <PokeTitle>Category</PokeTitle>
                      <PokeInfo>
                        {getCategory(pokemon.category.genus, " ")}
                      </PokeInfo>
                    </div>
                    <div>
                      <PokeTitle>Weight</PokeTitle>
                      <PokeInfo>{getWeight(pokemon.data.weight)} lbs</PokeInfo>
                    </div>
                    <div>
                      <PokeTitle>Abilities</PokeTitle>
                      <PokeInfo>
                        {capitalizeFirstLetter(
                          pokemon.data.abilities[0].ability.name
                        )}
                      </PokeInfo>
                    </div>
                  </GridAreaStyled>
                  <Text>Type</Text>
                  <PokeTypes>
                    {pokemon.data.types.map((typeSlot, index) => (
                      <Type
                        key={index}
                        background={typeColors[typeSlot.type.name].background}
                        color={typeColors[typeSlot.type.name].color}
                      >
                        {capitalizeFirstLetter(typeSlot.type.name)}
                      </Type>
                    ))}
                  </PokeTypes>
                  <Text>Weaknesses</Text>
                  <PokeTypes>
                    {weaknesses.map((type, index) => {
                      return (
                        <Type
                          key={index}
                          background={typeColors[type].background}
                          color={typeColors[type].color}
                        >
                          {capitalizeFirstLetter(type)}
                        </Type>
                      );
                    })}
                  </PokeTypes>
                </div>
              </GridArea>
              <BottomArea>
                {loadingEvolution ? (
                  <Loading />
                ) : (
                  <GridArea columns={`repeat(${evolutions.length}, 1fr)`}>
                    {evolutions.map((pokemon, index) => (
                      <EvolutionCard key={index} pokemon={pokemon} />
                    ))}
                  </GridArea>
                )}
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
