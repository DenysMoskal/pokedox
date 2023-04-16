import { useEffect } from "react";

import PokemonCart from "../PokemonCart";
import Skeleton from "../Skeleton";
import CategoriesList from "../CategoriesList";
import { useAppDispatch, useAppSelector } from "../../hook";

import {
  fetchPokemons,
  selectPokemonsInfo,
} from "../../store/slice/pokemonsSlice";
import {
  fetchPokemonTypes,
  selectCurrentPokemonType,
} from "../../store/slice/typesSlice";

const PokemonList = () => {
  const dispatch = useAppDispatch();

  const { pokemons, isLoading, error } = useAppSelector(selectPokemonsInfo);
  const currentType = useAppSelector(selectCurrentPokemonType);

  useEffect(() => {
    dispatch(fetchPokemons());
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  const filteredPokemons = pokemons?.filter((pokemon, _, originalArray) => {
    if (currentType === "All") {
      return originalArray;
    }
    return !!pokemon.types.some((type) => type.type.name === currentType);
  });

  return (
    <>
      <CategoriesList />

      <div className="w-[80%] flex flex-wrap justify-center pl-[150px]">
        {filteredPokemons.length > 0 ? (
          filteredPokemons?.map((pokemon) => (
            <PokemonCart
              key={pokemon.id}
              sprites={pokemon.sprites}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))
        ) : (
          <h2 className="ml-[100px] mt-4">
            There are no characters with this filter
          </h2>
        )}
        {isLoading && (
          <div className="flex flex-wrap">
            {[...Array(12)].map((_, idx) => (
              <div key={idx}>
                <Skeleton />
              </div>
            ))}
          </div>
        )}
        {error && <h1 className="text-red-400 my-20 ml-[140px]">{error}</h1>}
      </div>
    </>
  );
};

export default PokemonList;
