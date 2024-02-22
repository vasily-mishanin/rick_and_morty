import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './components/Root';
import FormSignUp from './components/FormSignUp';
import FormSignIn from './components/FormSignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='signup' element={<FormSignUp />}></Route>
      <Route path='signin' element={<FormSignIn />}></Route>
      <Route path='*' element={<h2>Not found</h2>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
