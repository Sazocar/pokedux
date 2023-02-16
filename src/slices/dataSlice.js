import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice'

const initialState = {
  pokemons: [],
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
);

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
        const isFavorite = state.pokemons[currentPokemonIndex].favorite

        if (isFavorite) {
          state.favoriteCounter = state.favoriteCounter - 1
        } else {
          state.favoriteCounter = state.favoriteCounter + 1
        }

        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload.value
    },
    setSearchedPokemons: (state, action) => {
      const findedPokemon = state.pokemons.filter((pokemon) => {
        const pokemonName = pokemon.name
        const searchText = action.payload.value

        return pokemonName.includes(searchText)
      })

      if (state.searchValue.length && findedPokemon.length) {
        state.searchedPokemons = findedPokemon
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
  setSearchValue,
  setSearchedPokemons,
  setAllPokemonsCounter,
} = dataSlice.actions

export default dataSlice.reducer;




























