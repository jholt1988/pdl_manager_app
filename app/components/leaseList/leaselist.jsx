import React from 'react';
import ReusableDataGrid from '../basic/datagrid/ReusableDataGrid';

export default function Leaselist (props) {
  const columns = ['Id', 'Tenants', 'Term', 'Unit','Start',' Date', 'End Date', 'Paid Utilities', 'Pets', 'Deposit' ]
  

    return (
        <>
           <ReusableDataGrid columns={columns} rows={props.rows} />
        </>
    )
}