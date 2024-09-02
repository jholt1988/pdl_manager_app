'use client'
import React from 'react';
import AddTenantForm from '../../components/tenants/addtenantform'
import { Paper } from '@mui/material';


export default function Page (props) {
    return (
        <Paper>
          <AddTenantForm />  
        </Paper>
    )
}