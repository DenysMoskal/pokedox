import { useAppDispatch } from "hook";

import { fetchPokemons } from "../../store/slice/pokemonsSlice";

const LoadMorePokemons = () => {
  const dispatch = useAppDispatch();

  const moreHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(fetchPokemons());
  };

  return (
    <div onClick={moreHandler}>
      <button className="bg-gray-100 rounded py-4 text-4xl px-20 flex m-auto my-4 hover:bg-slate-300">
        Show More
      </button>
    </div>
  );
};

export default LoadMorePokemons;
