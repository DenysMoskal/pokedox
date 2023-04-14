import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const index = ({ currentPokemon }) => {
  return (
    <div>
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
  );
};

export default index;
