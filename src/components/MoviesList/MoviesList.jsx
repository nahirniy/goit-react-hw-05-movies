import css from './MoviesList.module.css';
import MovieItem from './MovieItem/MovieItem';

const MoviesList = ({ movies, page }) => {
  const title =
    page === 'home'
      ? 'This is popular movie list in the day:'
      : 'This is movie list according to your search:';

  return (
    <div className={css.container}>
      <h1 className={css.movie_title}>{title}</h1>
      <ul className={css.movie_list}>
        {movies.map(({ title, id, poster_path }) => {
          return <MovieItem key={id} title={title} id={id} img={poster_path} />;
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
