import { useDispatch } from "react-redux";
import { StarButton } from "./StarButton";
import { Card } from "antd";
import { setFavorite } from '../slices/dataSlice'
import Meta from "antd/es/card/Meta";
import "./PokemonCard.css";

const PokemonCard = ({ name, image, abilities, isFavorite }) => {
  const dispatch = useDispatch();
  const pokemonNameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const pokemonAbilities = abilities.map(element => element.ability.name).join(', ');

  return (
    <Card
      className="Pokemon-card"
      key={name}
      title={pokemonNameCapitalized}
      cover={<img src={image} alt={pokemonNameCapitalized} />}
      extra={<StarButton isFavorite={isFavorite} name={name} />}
    >
      <Meta description={`Abilities: ${pokemonAbilities}`} />
    </Card>
  );
};
export { PokemonCard };
