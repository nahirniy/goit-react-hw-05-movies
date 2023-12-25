import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header_container}>
        <nav className={css.navigation_list}>
          <NavLink className={css.header_link} to="/">
            Home
          </NavLink>
          <NavLink className={css.header_link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
