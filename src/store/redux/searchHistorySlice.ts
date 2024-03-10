import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type SearchHistoryState = {
  queryText: string;
  searchHistory: { url: string; text: string }[];
};

const storedHistory = localStorage.getItem('history');

const initialState: SearchHistoryState = {
  queryText: '',
  searchHistory: storedHistory ? JSON.parse(storedHistory) : [],
};

export const searchHistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setQueryText: (state, action: PayloadAction<string>) => {
      state.queryText = action.payload;
    },

    addSearchItem: (
      state,
      action: PayloadAction<{ url: string; text: string }>
    ) => {
      if (state.searchHistory.some((item) => item.url === action.payload.url)) {
        return;
      }
      state.searchHistory.push(action.payload);
    },

    removeSearchItem: (state, action: PayloadAction<{ url: string }>) => {
      state.searchHistory = state.searchHistory.filter(
        (item) => item.url !== action.payload.url
      );
    },

    resetSearchHistory: (state) => {
      localStorage.removeItem('history');
      state.searchHistory = [];
      state.queryText = '';
    },
  },
});

export const {
  setQueryText,
  addSearchItem,
  removeSearchItem,
  resetSearchHistory,
} = searchHistorySlice.actions;

export const getQueryText = (state: RootState) => state.history.queryText;
export const getSearchHistory = (state: RootState) =>
  state.history.searchHistory;

export default searchHistorySlice.reducer;
