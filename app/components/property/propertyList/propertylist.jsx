import React from 'react';
import ReusableDataGrid from '../../basic/datagrid/ReusableDataGrid';

export default function Propertylist (props) {
    const columns = ['Property', 'Address', 'Units', 'Vacanties']
    const rows = props.properties
    return (
        <>
           <ReusableDataGrid columns={columns} rows={rows}/>
        </>
    )
}