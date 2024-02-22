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

function App() {
  const authCtx = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage />}></Route>
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
        ></Route>
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
        ></Route>
        <Route
          path='profile'
          element={
            <ProtectedRoute permit={authCtx.isLoggedIn} redirectPath='/signin'>
              <ProfilePage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path='characters' element={<CharactersPage />}></Route>
        <Route path='*' element={<h2>Not found</h2>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
