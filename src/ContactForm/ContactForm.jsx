import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css"

const ContactFrom = ({ onAddContact }) => {


    const handleSubmit = (values, {resetForm}) => {
        onAddContact(values);
        resetForm();
    }

  return (
    <>
    <Formik
        initialValues={{
            username: "",
            number: "",

        }}
        onSubmit={handleSubmit}
    >
        <Form className={css.form}>
            <ul className={css.formList}>
                <li className={css.formItem}>
                    <label className={css.label}>Name</label>
                    <Field type="text" name="username" className={css.input}/>
                </li>
                <li className={css.formItem}>
                    <label className={css.label}>Number</label>
                    <Field type="text" name="number" className={css.input}/>
                </li>
            </ul>
            <button className={css.submitBtn} type='submit'>Add contact</button>
            
        </Form>
    </Formik>
    </>
  )
}

export default ContactFrom