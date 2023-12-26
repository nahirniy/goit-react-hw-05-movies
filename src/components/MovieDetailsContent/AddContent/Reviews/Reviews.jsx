import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentReviews } from 'services/movies-api';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import ReviewList from './ReviewsList';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Reviews = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const fetchCast = async () => {
      const reviews = await getCurrentReviews(movieId);

      try {
        setReviews(reviews);
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
      {status === STATUS.RESOLVED && <ReviewList reviews={reviews} />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error message="Load failed reviews of movie" />}
    </>
  );
};

export default Reviews;
