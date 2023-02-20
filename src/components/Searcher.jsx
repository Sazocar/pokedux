import { useDispatch } from "react-redux"
import { setSearchedPokemons, setSearchValue } from "../slices/dataSlice"
import { Input } from "antd"
import './Searcher.css'

const Searcher = () => {
  const dispatch = useDispatch();
  
  const onChangeValue = (e) => {
    dispatch(setSearchValue({ value: e.target.value }))
    dispatch(setSearchedPokemons({ value: e.target.value }))
  }

  return (
    <Input.Search onChange={onChangeValue} className='Searcher' placeholder='Search...'/>
  )
}

export { Searcher };