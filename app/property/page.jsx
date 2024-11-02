import React from "react";
import PropertyDashboard from '../components/property/propertyDashboard';
import   { Box } from "@mui/material";
import Propertylist from "../components/property/propertyList/propertylist";

export default function PropertyPage(){
    return (
    
        <Box>
            <PropertyDashboard  />
           
            <Propertylist />
        </Box>
    
    )
}