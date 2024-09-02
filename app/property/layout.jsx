import { Box } from "@mui/material";
import React from "react";
import PropertyNav from '@/app/components/property/propertynav'
import  styles from '@/app/tenant/page.module.css'


export default function layout ({children}){
    return(
        <>
        
        <header className={styles.container}>
            <PropertyNav />
        </header>
        <main>
        <Box>
           {children}
        </Box>
        </main>
        
        </>
    )
}

