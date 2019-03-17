import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Contact = ({ errors, touched }) => (
    <Form>
        <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type='text' name='name' placeholder='Name' />
        </div>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type='email' name='email' placeholder='Email' />
        </div>
        <button>Submit</button>
    </Form>
);

const FormikContact = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            email: '',
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2)
            .required('You must provide a name'),
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Please enter your email address'),
    }),
    handleSubmit(values) {
        console.log(values);
    },
})(Contact);

export default FormikContact;
