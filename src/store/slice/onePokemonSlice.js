import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getOnePokemon } from "../../api";

export const fetchPokemon = createAsyncThunk(
  "pokemons/fetchPokemon",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getOnePokemon(id);

      const pokemon = response.data;

      return pokemon;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState: {
    currentPokemon: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCurrentPokemon: (state) => {
      state.currentPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentPokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectOnePokemonInfo = ({ pokemon }) => pokemon;

export const { clearCurrentPokemon } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
