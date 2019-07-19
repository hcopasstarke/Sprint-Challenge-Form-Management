import React from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {Redirect} from 'react-router-dom';

function RegForm({ values, errors, touched }) {
    const token = localStorage.getItem('token');

    if (token) {
        return <Redirect to='/recipe' />;
    }

    return (
        <Form>
            <label>UserName</label>
            <Field type='text' name='username' value={values.username} />
            {touched.username && errors.username && <p>{errors.username}</p>}
            <label>Password</label>
            <Field type='text' name='password' value={values.password} />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <button>Click to Register! &rarr;</button>
        </Form>
    );
}

export default withFormik({
    mapPropsToValue: ({username, password}) => {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required.'),
        password: Yup.string()
            .min(8, 'Password must be 8-20 characters.')
            .max(20)
            .required('Password is required.')
    }),

    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(true)
        const url = 'http://localhost:5000/api/register';

        axios
            .post(url, values)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                formikBag.props.history.push('/register');
                formikBag.setSubmitting(false)
            })
            .catch(error => console.log(error.response.data));
            formikBag.setSubmitting(false)
    }
})(RegForm);
