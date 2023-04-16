import axios from "axios";

export const getPokemons = async (page: number) =>
  await axios.get(`pokemon/?limit=12&offset=${(page - 1) * 12}`);

export const getOnePokemon = async (id: string) =>
  await axios.get(`pokemon/${id}`);
