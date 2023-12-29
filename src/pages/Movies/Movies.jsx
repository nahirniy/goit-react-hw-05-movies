import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getCurrentMovies } from 'services/movies-api';
import Searchbar from '../../components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { useCustomContext } from 'components/Context/Context';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Movies = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { value, setValue } = useCustomContext();

  useEffect(() => {
    const queryValue = searchParams.get('query') ?? '';

    value ? setSearchParams({ query: value }) : setValue(queryValue);
  }, [searchParams, setValue, value, setSearchParams]);

  useEffect(() => {
    if (!value) {
      return;
    }

    const fetchMovies = async () => {
      setStatus(STATUS.PENDING);

      try {
        const movies = await getCurrentMovies(value);

        setCurrentMovies(movies);
        setStatus(STATUS.RESOLVED);
      } catch {
        Notify.failure('Oops something went wrong! Try reloading the page');
        setStatus(STATUS.REJECTED);
      }
    };

    fetchMovies();
  }, [value]);

  return (
    <>
      {(status === STATUS.RESOLVED || status === STATUS.IDLE) && <Searchbar />}
      {status === STATUS.RESOLVED && <MoviesList movies={currentMovies} page="movie" />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error message="Load failed your movies" />}
    </>
  );
};

export default Movies;
