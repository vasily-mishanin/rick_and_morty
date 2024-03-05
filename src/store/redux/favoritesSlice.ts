import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type FavoritesSliceState = {
  favoritesIds: string[];
};

const initialState: FavoritesSliceState = {
  favoritesIds: [],
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
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectQueryText = (state: RootState) => state.history.queryText;

export default favoritesSlice.reducer;
