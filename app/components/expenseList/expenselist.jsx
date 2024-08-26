import React from 'react';
import ReusableDataGrid from '../basic/datagrid/ReusableDataGrid';

export default function Expenselist (props) {
    const columns = ['Id', 'Amount', 'Type', 'Unit', 'Vendor', 'Paid Date', 'Payment Type', 'Check No.', 'Work Order No.']
    const rows = props.rows
    return (
        <>
            <ReusableDataGrid columns={columns} rows={rows} />
        </>
    )
}