import { FC } from "react";

import { currentPokemonType } from "modules/modulesPokemon";
interface currentPokemonPropsType {
  currentPokemon: currentPokemonType;
}

export const PokemonCharacterTable: FC<currentPokemonPropsType> = ({
  currentPokemon,
}) => {
  const statsBlock = () => {
    const stats = Object.values(currentPokemon.stats);

    return (
      <>
        {stats.map((stat) => (
          <tr key={stat.stat.name}>
            <td className="border-black border-2 p-1 capitalize">
              {stat.stat.name}
            </td>
            <td className="border-black border-2 p-1">{stat.base_stat}</td>
          </tr>
        ))}
      </>
    );
  };

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
          {statsBlock()}
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
