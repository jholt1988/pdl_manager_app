import React from "react";
import PropertyDashboard from '../components/property/propertyDashboard'
import { Box } from "@mui/material";
import  styles from '@/app/tenant/page.module.css'

export default function PropertyPage(){
    return (
        <>
        <Box>
            <PropertyDashboard  />
        </Box>
        </>
    )
}