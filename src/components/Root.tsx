import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Root = () => {
  return (
    <div className='h-full flex flex-col'>
      <header className='p-4 flex justify-between items-center border-b border-blue-300'>
        <div className='w-12'>
          <Link to='/'>
            <img
              src='/icon_rick_and_morty.jpeg'
              alt='logo'
              className='w-full'
            />
          </Link>
        </div>
        <Navigation />
      </header>
      <main className='grow shrink-0'>
        <Outlet />
      </main>
      <footer className='p-4 border-t border-green-300 text-center'>
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};
export default Root;
