import axios from "axios";

const apiURL = "https://pokeapi.co/api/v2";

export const getPokemon = async (pokemon, history) => {
  return getByUrl(`${apiURL}/pokemon/${pokemon}`, history);
};

export const getByUrl = async (url, history) => {
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch(() => {
      history.push("/404");
    });
};

export const getEvolutions = async (url, pokemon, history) => {
  let responseEvolution = await getByUrl(url, history);
  let responsePokemon = pokemon;
  let responseSpecie;
  let chain = responseEvolution.chain;
  let evolutionsData = [];
  do {
    if (chain.species.name !== pokemon.name) {
      responseSpecie = await getByUrl(chain.species.url, history);
      responsePokemon = await getPokemon(responseSpecie.id, history);
    }
    evolutionsData.push(responsePokemon);
    chain = chain["evolves_to"][0];
    responsePokemon = pokemon;
  } while (!!chain && chain.hasOwnProperty("evolves_to"));
  return evolutionsData;
}

export const getWeaknesses = async (url, history) => {
  let responseWeaknesses = await getByUrl(url, history);
  let weaknessesData = [];
  responseWeaknesses.damage_relations.double_damage_from.forEach(
    (weakness) => {
      weaknessesData.push(weakness.name);
    }
  );
  return weaknessesData;
}