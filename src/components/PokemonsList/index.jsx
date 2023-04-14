import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPokemons } from "../../store/slice/pokemonsSlice";
import PokemonCart from "../PokemonCart";
import Skeleton from "../Skeleton";
import { fetchPokemonTypes } from "../../store/slice/typesSlice";
import CategoriesList from "../CategoriesList";
import { selectPokemonsInfo } from "../../store/slice/pokemonsSlice";
import { selectCurrentPokemonType } from "../../store/slice/typesSlice";

const PokemonList = () => {
  const { pokemons, isLoading, error } = useSelector(selectPokemonsInfo);
  const currentType = useSelector(selectCurrentPokemonType);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
    dispatch(fetchPokemons());
  }, [dispatch, currentType]);

  return (
    <>
      <CategoriesList />

      <div className="w-[80%] flex flex-wrap justify-center pl-[150px]">
        {pokemons
          ?.filter((item) => {
            if (currentType === "All") {
              return true;
            }
            const hasType = item.types.some(
              (type) => type.type.name === currentType
            );
            if (hasType) {
              return true;
            } else {
              return false;
            }
          })
          .map((pokemon) => (
            <PokemonCart
              sprites={pokemon.sprites}
              name={pokemon.name}
              types={pokemon.types}
              key={pokemon.id}
            />
          ))}
        {isLoading && (
          <div className="flex flex-wrap">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="">
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
