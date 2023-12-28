import { Formik, Field, Form } from 'formik';
import { Notify } from 'notiflix';
import { BiSearchAlt } from 'react-icons/bi';
import css from './Searchbar.module.css';
import { useCustomContext } from 'components/Context/Context';

const Searchbar = () => {
  const { value, setValue } = useCustomContext();

  const handleSubmit = ({ newValue }) => {
    if (!newValue) {
      return Notify.failure('You have to write something here for a successful search');
    }

    if (newValue === value) {
      Notify.info('You have to write new keyword...Try again!');
      return;
    }

    setValue(newValue);
  };

  return (
    <Formik initialValues={{ newValue: value }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.input_wrap}>
          <Field
            className={css.input}
            name="newValue"
            type="text"
            placeholder="Search movies..."
          />
          <button className={css.form_btn} type="submit">
            <BiSearchAlt className={css.search_svg} />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Searchbar;
