'use client'
import React, { useEffect } from "react";
import {useSelector} from  'react-redux'
import ReusableDataGrid from "../../basic/datagrid/ReusableDataGrid";
import { fetchTenants } from "@/lib/features/tenant/tenantSlice";
import { useDispatch } from "react-redux";
import {useGetAllTenantsQuery} from '@/lib/features/tenant/tenantAPI'


export default function TenantList (props){
    const dispatch = useDispatch();
    const columns =[
       {field:'id'},{field:"name"},{field:"contact"}, {field:"dob"}
    ]
       
 
    useEffect(() => {
        dispatch(fetchTenants())
      },[]);

      const selectTenants = useSelector((state) => state.tenants.tenantList)
    const rows = selectTenants

    return(
    <ReusableDataGrid rows={rows} columns={columns} />
    )
}