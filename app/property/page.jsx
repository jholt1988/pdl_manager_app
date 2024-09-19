import React from "react";
import PropertyDashboard from '../components/property/propertyDashboard'
import AddpropertyForm from '../components/property/addpropertyform'
import { Box } from "@mui/material";
import  styles from '@/app/tenant/page.module.css'
import Propertylist from "../components/property/propertyList/propertylist";

export default function PropertyPage(){
    return (
        <>
        <Box>
            <PropertyDashboard  />
            <AddpropertyForm />
            <Propertylist />
        </Box>
        </>
    )
}