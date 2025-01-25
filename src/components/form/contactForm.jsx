import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid/non-secure';
import s from './IAmSoLazy.module.css'

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

  phone: Yup.string().matches(
      /^\d{3}-\d{2}-\d{2}$/,
    'Phone number must be in the format XXX-XX-XX').required('Required'),
});


function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSumbit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };


const initialValues = {
  username: '',
  phone: '',
};

  function ContactForm(onPus) {
  
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSumbit = (values, actions) => {
    onPlus({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };

    return (

      <Formik
        initialValues={{ initialValues }} 
        validationSchema={ContactFormSchema}
        onSubmit={handleSumbit}
      >

        <Form >
          <div className={s.fckForm}>
            <label className={s.titleLabel} htmlFor={nameFieldId}>Phone</label>
            <Field className={s.fieldInput} id={nameFieldId} type="phone" name="phone" />
            <ErrorMessage
            name="username"
            component="span"
            />
            
            <label className={s.titleLabel} htmlFor={phoneFieldId}>Name</label>
            <Field className={s.fieldInput} id={phoneFieldId} type="text" name="username" />
            <ErrorMessage
            name="phone"
            component="span"
            />
            
            <button className={s.btnSubForm} type="submit" >Add contact</button>
          </div>
        </Form>


    </Formik>
  );
};


export default ContactForm