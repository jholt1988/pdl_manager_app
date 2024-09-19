'use client'
import React,{useState} from 'react';
import TenantList from '@/app/components/tenants/tenantsList/TenantList';
import TenantDashboard from '../components/tenants/tenantdashboard';
import AddTenantForm from '../components/tenants/addtenantform';
import { Box } from '@mui/material';


const TenantPage = (props) => {
    
  

    
    return (
        <Box>
            <h1>Manage Tenants</h1>
            <TenantDashboard />
            <AddTenantForm />
            <TenantList />
         </Box>
     
    )
}

export default TenantPage
            