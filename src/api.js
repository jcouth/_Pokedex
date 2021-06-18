export const getPokemons = async (url, history) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        history.push("/404");
      });
  });
};

// export const api = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/",
// });

// export const getPokemonasfd = async(pokemon, setPokemon) => {
//   const response = await api.get(`pokemon/${pokemon}`);
//   setPokemon(response);
// }

// export const getPokemonsdfsf = async(pokemonName, setPokemon) => {
//   const response = await api.get(`pokemon/${pokemonName}`);
//   setPokemon(response);
// }