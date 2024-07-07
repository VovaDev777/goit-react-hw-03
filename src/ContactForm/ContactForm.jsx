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
        <Form >
            <div className={css.formList}>
                <div className={css.formItem}>
                    <label className={css.label}>Name</label>
                    <Field type="text" name="username" className={css.input} />
                </div>
                <div className={css.formItem}>
                    <label className={css.label}>Number</label>
                    <Field type="text" name="number" className={css.input} />
                </div>
            </div>
            <button className={css.submitBtn} type="submit">Add contact</button>
        </Form>

    </Formik>
    </>
  )
}

export default ContactFrom