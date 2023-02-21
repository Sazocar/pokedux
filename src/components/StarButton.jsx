import { Button } from "antd";
import { useDispatch } from "react-redux";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { setFavorite, setUnFavorite } from "../slices/dataSlice";

const StarButton = ({ isFavorite, name }) => {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    isFavorite
      ? dispatch(setUnFavorite({ name }))
      : dispatch(setFavorite({ name }))
  }

  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={handleOnFavorite} />
};

export { StarButton };


