'use client'
import React,{useEffect, useRef, useState} from 'react';
import { fetchProperties } from '@/lib/features/properties/propertiesSlice';
import { fetchUnits } from '@/lib/features/units/unitsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import ReusableDataGrid from '../../basic/datagrid/ReusableDataGrid';
import Modal from '@/app/components/basic/modal/modal'
import AddUnitForm from '@/app/components/units/addUnitForm'

export default function Propertylist (props) {
    const ref= useRef()
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [propertyId, setpropertyId] = useState()
     
    const unitFormRef = ref.current
    const handleOpen = () =>{
        // dispatch(fetchUnits(id))
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const handleRowClick = (params) => {
  const id =  setpropertyId(params.row.id)
  console.log(id)
      handleOpen()
    

    }

    useEffect(() => {
        
        dispatch(fetchProperties())
        
    },[fetchProperties])
    const columns = [
        {field:'id' },
        {field:'address'},
        {field:'type'},
        {field:'total_units'},
        {field:'size_sqft'}
    ]

    
    const selectProperties = useAppSelector((state) => state.properties.list)

    const rows = selectProperties
    function getRowID(row){
        return row["id"]
    }
    return (
        <>
           <ReusableDataGrid onRowClick={handleRowClick}   getRowId={getRowID} columns={columns} rows={rows}/>
           <Modal open={open} handleClose={handleClose}  children={<AddUnitForm handleOpen={handleOpen} propertyId={propertyId}/>} />
        </>
    )
}