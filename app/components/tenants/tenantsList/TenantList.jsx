import React from "react";
import ReusableDataGrid from "../../basic/datagrid/ReusableDataGrid";

export default function TenantList (props){
    const columns = ['Name', 'Phone', 'Email', 'Property', 'Lease Start', 'Lease End','Monthy Rent', 'Balance' ]
    const rows = props.tenants

    return(
    <ReusableDataGrid rows={rows} columns={columns} />
    )
}