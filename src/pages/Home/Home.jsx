import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/movies-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Home = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
        setStatus(STATUS.RESOLVED);
      } catch {
        Notify.failure('Failed to load list of popular movies...');
        setStatus(STATUS.REJECTED);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {status === STATUS.RESOLVED && <MoviesList movies={popularMovies} />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error message="Load failed trend movies" />}
    </>
  );
};
export default Home;
