import React from 'react';
import { Box } from '@mui/material';
import styles from '../../app/styles/layout.module.css';

export default function ({children}){
    return(
        <>
        
        <header className={styles.container}>
           
        </header>
        <main>
        <Box>
           {children}
        </Box>
        </main>
        
        </>
    )
}