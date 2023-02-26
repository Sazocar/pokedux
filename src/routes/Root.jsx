import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { App } from '../components/App'
import { shallowEqual, useSelector } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { persistor } from '../main'

const Root = () => {
  const favoritePokemons = useSelector(
    (state) => state.data.favoritePokemons,
    shallowEqual
  )

  console.log(persistor)

  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path='/' element={<App />}>
          <Route
            path=':slug'
            element={<PokemonList pokemons={favoritePokemons} />}
          />
        </Route>
        <Route path='*' errorElement={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default Root

