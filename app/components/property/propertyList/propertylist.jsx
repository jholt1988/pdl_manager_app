'use client'
import React from 'react';
import {useSelector} from 'react-redux'
import ReusableDataGrid from '../../basic/datagrid/ReusableDataGrid';

export default function Propertylist (props) {
    const columns = [
        {field:'property_id' },
        {field:'property_name'},
        {field:'address'},
        {field:'property_type'},
        {field:'units'},
        {field:'status'},
        {field:'square_footage'}
    ]




    const selectProperties = useSelector(state => state.properties)
    const rows = selectProperties
    function getRowID(row){
        return row['property_id']
    }
    return (
        <>
           <ReusableDataGrid  getRowId={getRowID}columns={columns} rows={rows}/>
        </>
    )
}