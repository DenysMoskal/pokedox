import { useDispatch, useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

import close from "../../images/close.svg";
import { padZero } from "../../utils/padZeros";

import {
  clearCurrentPokemon,
  selectOnePokemonInfo,
} from "../../store/slice/onePokemonSlice";
import { PokemonCharacterTable } from "../PokemonCharacterTable";

const PokemonInfo = () => {
  const { currentPokemon, isLoading, error } =
    useSelector(selectOnePokemonInfo);
  const dispatch = useDispatch();

  return (
    <>
      <aside className="fixed top-[0] right-[0] h-[100%] flex items-center ">
        {currentPokemon && (
          <div className="bg-gray-100 mx-14">
            <div className="relative">
              <img
                className="w-[250px] border m-2"
                src={currentPokemon.sprites.front_default}
                alt={currentPokemon.name}
              />
              <button onClick={() => dispatch(clearCurrentPokemon())}>
                <img
                  className="absolute top-0 right-2"
                  src={close}
                  alt="Close"
                />
              </button>
            </div>

            <div className="text-center text-3xl my-2 capitalize">
              {currentPokemon.name}{" "}
              <span className="bold"> #{padZero(currentPokemon.id)}</span>
            </div>

            <PokemonCharacterTable currentPokemon={currentPokemon} />
          </div>
        )}

        {error && <h2 className="text-red-400 mr-20">{error}</h2>}
      </aside>
      {isLoading && (
        <div className="fixed right-24 top-[40%] m-auto">
          <Audio height="80" width="80" color="gray" ariaLabel="loading" />
        </div>
      )}
    </>
  );
};

export default PokemonInfo;
