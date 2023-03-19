import { StarButton } from './StarButton'
import { Card } from 'antd'
import { LazyImg } from './LazyImg'
import Meta from 'antd/es/card/Meta'
import './PokemonCard.css'

const PokemonCard = ({ name, image, abilities, isFavorite }) => {
  const pokemonNameCapitalized = capitalize(name)
  const pokemonAbilities = abilities
    .map((element) => element.ability.name)
    .join(', ')

  return (
    <Card
      className='Pokemon-card'
      key={name}
      title={pokemonNameCapitalized}
      cover={
        <LazyImg src={image} alt={pokemonNameCapitalized} lazy='loading' />
      }
      extra={<StarButton isFavorite={isFavorite} name={name} />}
    >
      <Meta description={`Abilities: ${pokemonAbilities}`} />
    </Card>
  )
}

export { PokemonCard }

export const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1)