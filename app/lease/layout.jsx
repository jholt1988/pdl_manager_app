import { Box } from "@mui/material";
import React from "react";
import LeaseNav from '@/app/components/lease/leaseNav'
import  styles from '@/app/tenant/page.module.css'


export default function layout ({children}){
    return(
        <>
        
        <header className={styles.container}>
            <LeaseNav />
        </header>
        <main>
        <Box>
           {children}
        </Box>
        </main>
        
        </>
    )
}