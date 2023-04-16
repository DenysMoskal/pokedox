import axios from "axios";

export const getPokemonTypes = async () => await axios.get(`type`);
