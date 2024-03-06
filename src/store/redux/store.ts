import { configureStore } from '@reduxjs/toolkit';
import searchHistoryReducer from './searchHistorySlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { charactersApi } from './services/charactersApi';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    history: searchHistoryReducer,
    favorites: favoritesReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
