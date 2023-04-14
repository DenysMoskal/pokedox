import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonTypes = createAsyncThunk(
  "pokemonTypes/fetch",
  async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    return response.data.results;
  }
);

const pokemonTypesSlice = createSlice({
  name: "pokemonTypes",
  initialState: {
    types: [],
    loading: false,
    error: null,
    currentType: "All",
  },
  reducers: {
    setCurrent: (state, action) => {
      state.currentType = action.payload;
    },
    showAll: (state) => {
      state.currentType = "All";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.types = action.payload;
      })
      .addCase(fetchPokemonTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrent, showAll } = pokemonTypesSlice.actions;
export default pokemonTypesSlice.reducer;
