import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentCast } from 'services/movies-api';
import CastList from './CastList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Cast = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const fetchCast = async () => {
      const actors = await getCurrentCast(movieId);

      try {
        setCast(actors);
        setStatus(STATUS.RESOLVED);
      } catch {
        Notify.failure('Oops something went wrong! Try reloading the page');
        setStatus(STATUS.REJECTED);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {status === STATUS.RESOLVED && <CastList cast={cast} />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error message="Load failed details of movie" />}
    </>
  );
};

export default Cast;
