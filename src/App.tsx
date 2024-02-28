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

function App() {
  const authCtx = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage />} />
        <Route
          path='signup'
          element={
            <ProtectedRoute
              permit={!authCtx.isLoggedIn}
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
        <Route path='characters' element={<CharactersPage />} />
        <Route
          path='search'
          element={
            <ProtectedRoute permit={authCtx.isLoggedIn} redirectPath='/signin'>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route path='characters/:id' element={<CharacterDetailsPage />} />
        <Route path='*' element={<h2>Not found</h2>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
