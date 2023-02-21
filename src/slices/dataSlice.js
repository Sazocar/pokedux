import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api'
import { setLoading } from './uiSlice'

const initialState = {
  pokemons: [],
  favoritePokemons: [],
  searchValue: '',
  searchedPokemons: [],
  allPokemonsCounter: 0,
  favoriteCounter: 0,
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemon()
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    )
    dispatch(setPokemons(pokemonsDetailed))
    dispatch(setAllPokemonsCounter({ count: pokemonsRes.length }))
    dispatch(setLoading(false))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      )

      if (currentPokemonIndex >= 0) {
        state.pokemons[currentPokemonIndex].favorite = true

        state.favoritePokemons.push(state.pokemons[currentPokemonIndex])
        state.favoriteCounter = state.favoritePokemons.length
      }
    },
    setUnFavorite: (state, action) => {
      const currentFavPokemonIndex = state.favoritePokemons.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      )

      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      )

      state.favoritePokemons[currentFavPokemonIndex].favorite = false
      state.favoritePokemons = state.favoritePokemons.filter(
        (pokemon) => pokemon.favorite === true
      )
      state.favoriteCounter = state.favoritePokemons.length

      const newPokemonList = [...state.pokemons]
      newPokemonList[currentPokemonIndex].favorite = false
      state.pokemons = newPokemonList
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload.value
    },
    setSearchedPokemons: (state, action) => {
      const fondedPokemon = state.pokemons.filter((pokemon) => {
        const pokemonName = pokemon.name
        const searchText = action.payload.value

        return pokemonName.includes(searchText)
      })

      if (state.searchValue.length && fondedPokemon.length) {
        state.searchedPokemons = fondedPokemon
      } else {
        state.searchedPokemons = []
      }
    },
    setAllPokemonsCounter: (state, action) => {
      state.allPokemonsCounter = action.payload.count
    },
  },
})

export const {
  setPokemons,
  setFavorite,
  setUnFavorite,
  setSearchValue,
  setSearchedPokemons,
  setAllPokemonsCounter,
} = dataSlice.actions

export default dataSlice.reducer

