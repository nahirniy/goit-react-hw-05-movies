import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

import { getCurrentMovies } from 'services/movies-api';
import Searchbar from './Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Movies = () => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getCurrentMovies(value);

      try {
        setCurrentMovies(movies);
        setStatus(STATUS.RESOLVED);
      } catch {
        Notify.failure('Oops something went wrong! Try reloading the page');
        setStatus(STATUS.REJECTED);
      }
    };

    if (value) fetchMovies();
  }, [value]);

  const updateValues = newValue => {
    if (newValue === value) {
      Notify.info('You have to write new keyword...Try again!');
      return;
    }

    setValue(newValue);
    setStatus(STATUS.PENDING);
    console.log(status);
  };

  return (
    <>
      <Searchbar onSubmit={updateValues} />
      <MoviesList movies={currentMovies} />
    </>
  );
};

export default Movies;
