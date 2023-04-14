import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../../store/slice/pokemonsSlice";
import PokemonCart from "../PokemonCart";
import Skeleton from "../Skeleton";
import { fetchPokemonTypes } from "../../store/slice/typesSlice";
import Select from "../Select/Select";

const PokemonList = () => {
  const { pokemons, loading, error } = useSelector((state) => state.pokemons);
  const { currentType } = useSelector((state) => state.types);

  console.log(pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
    dispatch(fetchPokemons());
  }, [dispatch, currentType]);

  return (
    <>
      <Select />

      <div className="w-[80%] flex flex-wrap justify-center pl-[120px]">
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
            <PokemonCart {...pokemon} key={pokemon.id} />
          ))}
        {loading && (
          <div className="flex flex-wrap">
            {[...Array(12)].map((_, idx) => (
              <div key={idx}>
                <Skeleton />
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (
        <h1 className="text-red-400 m-auto mt-20 ">You have a problem with</h1>
      )}
    </>
  );
};

export default PokemonList;
