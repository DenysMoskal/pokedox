import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async (_, { getState }) => {
    try {
      const { page } = getState().pokemons;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${(page - 1) * 12}`
      );
      const pokemonList = response.data.results;
      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return res.data;
        })
      );
      return pokemonData;
    } catch (error) {
      console.error(error);
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    showMore: (state) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.page += 1;
        state.pokemons = [...state.pokemons, ...action.payload];
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { showMore } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
