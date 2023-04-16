import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryTypes } from "modules/modulesType";

import { getPokemonTypes } from "../../api";

interface typesCharactersSlice {
  types: categoryTypes[];
  isLoading: boolean;
  error: null | string;
  currentType: string;
}

export const fetchPokemonTypes = createAsyncThunk<
  categoryTypes[],
  undefined,
  { rejectValue: string }
>("pokemonTypes/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await getPokemonTypes();
    return response.data.results;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
  }
});

const initialState: typesCharactersSlice = {
  types: [],
  isLoading: false,
  error: null,
  currentType: "All",
};

const pokemonTypesSlice = createSlice({
  name: "pokemonTypes",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<string>) => {
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
        state.error = action.payload as string;
      });
  },
});

export const selectCurrentPokemonType = ({
  types,
}: {
  types: typesCharactersSlice;
}) => types.currentType;
export const selectAllTypesInfo = ({
  types,
}: {
  types: typesCharactersSlice;
}) => types;

export const { setCurrent, showAll } = pokemonTypesSlice.actions;
export default pokemonTypesSlice.reducer;
