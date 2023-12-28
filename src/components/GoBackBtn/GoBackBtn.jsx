import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = () => {
  const location = useLocation();
  const comeBack = location.state.from ?? '/';

  return (
    <Link to={comeBack} className={css.movie_goback_btn}>
      Go back
    </Link>
  );
};

export default GoBackBtn;
