import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import changePokemon from "../../Contexts/ChangePokemon";
import { getPokemon, getByUrl } from "../../api.js";
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
  const change = useContext(changePokemon);

  useEffect(() => {
    const fetchPrev = async () => {
      if (prevURL) {
        setLoading(true);
        let response = await getByUrl(prevURL, history);
        loadPokemon(response.results);
        change.setPrevPokemon({
          url: true,
          pokemon: response.previous,
        });
        change.setNextPokemon({
          url: true,
          pokemon: response.next,
        });
        setNextURL(response.next);
        setPrevURL(response.previous);
        setLoading(false);

        return () => {
          response.unsubscribe();
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
        let response = await getByUrl(nextURL, history);
        loadPokemon(response.results);
        change.setPrevPokemon({
          url: true,
          pokemon: response.previous,
        });
        change.setNextPokemon({
          url: true,
          pokemon: response.next,
        });
        setNextURL(response.next);
        setPrevURL(response.previous);
        setLoading(false);

        return () => {
          response.unsubscribe();
        };
      }
    };

    fetchNext();
    // eslint-disable-next-line
  }, [change.next]);

  const fetchInitial = async () => {
    setInitialLoading(false);
    const response = await getPokemon("", history);
    setPrevURL(response.previous);
    setNextURL(response.next);
    change.setPrevPokemon({
      url: true,
      pokemon: response.previous,
    });
    change.setNextPokemon({
      url: true,
      pokemon: response.next,
    });
    loadPokemon(response.results);
    return () => {
      response.unsubscribe();
    };
  };

  const loadPokemon = async (data) => {
    let response = await Promise.all(
      data.map(async (pokemon) => {
        return await getByUrl(pokemon.url);
      })
    );
    setPokemons(response);
    return () => {
      response.unsubscribe();
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
