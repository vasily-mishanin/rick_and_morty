import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
//import { RootState } from '@reduxjs/toolkit/query';
import type { RootState } from './store';

type FavoritesSliceState = {
  favoritesIds: string[];
};

const storedFavorites = localStorage.getItem('favorites');

const initialState: FavoritesSliceState = {
  favoritesIds: storedFavorites ? JSON.parse(storedFavorites) : [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string | number>) => {
      const characterId = action.payload.toString();
      if (state.favoritesIds.includes(characterId)) {
        return;
      }
      state.favoritesIds.push(characterId);
    },
    removeFromFavorites: (state, action: PayloadAction<string | number>) => {
      state.favoritesIds = state.favoritesIds.filter(
        (id) => id !== action.payload.toString()
      );
    },

    resetFavorites: (state) => {
      localStorage.removeItem('favorites');
      state.favoritesIds = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, resetFavorites } =
  favoritesSlice.actions;

export const getFavoritesIds = (state: RootState) =>
  state.favorites.favoritesIds;

export default favoritesSlice.reducer;
