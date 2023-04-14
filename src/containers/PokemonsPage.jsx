import PokemonInfo from "../components/PokemonInfo";
import PokemonList from "../components/PokemonsList";

const PokemonsPage = () => {
  return (
    <section className="container  px-4 flex justify-between ">
      <PokemonList />
      <PokemonInfo />
    </section>
  );
};

export default PokemonsPage;
