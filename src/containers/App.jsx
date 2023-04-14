import React from "react";
import Header from "../components/Header";
import PokemonsPage from "./PokemonsPage";
import ShowMore from "../components/ShowMore/ShowMore";

const App = () => {
  return (
    <div>
      <Header />
      <PokemonsPage />
      <ShowMore />
    </div>
  );
};

export default App;
