import { useNavigate } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className={css.movie_goback_btn}>
      Go back
    </button>
  );
};

export default GoBackBtn;
