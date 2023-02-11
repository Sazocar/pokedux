import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
  loading: true,
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state
        .get("pokemons")
        .findIndex((pokemon) => pokemon.get("name") === action.payload.name);

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
      
      return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
    case SET_LOADING:
      // return { ...state, loading: action.payload };
      return state.setIn(['loading'], action.payload);
    default:
      return state;
  }
};
