import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getOnePokemon } from "../../api";
import { currentPokemonType } from "../../modules/modulesPokemon";

interface onePokemonSlice {
  currentPokemon: null | currentPokemonType;
  isLoading: Boolean;
  error: string | null;
}

export const fetchPokemon = createAsyncThunk<
  currentPokemonType,
  string,
  { rejectValue: string }
>("pokemons/fetchPokemon", async (id, { rejectWithValue }) => {
  try {
    const response = await getOnePokemon(id);

    const pokemon = response.data;

    return pokemon;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
  }
});

const initialState: onePokemonSlice = {
  currentPokemon: null,
  isLoading: false,
  error: null,
};

const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
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
        state.error = action.payload as string;
      });
  },
});

export const selectOnePokemonInfo = ({
  pokemon,
}: {
  pokemon: onePokemonSlice;
}) => pokemon;

export const { clearCurrentPokemon } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
