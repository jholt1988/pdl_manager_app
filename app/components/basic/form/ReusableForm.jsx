
// ReusableForm.jsx
// This component is a reusable form using Formik for form management and validation.

// Import necessary libraries and components
import React, {useState} from 'react';
import { Formik, Form, Field, useFormik } from 'formik'; // Formik for form state management
import * as Yup from 'yup'; // Yup for schema validation
import { Button } from '@mui/material';
import { TextField } from '@mui/material'
import {DatePicker} from '@mui/x-date-pickers';
import  TextInput from '../input/TextInput' // Custom TextInput component
import BasicButton from '../button/BasicButton'; // Custom BasicButton component


// ReusableForm component definition
// Props:
// - initialValues: Object containing the initial values for the form fields
// - validationSchema: Yup schema for form validation
// - onSubmit: Function to handle form submission
// - fields: Array of field objects containing information about each form field
const ReusableForm = ({ initialValues, validationSchema, onSubmit, fields, children }) => {
  
    const formik = useFormik({
      initialValues:initialValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit
    });
  
  
  return (
   // Destructs errors and touched from Formik's context
        <form id='test' onSubmit={formik.handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} style={{ marginBottom: '16px' }}>
              { field.type =="date" ?(
                 <DatePicker
                 id={field.name} // Uses custom TextInput component for each field
                 name={field.name} // Sets the name for the field
                 label={field.label} // Sets the label for the field
                 type={field.type || 'text'} // Sets the type of the field, defaulting to 'text'
                 fullwidth // Makes the input full width
                 value= {formik.values[field.name]}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                 helperText={formik.touched[field.name] && formik.errors[field.name]}
              /> 
              ):
             ( <TextField
            
               id={field.name} // Uses custom TextInput component for each field
                name={field.name} // Sets the name for the field
                label={field.label} // Sets the label for the field
                type={field.type || 'text'} // Sets the type of the field, defaulting to 'text'
                fullwidth // Makes the input full width
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                helperText={formik.touched[field.name] && formik.errors[field.name]}
              />)
             }
            </div>
          ))}
          <BasicButton type="submit" color="primary" >Submit</BasicButton> 
        </form>
      )}
    
  

export default ReusableForm; // Export the ReusableForm component for use in other parts of the application
