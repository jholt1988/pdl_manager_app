import { Box } from "@mui/material";
import React from "react";
import Tenantnav from '@/app/components/tenants/tenantnav'
import styles from '@/app/tenant/page.module.css'

export default function layout ({children}){
    return(
        <>
        <header className={styles.container}>
            <Tenantnav />
        </header>
        <main>
        <Box>
           {children}
        </Box>
        </main>
        </>
    )
}

