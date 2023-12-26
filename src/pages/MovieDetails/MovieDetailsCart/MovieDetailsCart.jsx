import { useNavigate } from 'react-router-dom';
import css from './MovieDetailsCart.module.css';

const MovieDetailsCart = ({ details }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const { title, poster_path, vote_average, overview, genres } = details;
  const userRate = (vote_average * 10).toFixed(1);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={css.movie_info_container}>
      <button onClick={goBack} className={css.movie_goback_btn}>
        Go back
      </button>
      <div className={css.movie_info_wrap}>
        <img
          className={css.movie_info_image}
          src={BASE_IMG + poster_path}
          alt={title}
          loading="lazy"
        />
        <div className={css.movie_info_content}>
          <h2 className={css.movie_info_title}>{title}</h2>
          <p className={css.movie_info_score}>
            <b>User Score:</b> {userRate}%
          </p>
          <div className={css.overview_wrap}>
            <h3 className={css.movie_info_overview_title}>Overview:</h3>
            <p className={css.movie_info_overview}>{overview}</p>
          </div>
          <div className={css.movie_info_genres_wrap}>
            <h3 className={css.movie_info_genres_title}>Genres</h3>
            <ul className={css.movie_info_list}>
              {genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCart;
