import css from './MoviesList.module.css';
import MovieItem from './MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
  return (
    <div className={css.container}>
      <ul className={css.movie_list}>
        {movies.map(({ title, name, id, poster_path }) => {
          const header = title ?? name;

          return <MovieItem key={id} title={header} id={id} img={poster_path} />;
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
