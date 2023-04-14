import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getPokemons } from "../../api";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { page } = getState().pokemons;
      const response = await getPokemons(page);
      const pokemonList = response.data.results;
      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      return pokemonData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    isLoading: false,
    error: null,
    page: 1,
  },
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
        state.error = action.payload;
      });
  },
});

export const selectPokemonsInfo = ({ pokemons }) => pokemons;

export const { showMore } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
