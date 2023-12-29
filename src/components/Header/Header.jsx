import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header_container}>
        <nav className={css.navigation_list}>
          <NavLink
            className={({ isActive }) =>
              `${css.header_link} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.header_link} ${isActive ? css.active : ''}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
