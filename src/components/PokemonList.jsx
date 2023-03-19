import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  
  return (
    <div className="Pokemon-list">
      {pokemons?.length ? (pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          isFavorite={pokemon.favorite}
        />
      ))) : <p>Empty List</p>}
    </div>
  );
};

export { PokemonList };
