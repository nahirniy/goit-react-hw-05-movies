import { nanoid } from 'nanoid';
import css from './Reviews.module.css';

const ReviewList = ({ reviews }) => {
  return (
    <>
      <h2 className={css.review_title}>Review:</h2>
      <ul className={css.review_list}>
        {reviews.map(({ author, content }) => {
          const id = nanoid();

          return (
            <li li key={id} className={css.review_item}>
              <h2 className={css.review_name}>Author: {author}</h2>
              <p className={css.review_content}>
                <b>Content:</b> {content}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewList;
