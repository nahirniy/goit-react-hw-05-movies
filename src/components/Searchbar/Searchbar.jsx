import { Formik, Field, Form } from 'formik';
import { Notify } from 'notiflix';
import { BiSearchAlt } from 'react-icons/bi';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ query }, action) => {
    if (!query) {
      return Notify.failure('You have to write something here for a successful search');
    }

    onSubmit(query);
    action.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.input_wrap}>
          <Field
            className={css.input}
            name="query"
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
