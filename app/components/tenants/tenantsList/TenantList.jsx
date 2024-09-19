'use client'
import React from "react";
import {useSelector} from  'react-redux'
import ReusableDataGrid from "../../basic/datagrid/ReusableDataGrid";

export default function TenantList (props){
    const columns =[
        {field:"name"},{field:"phone"}, {field:"email"}
    ]
;
    const selectTenants = useSelector((state) => state.tenants)
    const rows = selectTenants

    return(
    <ReusableDataGrid rows={rows} columns={columns} />
    )
}