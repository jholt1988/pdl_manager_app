import React from 'react';
import { Modal as MuiModal,  Box } from '@mui/material';

export default function Modal (props) {
    return (
        <>
            <MuiModal 
              open={props.open}
              onClose={props.handleClose}
              aria-labelledby={props.title}
              aria-describedby={props.description}>
                <Box>
                {props.children}
                </Box>

              </MuiModal>
        </>
    )
}