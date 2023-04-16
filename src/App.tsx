import axios from "axios";
import { FC } from "react";

import LoadMorePokemons from "./components/LoadMorePokemons";
import Header from "./components/Header";
import PokemonsPage from "./containers/PokemonsPage";
import { BASE_URL } from "./constants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

const App: FC = () => {
  return (
    <div>
      <Header />
      <PokemonsPage />
      <LoadMorePokemons />
    </div>
  );
};

export default App;
