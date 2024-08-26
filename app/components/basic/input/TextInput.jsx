import React from 'react';
import TextField from '@mui/material/TextField'
import { FormControl ,useFormControl, FormHelperText, FormLabel } from '@mui/material';
import {fieldToTextField, TextFieldProps, } from  'formik-mui'

export default function TextInput (props) {



    return (
      <>
      <label htmlFor={props.label}>{props.label} </label>
           <TextField
          id={props.label}
          name={props.name}
          value={props.value}
          defaultValue={props.name}
          label={props.label}
          type={props.type}/>
         
            
            
         
           
      </>
    )
  }