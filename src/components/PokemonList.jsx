import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {

  console.log(pokemons)

  return (
    <div className="Pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export { PokemonList };
