import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsMovie } from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import MovieDetailsContent from 'components/MovieDetailsContent/MovieDetailsContent';

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
    const fetchDetailsMovie = async () => {
      setStatus(STATUS.PENDING);

      try {
        const movie = await getDetailsMovie(movieId);

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
      {status === STATUS.RESOLVED && <MovieDetailsContent details={detailsMovie} />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error message="Load failed details of movie" />}
    </>
  );
};

export default MovieDetails;
