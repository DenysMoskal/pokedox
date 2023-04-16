import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { currentPokemonType } from "modules/modulesPokemon";

import { getPokemons } from "../../api";

interface pokemonsSliceType {
  pokemons: currentPokemonType[];
  isLoading: boolean;
  error: null | string;
  page: number;
}

export const fetchPokemons = createAsyncThunk<
  currentPokemonType[],
  undefined,
  { rejectValue: string; state: { pokemons: pokemonsSliceType } }
>("pokemons/fetchPokemons", async (_, { getState, rejectWithValue }) => {
  try {
    const { page } = getState().pokemons;
    const response = await getPokemons(page);
    const pokemonList = response.data.results;
    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon: { url: string }) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      })
    );
    return pokemonData;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
const initialState: pokemonsSliceType = {
  pokemons: [],
  isLoading: false,
  error: null,
  page: 1,
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.page += 1;
        state.pokemons = [...state.pokemons, ...action.payload];
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectPokemonsInfo = ({
  pokemons,
}: {
  pokemons: pokemonsSliceType;
}) => pokemons;

export default pokemonsSlice.reducer;
