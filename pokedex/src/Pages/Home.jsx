import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { getPokemons } from "../api.js";
import { GridArea } from "../Components/UI";

const Home = ({ page, setLoadFinished, prev, setPrev, next, setNext }) => {
  let history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    // async function fetchData() {
    //   // let response = await getAllPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=${page*20}`, history);
    //   let response = await getAllPokemons(initialURL, history);
    //   setNextURL(response.next);
    //   setPrevURL(response.previous);
    //   await loadPokemon(response.results);
    //   setInitialLoading(false);
    //   setLoading(false);
    //   setLoadFinished(false);
    // }
    if (prev) {
      console.log("in prev");
      fetchPrev();
      setPrev(false);
    } else if (next) {
      console.log("in next");
      fetchNext();
      setNext(false);
    }
  }, [prev, next]);

  const fetchInitial = async () => {
    let response = await getPokemons(initialURL, history);
    setNextURL(response.next);
    setPrevURL(response.previous);
    await loadPokemon(response.results);
    setInitialLoading(false);
    setLoading(false);
    setLoadFinished(false);
  };

  const fetchNext = async () => {
    setLoading(true);
    let data = await getPokemons(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const fetchPrev = async () => {
    if (prevURL) {
      setLoading(true);
      let data = await getPokemons(prevURL);
      await loadPokemon(data.results);
      setNextURL(data.next);
      setPrevURL(data.previous);
      setLoading(false);
    }
  };

  const loadPokemon = async (data) => {
    let _pokemons = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemons(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemons(_pokemons);
  };

  return (
    <>
      {initialLoading ? (
        <Loading>{fetchInitial()}</Loading>
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
          {loading ? <Loading /> : <></>}
        </GridArea>
      )}
    </>
  );
};

export default Home;
