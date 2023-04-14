import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../services/capitalizeFirstLetter";
import { padZero } from "../../services/padZeros";
import close from "../../images/close.svg";
import { clear } from "../../store/slice/onePokemonSlice";

const PokemonInfo = () => {
  const { currentPokemon } = useSelector((state) => state.pokemon);
  const dispacth = useDispatch();

  return (
    <aside className="fixed top-[0] right-[0] h-[100%] flex items-center ">
      {currentPokemon && (
        <div className="bg-gray-100 mx-14">
          <div className="relative">
            <img
              className="w-[250px] border m-2"
              src={currentPokemon.sprites.front_default}
              alt={currentPokemon.name}
            />
            <button onClick={() => dispacth(clear())}>
              <img className="absolute top-0 right-2" src={close} alt="Close" />
            </button>
          </div>

          <div className="text-center text-3xl my-2">
            {capitalizeFirstLetter(currentPokemon.name)}{" "}
            <span className="bold"> #{padZero(currentPokemon.id)}</span>
          </div>

          <table className="flex justify-center border-collapse pb-2">
            <tbody>
              <tr>
                <td className="border-black border-2 p-1">Type</td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.types[0].type.name}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">
                  {capitalizeFirstLetter(currentPokemon.stats[1].stat.name)}
                </td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.stats[1].base_stat}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">
                  {capitalizeFirstLetter(currentPokemon.stats[2].stat.name)}
                </td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.stats[2].base_stat}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">
                  {capitalizeFirstLetter(currentPokemon.stats[0].stat.name)}
                </td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.stats[0].base_stat}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">
                  {capitalizeFirstLetter(currentPokemon.stats[3].stat.name)}
                </td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.stats[3].base_stat}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">
                  {capitalizeFirstLetter(currentPokemon.stats[4].stat.name)}
                </td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.stats[4].base_stat}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">
                  {capitalizeFirstLetter(currentPokemon.stats[5].stat.name)}
                </td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.stats[5].base_stat}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">Weight</td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.weight}
                </td>
              </tr>
              <tr>
                <td className="border-black border-2 p-1">Total moves</td>
                <td className="border-black border-2 p-1">
                  {currentPokemon.moves.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </aside>
  );
};

export default PokemonInfo;
