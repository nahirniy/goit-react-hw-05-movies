import { Link } from 'react-router-dom';
import css from './MovieItem.module.css';

const MovieItem = ({ title, id, img }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <li className={css.movie_item}>
      <Link className={css.movie_link} to={`/movies/${id}`}>
        <img className={css.movie_img} src={BASE_IMG + img} alt={title} loading="lazy" />
        <p className={css.movie_title}>{title}</p>
      </Link>
    </li>
  );
};

export default MovieItem;
