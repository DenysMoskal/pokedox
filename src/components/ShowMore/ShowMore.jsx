import { useDispatch } from "react-redux";
import { fetchPokemons } from "../../store/slice/pokemonsSlice";
import { useRef } from "react";

const ShowMore = () => {
  const dispatch = useDispatch();
  const buttonRef = useRef();

  const moreHandler = (e) => {
    dispatch(fetchPokemons());
    buttonRef.current.focus();
  };

  return (
    <div onClick={moreHandler}>
      <button
        className="bg-gray-100 rounded py-4 text-4xl px-20 flex m-auto my-4 hover:bg-slate-300"
        ref={buttonRef}
      >
        Show More
      </button>
    </div>
  );
};

export default ShowMore;
