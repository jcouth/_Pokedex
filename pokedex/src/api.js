export const getPokemons = async (url, history) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
      .catch(e => {
        history.push("/404")
      })
  });
}