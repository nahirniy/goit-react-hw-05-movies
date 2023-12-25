import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <Link to="/movies/:movieId">{title ?? name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
