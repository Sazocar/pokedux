import { useDispatch } from "react-redux"
import { setSearchedFavoritePokemons, setSearchedPokemons, setSearchValue } from "../slices/dataSlice"
import { useLocation } from "react-router-dom"
import { Input } from "antd"
import './Searcher.css'


const Searcher = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
  
  const onChangeValue = (e) => {
    dispatch(setSearchValue({ value: e.target.value.toLowerCase() }))
    
    if (pathname === '/favorites') {
      dispatch(setSearchedFavoritePokemons({ value: e.target.value.toLowerCase() }))
    } else {
      dispatch(setSearchedPokemons({ value: e.target.value.toLowerCase() }))
    }
  }

  return (
    <Input.Search onChange={onChangeValue} className='Searcher' placeholder='Search...'/>
  )
}










export { Searcher };