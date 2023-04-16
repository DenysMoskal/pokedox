import { FC } from "react";

import { useAppDispatch } from "../../hook/index";
import { spritesType, typesType } from "../../modules/modulesPokemon";
import { fetchPokemon } from "../../store/slice/onePokemonSlice";

interface PokemonCartProps {
  sprites: spritesType;
  name: string;
  types: typesType[];
}

const PokemonCart: FC<PokemonCartProps> = ({ sprites, name, types }) => {
  const dispatch = useAppDispatch();

  const typeNames = types.map((type) => type.type.name);

  const fetchOnePokemon = () => {
    dispatch(fetchPokemon(name));
  };

  return (
    <div
      className="bg-gray-100 px-4 py-2 rounded-lg m-4 cursor-pointer"
      onClick={fetchOnePokemon}
    >
      <img
        className="w-[200px] border-2"
        src={sprites.front_default}
        alt={name}
      />
      <h2 className="text-center text-lg capitalize">{name}</h2>
      <ul className="flex items-center justify-evenly my-2">
        {typeNames.map((type) => (
          <li key={type}>
            {" "}
            <img
              className="w-[50px]"
              src={`https://veekun.com/dex/media/types/en/${type}.png`}
              alt={type}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCart;
