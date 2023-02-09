import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./PokemonCard.css";

const PokemonCard = ({ name, image, abilities }) => {
  const pokemonNameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Card
      className="Pokemon-card"
      key={name}
      title={pokemonNameCapitalized}
      cover={<img src={image} alt={pokemonNameCapitalized} />}
      extra={<StarOutlined />}
    >
      <Meta
        description={
          "Abilities: " + abilities.map((ability) => ` ${ability.ability.name}`)
        }
      />
    </Card>
  );
};
export { PokemonCard };
