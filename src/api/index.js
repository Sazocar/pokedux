import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getPokemons = () => {
  return axios
    .get(BASE_URL)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};