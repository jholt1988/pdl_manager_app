import React from "react";
import LeaseDashboard from '../components/lease/leasedashboard'
import AddLeaseForm from "../components/lease/addleaseform";
import { Box } from "@mui/material";
import  styles from '@/app/tenant/page.module.css'
import Leaselist from "../components/leaseList/leaselist";

export default function PropertyPage(){
    return (
        <>
        <Box>
            <LeaseDashboard  />
            <AddLeaseForm />
            <Leaselist />
        </Box>
        </>
    )
}