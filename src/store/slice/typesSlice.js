import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPokemonTypes } from "../../api";

export const fetchPokemonTypes = createAsyncThunk(
  "pokemonTypes/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPokemonTypes();
      return response.data.results;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const pokemonTypesSlice = createSlice({
  name: "pokemonTypes",
  initialState: {
    types: [],
    isLoading: false,
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
        state.isLoading = true;
      })
      .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.types = action.payload;
      })
      .addCase(fetchPokemonTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.action.payload;
      });
  },
});

export const selectCurrentPokemonType = ({ types }) => types.currentType;
export const selectAllTypesInfo = ({types}) => types

export const { setCurrent, showAll } = pokemonTypesSlice.actions;
export default pokemonTypesSlice.reducer;
