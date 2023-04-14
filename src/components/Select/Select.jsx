import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../store/slice/typesSlice";
import { capitalizeFirstLetter } from "../../services/capitalizeFirstLetter";
import { useState } from "react";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { types } = useSelector((state) => state.types);
  const { currentType } = useSelector((state) => state.types);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 absolute px-6 py-2 border-black border cursor-pointer top-10"
      >
        Category:{capitalizeFirstLetter(currentType)}
      </div>
      {isOpen && (
        <ul className=" absolute top-22 w-[142px] overflow-auto">
          <li
            onClick={() => dispatch(setCurrent("All"))}
            className={
              currentType === "All"
                ? "mr-2 bg-red-200 px-2 py-2 cursor-pointer "
                : "mr-2 bg-slate-200 px-2 py-2 cursor-pointer hover:bg-slate-300"
            }
          >
            All
          </li>
          {types.map((type) => (
            <li
              key={type.name}
              onClick={() => dispatch(setCurrent(type.name))}
              className={
                currentType === type.name
                  ? "mr-2 bg-red-200 px-2 py-2 cursor-pointer "
                  : "mr-2 bg-slate-200 px-2 py-2 cursor-pointer hover:bg-slate-300"
              }
            >
              {capitalizeFirstLetter(type.name)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Select;
