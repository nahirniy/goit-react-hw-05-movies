import { Formik, Field, Form } from 'formik';
import { Notify } from 'notiflix';
import { BiSearchAlt } from 'react-icons/bi';

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
      <Form>
        <Field name="query" type="text" placeholder="Search images and photos" />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </Form>
    </Formik>
  );
};

export default Searchbar;
