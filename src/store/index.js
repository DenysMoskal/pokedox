import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "./slice/pokemonsSlice";
import onePokemonSlice from "./slice/onePokemonSlice";
import typesSlice from "./slice/typesSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    pokemon: onePokemonSlice,
    types: typesSlice,
  },
});
