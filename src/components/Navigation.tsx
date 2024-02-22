import { NavLink } from 'react-router-dom';

const links = [
  { to: 'characters', label: 'Characters' },
  { to: 'signin', label: 'Sign In' },
  { to: 'signup', label: 'Sign Up' },
];

const Navigation = () => {
  return (
    <nav>
      <ul className='flex gap-4'>
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
    </nav>
  );
};
export default Navigation;
