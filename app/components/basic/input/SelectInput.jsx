import React from 'react';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

export default function SelectInput (props) {
    const{options} = props

   const selectOptions= options.map(opt => (
        <MenuItem key={opt.value} value={opt.value}></MenuItem>
    ))
    return (
        <>
           <TextField
             id={props.id}
             label={props.label}
             select
             value={props.value}
             onChange={props.handleChange}
             children={selectOptions}
           />
        </>
    )
}