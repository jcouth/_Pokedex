import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import changePokemon from "../../Contexts/ChangePokemon";
import { getPokemons } from "../../api.js";
import Card from "../../Components/Card";
import Loading from "../../Components/Loading";
import { GridArea } from "../../Components/UI";

const Home = () => {
  let history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";

  const change = useContext(changePokemon);

  useEffect(() => {
    const fetchPrev = async () => {
      if (prevURL) {
        setLoading(true);
        let data = await getPokemons(prevURL);
        loadPokemon(data.results);
        change.setPrevPokemon({
          url: true,
          pokemon: data.previous,
        });
        change.setNextPokemon({
          url: true,
          pokemon: data.next,
        });
        setNextURL(data.next);
        setPrevURL(data.previous);
        setLoading(false);

        return () => {
          data.unsubscribe();
        };
      }
    };

    fetchPrev();
    // eslint-disable-next-line
  }, [change.prev]);

  useEffect(() => {
    const fetchNext = async () => {
      if (nextURL) {
        setLoading(true);
        let data = await getPokemons(nextURL);
        loadPokemon(data.results);
        change.setPrevPokemon({
          url: true,
          pokemon: data.previous,
        });
        change.setNextPokemon({
          url: true,
          pokemon: data.next,
        });
        setNextURL(data.next);
        setPrevURL(data.previous);
        setLoading(false);

        return () => {
          data.unsubscribe();
        };
      }
    };

    fetchNext();
    // eslint-disable-next-line
  }, [change.next]);

  const fetchInitial = async () => {
    setInitialLoading(false);
    await getPokemons(initialURL, history).then((response) => {
      setNextURL(response.next);
      setPrevURL(response.previous);
      change.setPrevPokemon({
        url: true,
        pokemon: response.previous,
      });
      change.setNextPokemon({
        url: true,
        pokemon: response.next,
      });
      loadPokemon(response.results);
    });
  };

  const loadPokemon = async (data) => {
    let _pokemons = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemons(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemons(_pokemons);
    return () => {
      _pokemons.unsubscribe();
    };
  };

  return (
    <>
      {initialLoading ? (
        <Loading>{fetchInitial()}</Loading>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <GridArea columns={"repeat(4, 1fr)"}>
              {pokemons.map((pokemon, id) => {
                return (
                  <Card
                    key={id}
                    img={pokemon.sprites.front_default}
                    id={pokemon.id}
                    name={pokemon.name}
                    types={pokemon.types}
                  />
                );
              })}
            </GridArea>
          )}
        </>
      )}
    </>
  );
};

export default Home;
