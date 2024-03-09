import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './components/Root';
import FormSignUp from './components/auth/FormSignUp';
import FormSignIn from './components/auth/FormSignIn';
import ProtectedRoute from './components/ProtectedRoute';
import { useContext } from 'react';
import { AuthContext } from './store/auth/AuthProvider';
import ProfilePage from './components/pages/ProfilePage';
import CharactersPage from './components/pages/CharactersPage';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import CharacterDetailsPage from './components/pages/CharacterDetailsPage';
import FavoritesPage from './components/pages/FavoritesPage';
import SearchHistoryPage from './components/pages/SearchHistoryPage';

function App() {
  const authCtx = useContext(AuthContext);

  // TODO - HASH ROUTER - Netlify (page not found)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage />} />
        <Route
          path='signup'
          element={
            <ProtectedRoute
              permit={!authCtx.isLoggedIn}
              isLoading={!authCtx.isAuthStateLoaded}
              redirectPath='/profile'
            >
              <FormSignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path='signin'
          element={
            <ProtectedRoute
              permit={!authCtx.isLoggedIn}
              isLoading={!authCtx.isAuthStateLoaded}
              redirectPath='/profile'
            >
              <FormSignIn />
            </ProtectedRoute>
          }
        />
        <Route
          path='profile'
          element={
            <ProtectedRoute permit={authCtx.isLoggedIn} redirectPath='/signin'>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='favorites'
          element={
            <ProtectedRoute
              permit={authCtx.isLoggedIn}
              isLoading={!authCtx.isAuthStateLoaded}
              redirectPath='/signin'
            >
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='history'
          element={
            <ProtectedRoute
              permit={authCtx.isLoggedIn}
              isLoading={!authCtx.isAuthStateLoaded}
              redirectPath='/signin'
            >
              <SearchHistoryPage />
            </ProtectedRoute>
          }
        />
        <Route path='characters' element={<CharactersPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='characters/:id' element={<CharacterDetailsPage />} />

        <Route path='*' element={<h2>Not found</h2>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
