import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import favoritesReducer, {
  addToFavorites,
  removeFromFavorites,
} from './favoritesSlice';
import searchHistoryReducer, {
  addSearchItem,
  removeSearchItem,
} from './searchHistorySlice';
import { charactersApi } from './services/charactersApi';
import type { TypedStartListening } from '@reduxjs/toolkit';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const listenerMiddleware = createListenerMiddleware();

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

startAppListening({
  matcher: isAnyOf(addToFavorites, removeFromFavorites),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      'favorites',
      JSON.stringify(listenerApi.getState().favorites.favoritesIds)
    );
  },
});

startAppListening({
  matcher: isAnyOf(addSearchItem, removeSearchItem),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      'history',
      JSON.stringify(listenerApi.getState().history.searchHistory)
    );
  },
});

export const store = configureStore({
  reducer: {
    history: searchHistoryReducer,
    favorites: favoritesReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(charactersApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
