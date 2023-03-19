import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { StarFilled, StarOutlined } from '@ant-design/icons'
import { setFavorite, setUnFavorite } from '../slices/dataSlice'
import { toast } from 'react-hot-toast'
import { capitalize } from './PokemonCard'

const StarButton = ({ isFavorite, name }) => {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    isFavorite
      ? dispatch(setUnFavorite({ name })) &&
      toast.success(
        `${capitalize(name)} removed from favorites`
      )
      : dispatch(setFavorite({ name })) &&
      toast.success(
        `${capitalize(name)} added to favorites`
      )
  }

  const Icon = isFavorite ? StarFilled : StarOutlined
  return <Button icon={<Icon />} onClick={handleOnFavorite} />
}

export { StarButton }

