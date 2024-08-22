import React from 'react';
import TextField from '@mui/material/TextField'

export default function TextInput (props) {
    return (
        <>
           <TextField
             id={props.id}
             label={props.label}
             value={props.value}
             onChange={props.handleChange}
             variant='filled'
             className={props.className}
             
           />
        </>
    )
}