'use client'
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addProperty } from '../../../lib/features/properties/propertiesSlice'
import ReusableForm from '../../components/basic/form/ReusableForm'
import styles from './property.module.css'

export default function AddPropertyForm (props) {
    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [type, setType] = useState('')
    const [size_sqft, setSize_Sqft] = useState()
    const [total_units, setTotal_Units] = useState()
    
    const handleSubmit = (values) => {
        console.log(address)
        
        dispatch(addProperty({
            address:address, 
            type:type, 
            size_sqft:size_sqft,
            total_units:total_units
        }))
        // setAddress('')
        // setType('')
        // setSize_Sqft()
        // setTotal_Units()
    }
    
    
    const fields = [
      
        {   id:'address',
            name:'address',
            value:address,
            label:'Address',
            type:'text',
            handleChange: e => setAddress(e.target.value)
        },
        {   id:'size_sqft',
            name:'size_sqft',
            value:size_sqft,
            label:'SqFt',
            type:'text',
            handleChange: e => setSize_Sqft(e.target.value)
        },
        {   id:'type',
            name:'type',
            value:type,
            label:'Property Type',
            type:'text', 
            handleChange: e => setType(e.target.value)
        },
        {   id:'total_units',
            name:'total_units',
            value:total_units,
            label:'Units',
            type:'text',
            handleChange: e => setTotal_Units(e.target.value)
        },
        

    ]

   
    return (
        <>
            <div> Addpropertyform - works </div>
           <ReusableForm  ClassName={styles.propertyForm} handleSubmit={handleSubmit} fields={fields}  />
        </>
    )
}