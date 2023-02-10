import { StarButton } from "./StarButton";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonCard.css";

const PokemonCard = ({ name, image, abilities }) => {
  const pokemonNameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const pokemonAbilities = abilities.map(element => element.ability.name).join(', ');

  return (
    <Card
      className="Pokemon-card"
      key={name}
      title={pokemonNameCapitalized}
      cover={<img src={image} alt={pokemonNameCapitalized} />}
      extra={<StarButton isFavorite onClick={() => alert('Clickeado!')}/>}
    >
      <Meta
        description={
          `Abilities: ${pokemonAbilities}`
        }
      />
    </Card>
  );
};
export { PokemonCard };
