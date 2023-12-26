// import css from './MovieDetails.module.css';

import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsMovie } from 'services/movies-api';
import MovieDetailsCart from './MovieDetailsCart/MovieDetailsCart';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const MovieDetails = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [detailsMovie, setDetailsMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const fetchDetailsMovie = async () => {
      const movie = await getDetailsMovie(movieId);

      try {
        setDetailsMovie(movie);
        setStatus(STATUS.RESOLVED);
      } catch {
        Notify.failure('Oops something went wrong! Try reloading the page');
        setStatus(STATUS.REJECTED);
      }
    };

    fetchDetailsMovie();
  }, [movieId]);

  return (
    <>
      {status === STATUS.RESOLVED && <MovieDetailsCart details={detailsMovie} />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error message="Load failed details of movie" />}
    </>
  );
};

export default MovieDetails;
