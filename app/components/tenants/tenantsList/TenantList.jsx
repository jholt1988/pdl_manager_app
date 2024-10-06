'use client'
import React, { useEffect } from "react";
import {useSelector} from  'react-redux'
import ReusableDataGrid from "../../basic/datagrid/ReusableDataGrid";
import { fetchTenants } from "@/lib/features/tenant/tenantSlice";
import { useDispatch } from "react-redux";


export default function TenantList (props){
    const dispatch = useDispatch();
    const columns =[
        {field:"name"},{field:"phone"}, {field:"email"}
    ]
   
  

    useEffect(() => {
        dispatch(fetchTenants)
      },[dispatch]);

      const selectTenants = useSelector((state) => state.tenants.TenantList)
    const rows = selectTenants

    return(
    <ReusableDataGrid rows={rows} columns={columns} />
    )
}