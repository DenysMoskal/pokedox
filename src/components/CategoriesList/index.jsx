import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Audio } from "react-loader-spinner";

import { setCurrent, selectAllTypesInfo } from "../../store/slice/typesSlice";

const CategoriesList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { types, currentType, isLoading, error } =
    useSelector(selectAllTypesInfo);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 fixed px-6 py-2 border-black border cursor-pointer top-10 capitalize"
      >
        Category:{currentType}
      </div>
      {isOpen && (
        <ul className="fixed top-22 w-[142px] overflow-y-scroll h-[80%]   scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 ">
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
          {types?.map((type) => (
            <li
              key={type.name}
              onClick={() => dispatch(setCurrent(type.name))}
              className={
                currentType === type.name
                  ? "mr-2 bg-red-200 px-2 py-2 cursor-pointer capitalize "
                  : "mr-2 bg-slate-200 px-2 py-2 cursor-pointer hover:bg-slate-300 capitalize"
              }
            >
              {type.name}
            </li>
          ))}
          {error && <div>{error}</div>}
        </ul>
      )}
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="gray"
          ariaLabel="loading"
          wrapperStyle
        />
      )}
    </>
  );
};

export default CategoriesList;
