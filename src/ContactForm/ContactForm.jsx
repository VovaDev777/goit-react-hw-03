import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css"

const ContactFrom = () => {
    const handleSubmit = (values) => {
        console.log(values);
    }

  return (
    <>
    <Formik
        initialValues={{
            username: "Bob",
            number: "380",

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
                <Field type="number" name="number"/>
            </div>
            <button className={css.submitBtn} type='submit'>Add contact</button>
        </Form>
    </Formik>
    </>
  )
}

export default ContactFrom