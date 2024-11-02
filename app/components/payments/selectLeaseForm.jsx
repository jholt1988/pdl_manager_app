'use client'
import React, { useEffect, useState } from "react";
import {useAppSelector, useAppDispatch} from '../../../lib/hooks'
import{fetchLeases} from '../../../lib/features/leases/leaseSlice'
import { Select, MenuItem, Form, Button} from "@mui/material";
import {useRouter} from 'next/navigation'
import ReusableForm from "../basic/form/ReusableForm";


 const SelectLeaseForm = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
const [leaseId, setLeaseId] = useState()
    
    const selectLeases = useAppSelector((state) => state.leases.leases)
    

    const options = selectLeases.map((lease) =>({property_address: lease.property_address, unit_number: lease.unit, id:lease.id}))

    useEffect(() => {
       dispatch(fetchLeases())
    }, [options, dispatch],)

    const handleSubmit = (e) => {
        
        router.push(`/payment/${leaseId}`)
    }

 
    

    const fields = [
        {   id:'leases',
            name:'leases',
            value: leaseId,
            className:'select',
            label:'lease',
            type:'text',
            isId:true,
            handleChange:e => setLeaseId(e.target.value),
            options: options.map(option => (
                { name:`${option.property_address} ${option.id}`, id:option.id}))
        },
    ]

    return ( 
        <>
        <ReusableForm fields={fields} handleSubmit={handleSubmit} />
        </>
    )
}

export default SelectLeaseForm