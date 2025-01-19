//
import s from './IAmSoLazy.module.css'
import { Formik, Form, Field } from 'formik';


function ContactForm() {
    return (
    <Formik initialValues={{}} onSubmit={() => {}}>
        <Form >
          <div className={s.fckForm}>
                <h3 className={s.titleh3}>Phone</h3>
                <Field className={s.fieldInput} type="phone" name="phone"></Field>

                <h3 className={s.titleh3}>Name</h3>
                <Field className={s.fieldInput} type="text" name="username"></Field>

            <button className={s.btnSubForm} type="submit">Add contact</button>
          </div>
        </Form>
    </Formik>
  );
};


export default ContactForm;