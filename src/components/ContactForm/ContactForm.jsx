import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  number: Yup.string().min(3, 'Too short').required('Required'),
});

function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={addContact}
    >
      <Form className={css.form}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={css.input}
        />
        <ErrorMessage className={css.error} name="name" component="div" />
        <Field
          type="tel"
          name="number"
          placeholder="Phone"
          className={css.input}
        />
        <ErrorMessage className={css.error} name="number" component="div" />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
