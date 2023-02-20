import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { PokemonList } from '../components/PokemonList'
import { Outlet } from 'react-router-dom'
import { fetchPokemonsWithDetails } from '../slices/dataSlice'
import '../App.css'

const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const filteredPokemons = useSelector(
    (state) => state.data.searchedPokemons,
    shallowEqual
  )
  const searchValue = useSelector((state) => state.data.searchValue)
  const loading = useSelector((state) => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

   

  return (
    <div className='App'>
      
      {loading ? (
        <Spin spinning tip='Loading...' size='large' />
      ) : !loading && searchValue ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}

      <Outlet />
    </div>
  )
}

export { App } 






