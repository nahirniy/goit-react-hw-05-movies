import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import css from './Error.module.css';

const Error = ({ message }) => {
  return (
    <>
      <GoBackBtn />
      <h2 className={css.header_error}>
        Oops something went wrong! Try reloading the page
      </h2>
      <p className={css.description_error}>{message}</p>
    </>
  );
};

export default Error;
