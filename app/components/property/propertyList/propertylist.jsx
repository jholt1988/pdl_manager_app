'use client'
import React,{useEffect} from 'react';
import {useSelector} from 'react-redux'
import { fetchProperties } from '@/lib/features/properties/propertiesSlice';
import { useAppDispatch } from '@/lib/hooks';
import ReusableDataGrid from '../../basic/datagrid/ReusableDataGrid';

export default function Propertylist (props) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProperties())
    },[])
    const columns = [
        {field:'id' },
        {field:'address'},
        {field:'type'},
        {field:'total_units'},
        {field:'size_sqft'}
    ]




    const selectProperties = useSelector(state => state.properties.list)
    const rows = selectProperties
    function getRowID(row){
        return row['id']
    }
    return (
        <>
           <ReusableDataGrid  getRowId={getRowID}columns={columns} rows={rows}/>
        </>
    )
}