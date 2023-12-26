import css from './CardContent.module.css';

const CardContent = ({ movieData }) => {
  const { title, image, userRate, overview, genres } = movieData;

  return (
    <div className={css.movie_info_wrap}>
      <img className={css.movie_info_image} src={image} alt={title} loading="lazy" />
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
  );
};

export default CardContent;
