import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  allPokemonsCounter: 0,
  favoriteCounter: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setAllPokemonsCounter: (state, action) => {
      state.allPokemonsCounter = action.payload.count
    },
    addToCounter: (state, action) => {
      state.favoriteCounter = state.favoriteCounter + 1
    },
    subtractToCounter: (state, action) => {
      state.favoriteCounter = state.favoriteCounter - 1
    },
  },
})

export const { setLoading, setAllPokemonsCounter, addToCounter, subtractToCounter } =
  uiSlice.actions

export default uiSlice.reducer;









