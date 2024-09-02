'use client'
import React,{useState} from 'react';
import TenantDashboard from '../components/tenants/tenantdashboard';
import { Box } from '@mui/material';
import styles from './page.module.css'
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const Page = (props) => {
    const pathname = usePathname()
    const {params} = props
    const selectedTenant = useSelector(state => state.tenants.selectedTenant)
  

    
    return (
        <Box>
            <TenantDashboard />
         </Box>
     
    )
}

export default Page
            