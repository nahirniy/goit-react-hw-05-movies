import { Link, Outlet } from 'react-router-dom';

import css from './AddContent.module.css';

const AddContent = () => {
  return (
    <div className={css.add_content_wrap}>
      <div className={css.add_content_wrap_info}>
        <h2 className={css.add_content_title}>Additional information:</h2>
        <ul className={css.add_content_list}>
          <li className={css.add_content_item}>
            <Link className={css.add_content_link} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.add_content_item}>
            <Link className={css.add_content_link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default AddContent;
