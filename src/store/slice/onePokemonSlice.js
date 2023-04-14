import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
  "pokemons/fetchPokemon",
  async (id) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      console.log(response, "response");
      const pokemon = response.data;

      return pokemon;
    } catch (error) {
      console.error(error);
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState: {
    currentPokemon: null,
    loading: false,
  },
  reducers: {
    clear: (state) => {
      state.currentPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clear } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
