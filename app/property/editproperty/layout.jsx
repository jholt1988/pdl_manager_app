import { Box } from "@mui/material";
import React from "react";
import styles from '@/app/tenant/page.module.css';


export default function layout ({children}){
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

