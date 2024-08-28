'use client'
import React from 'react';
import TenantDashboard from '../components/tenants/tenantdashboard';
import { Paper, Box} from '@mui/material';
import styles from './page.module.css'

const Page = (props) => {
    return (
        <Box className='tenant_container'>
        <Paper>
            
         <TenantDashboard />
         </Paper>
         </Box>
     
    )
}

export default Page
            