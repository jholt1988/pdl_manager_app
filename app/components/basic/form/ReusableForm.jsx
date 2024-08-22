// components/ReusableForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const ReusableForm = ({ initialValues, validationSchema, onSubmit, fields }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {fields.map((field) => (
            <div key={field.name} style={{ marginBottom: '16px' }}>
              <Field
                as={TextField}
                name={field.name}
                label={field.label}
                type={field.type || 'text'}
                fullWidth
                error={touched[field.name] && Boolean(errors[field.name])}
                helperText={touched[field.name] && errors[field.name]}
              />
            </div>
          ))}
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ReusableForm;
