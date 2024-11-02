import React, { useRef } from 'react';
import { Modal as MuiModal,  Box } from '@mui/material';
import styles from  './modal.module.css'

export default function Modal (props) {

    return (
        
            <MuiModal 
              className={styles.modal}
              open={props.open}
              onClose={props.handleClose}
              aria-labelledby={props.title}
              aria-describedby={props.description}>
                <div className={styles.modalcontent}>
                {props.children}
                </div>
              

              </MuiModal>
        
    )
}