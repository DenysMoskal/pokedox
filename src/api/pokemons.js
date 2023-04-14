import axios from "axios";

export const getPokemons = async (page) =>
  await axios.get(`pokemon/?limit=12&offset=${(page - 1) * 12}`);

export const getOnePokemon = async (id) => await axios.get(`pokemon/${id}`);
