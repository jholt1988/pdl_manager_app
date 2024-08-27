import React from 'react';
import Button from '@mui/material/Button'

export default function BasicButton (props) {
    return (
        <>
            <Button className={props.className}  variant="text" color="primary" type={props.type} onSubmit={() => props.onSubmit} >
              
            </Button>
        </>
    )
}