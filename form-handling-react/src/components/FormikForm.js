import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form data:', values);
    // Simulate API call here
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="username" className="block">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="p-2 border rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="email" className="block">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="p-2 border rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="password" className="block">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="p-2 border rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            disabled={isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
