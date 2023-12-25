import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <Link to="/">{title ?? name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
