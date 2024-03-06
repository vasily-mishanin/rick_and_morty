import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../store/auth/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { NAV_LINKS } from '../constants';

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  const links = NAV_LINKS.filter(
    (link) =>
      link.type === 'public' ||
      (link.type === 'private' && authCtx.isLoggedIn) ||
      (link.type === 'auth' && !authCtx.isLoggedIn)
  );

  const handleSignOut = () => {
    localStorage.removeItem('favorites');
    localStorage.removeItem('history');
    signOut(auth);
  };

  if (!authCtx.isAuthStateLoaded) {
    return null;
  }

  return (
    <nav className='flex gap-4'>
      <ul className='flex  gap-4'>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'hover:text-green-300 text-green-400'
                  : 'hover:text-green-400'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      {authCtx.isLoggedIn && (
        <button
          className='px-1 rounded text-sm border hover:bg-orange-300 hover:bg-opacity-75 transition-colors'
          onClick={handleSignOut}
        >
          Выйти
        </button>
      )}
    </nav>
  );
};
export default Navigation;
