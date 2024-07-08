import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css";
import * as Yup from 'yup';


const userSchema = Yup.object().shape({
    
});



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
        <Form>
            <div className={css.form}>
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
            </div>
        </Form>

    </Formik>
    </>
  )
}

export default ContactFrom