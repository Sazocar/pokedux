import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
import { getPokemon, getPokemonDetails } from '../api'
import { capitalize } from '../components/PokemonCard'
import { setLoading } from './uiSlice'

const initialState = {
  pokemons: [],
  favoritePokemons: [],
  searchValue: '',
  searchedPokemons: [],
  searchedFavoritePokemons: [],
  allPokemonsCounter: 0,
  favoriteCounter: 0,
}

// Hacer que chequee si hay localStorage con persistor primero
// si no hay, que haga la peticion de los pokemones
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
      state.favoritePokemons.map((pokemon) => {
        action.payload[pokemon.id - 1].favorite = true
      })
    },
    setFavorite: (state, action) => {
      if (state.searchValue && state.searchedPokemons.length) {
        const pokemonIndex = state.searchedPokemons.findIndex(
          (pokemon) => pokemon.name === action.payload.name
        )
        // console.log(pokemon)
        state.searchedPokemons[pokemonIndex].favorite = true
      }

      if (state.searchValue && state.searchedFavoritePokemons.length) {
        const pokemonIndex = state.searchedFavoritePokemons.findIndex(
          (pokemon) => pokemon.name === action.payload.name
        )
        state.searchedFavoritePokemons[pokemonIndex].favorite = true
      }

      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.name === action.payload.name
      )

      if (currentPokemonIndex >= 0) {
        state.pokemons[currentPokemonIndex].favorite = true

        state.favoritePokemons.push(state.pokemons[currentPokemonIndex])
        state.favoriteCounter = state.favoritePokemons.length
      }
      toast.success(
        `${capitalize(
          state.pokemons[currentPokemonIndex].name
        )} added to favorites`
      )
    },
    setUnFavorite: (state, action) => {
      if (state.searchValue && state.searchedPokemons.length) {
        const pokemonIndex = state.searchedPokemons.findIndex(
          (pokemon) => pokemon.name === action.payload.name
        )
        state.searchedPokemons[pokemonIndex].favorite = false
      }

      if (state.searchValue && state.searchedFavoritePokemons.length) {
        const pokemonIndex = state.searchedFavoritePokemons.findIndex(
          (pokemon) => pokemon.name === action.payload.name
        )
        state.searchedFavoritePokemons[pokemonIndex].favorite = false
      }

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
      
      toast(
        `${capitalize(
          state.pokemons[currentPokemonIndex].name
        )} removed from favorites`,
        {
          icon: '🗑',
        }
      )
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload.value
      if (!state.searchValue) {
        state.searchedFavoritePokemons = []
        state.searchedPokemons = []
      }
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
    setSearchedFavoritePokemons: (state, action) => {
      const fondedPokemon = state.favoritePokemons.filter((pokemon) => {
        const pokemonName = pokemon.name
        const searchText = action.payload.value

        return pokemonName.includes(searchText)
      })

      if (state.searchValue.length && fondedPokemon.length) {
        state.searchedFavoritePokemons = fondedPokemon
      } else {
        state.searchedFavoritePokemons = []
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
  setSearchedFavoritePokemons,
  setAllPokemonsCounter,
} = dataSlice.actions

export default dataSlice.reducer







