import { Link, Outlet, useLocation } from 'react-router-dom';

import css from './AddContent.module.css';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const AddContent = () => {
  const location = useLocation();
  const comeBack = location.state.from ?? '/';

  return (
    <div className={css.add_content_wrap}>
      <div className={css.add_content_wrap_info}>
        <h2 className={css.add_content_title}>Additional information:</h2>
        <ul className={css.add_content_list}>
          <li className={css.add_content_item}>
            <Link className={css.add_content_link} to="cast" state={{ from: comeBack }}>
              Cast
            </Link>
          </li>
          <li className={css.add_content_item}>
            <Link
              className={css.add_content_link}
              to="reviews"
              state={{ from: comeBack }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AddContent;
