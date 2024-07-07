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
            <div>
                <label>Name</label>
                <Field type="text" name="username"/>
            </div>
            <div>
                <label>Number</label>
                <Field type="text" name="number"/>
            </div>
            <button className={css.submitBtn} type='submit'>Add contact</button>
        </Form>
    </Formik>
    </>
  )
}

export default ContactFrom