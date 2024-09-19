'use client'
// ReusableForm.jsx
// This component is a reusable form using Formik for form management and validation.

// Import necessary libraries and components
import React, {useState} from 'react';
import { Formik, Form, Field, useFormik, withFormik } from 'formik'; // Formik for form state management
import * as Yup from 'yup'; // Yup for schema validation
import { Button } from '@mui/material';
import moment from 'moment';
import { TextField, InputLabel, MenuItem, Select, Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel} from '@mui/material'
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
          name={field.name}
          type={field.type || 'text'}  // Sets the name for the field
          label={field.label} // Sets the label for the field
          fullwidth // Makes the input full width
          value={moment(props.values[field.name])}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          error={props.touched[field.name] && Boolean(props.errors[field.name])}
          helperText={props.touched[field.name] && props.errors[field.name]}
          slotProps={{
           inputLabel:{
             shrink:true
           },
           textField:{
            helperText:'MM/DD/YYYY'
           }
          }}
          
       /> );
       case "select":
        return(
          <FormControl>
          <InputLabel id={`${field.label}_label_id`}>{field.label}</InputLabel>
          <Select
            labelId={`${field.label}_label_id`}
            value={field.value}
            onChange={field.handleChange}
            onBlur={props.handleBlur}
            name={field.name}
            error={props.touched[field.name] && Boolean(props.errors[field.name])}
            helperText={props.touched[field.name] && props.errors[field.name]}>
              {field.options.map(option => (
                <MenuItem  key={`${option}`} value={`${option}`}>{`${option}`}</MenuItem>
              ))}
            </Select>
            </FormControl>
        );
        case 'check_box':
          return(
           <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component='legend'>{field.label}</FormLabel>
            <FormGroup>
            {field.options.map(option => (
              <FormControlLabel key={`checkbox-${option}`}control={
              <Checkbox id={field.name} name={field.name} value={`${option}`} /> 
            } label={`${option}`} 
            /> 
            ))}
            </FormGroup>
          </FormControl>
          );
        default: 
        return(               
           <TextField  
          id={field.name} // Uses custom TextInput component for each field
          name={field.name} // Sets the name for the field
          label={field.label } // Sets the label for the field
          type={field.type || 'text'} // Sets the type of the field, defaulting to 'text'
          fullwidth // Makes the input full width
          value={props.values[field.name]}
          onChange={field.onChange}
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
     onSubmit={(values) => handleSubmit(values)} 
     enableReinitialize
     autoComplete>
      { props =>(
        <Form id='test'  className={className} >
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