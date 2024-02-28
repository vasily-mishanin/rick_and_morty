import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type SearchHistoryState = {
  queryText: string;
};

const initialState: SearchHistoryState = {
  queryText: '',
};

export const searchHistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setQueryText: (state, action: PayloadAction<string>) => {
      state.queryText = action.payload;
    },
  },
});

export const { setQueryText } = searchHistorySlice.actions;

export const selectQueryText = (state: RootState) => state.history.queryText;

export default searchHistorySlice.reducer;
