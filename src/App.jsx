import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Col, Spin } from 'antd'
import { Searcher } from './components/Searcher'
import { NavButton } from './components/NavButton'
import { PokemonList } from './components/PokemonList'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import logo from './statics/logo.svg'
import './App.css'
import { all } from 'axios'

const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)
  const filteredPokemons = useSelector(
    (state) => state.data.searchedPokemons,
    shallowEqual
  )
  const searchValue = useSelector((state) => state.data.searchValue)
  const loading = useSelector((state) => state.ui.loading)
  const allPokemonsCounter = useSelector((state) => state.ui.allPokemonsCounter)
  const favoriteCounter = useSelector((state) => state.ui.favoriteCounter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img className='PokeLogo' src={logo} alt='' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher pokemons={pokemons} />
      </Col>

      {!loading ? (
        <>
          <NavButton text={'All'} count={allPokemonsCounter} />
          <NavButton text={'Favorites'} count={favoriteCounter} />
        </>
      ) : null}

      {loading ? (
        <Spin spinning tip='Loading...' size='large' />
      ) : !loading && searchValue ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  )
}

export default App









