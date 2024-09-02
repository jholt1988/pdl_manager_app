'use client'
// ReusableForm.jsx
// This component is a reusable form using Formik for form management and validation.

// Import necessary libraries and components
import React, {useState} from 'react';
import { Formik, Form, Field, useFormik, withFormik } from 'formik'; // Formik for form state management
import * as Yup from 'yup'; // Yup for schema validation
import { Button } from '@mui/material';
import moment from 'moment';
import { TextField, InputLabel, MenuItem, Select } from '@mui/material'
import {DatePicker} from '@mui/x-date-pickers';
import  TextInput from '../input/TextInput' // Custom TextInput component
import BasicButton from '../button/BasicButton'; 
import { initialValues } from '../../tenants/edittenantform';// Custom BasicButton component


// ReusableForm component definition
// Props:
// - initialValues: Object containing the initial values for the form fields
// - validationSchema: Yup schema for form validation
// - onSubmit: Function to handle form submission
// - fields: Array of field objects containing information about each form field
const ReusableForm = ({className, initialValues, fields, handleSubmit}) => {
  
  const fieldFactory = (field, props) =>{
    switch(field.className) {
      case "date_time":
        return (<DatePicker
          id={field.name} // Uses custom TextInput component for each field
          name={field.name} // Sets the name for the field
          label={field.label} // Sets the label for the field
          type={field.type || 'text'} // Sets the type of the field, defaulting to 'text'
          fullwidth // Makes the input full width
          defaultValue= {props.initialValues[field.name] || ''}
          value={moment.utc(props.values[field.name])}  
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          error={props.touched[field.name] && Boolean(props.errors[field.name])}
          helperText={props.touched[field.name] && errors[field.name]}
          slotProps={{
           inputLabel:{
             shrink:true
           },
          }}
          
       /> );
       case "select":
        return(
          <>
          <InputLabel id={`${field.label}_label_id`}>{field.label}</InputLabel>
          <Select
            labelId={`${field.label}_label_id`}
            value={props.values[field.name]}  
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            error={props.touched[field.name] && Boolean(props.errors[field.name])}
            helperText={props.touched[field.name] && errors[field.name]}>
              {field.options.map(option => (
                <MenuItem value={option}>{`${option}`}</MenuItem>
              ))}
            </Select>
            </>
        );
        default: 
        return(               
           <TextField  
          id={field.name} // Uses custom TextInput component for each field
          name={field.name} // Sets the name for the field
          label={field.label } // Sets the label for the field
          type={field.type || 'text'} // Sets the type of the field, defaulting to 'text'
          fullwidth // Makes the input full width
          defaultValue={props.initialValues[field.name] || ''}
          value={props.values[field.name]}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          variant='filled'
          slotProps={{
            inputLabel:{
              shrink:true
            }
           }}
        
          
          error={props.touched[field.name] && Boolean(props.errors[field.name])}
          helperText={props.touched[field.name] && props.errors[field.name]}
        />)

    }
  }


  
    

  
  return (
   // Destructs errors and touched from Formik's context
   <Formik
     initialValues={initialValues}
     onSubmit={ () => {}}
     enableReinitialize
     autoComplete>
      { props =>(
        <Form id='test'  className={className} onSubmit={props.onSubmit}>
          {fields.map((field) => (
            <div key={field.name} style={{ marginBottom: '16px' }}>
              {fieldFactory(field, props)}
            </div>
          ))}
          <Button type="submit" color="primary" >Submit</Button> 
        </Form>)
}
        </Formik>
      )}
    
// Export the ReusableForm component for use in other parts of the application





export default ReusableForm