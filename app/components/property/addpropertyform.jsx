'use client'
import React, {useState} from 'react';
import { useAppDispatch } from '@/lib/hooks';
import {addProperty } from '../../../lib/features/properties/propertiesSlice'
import {useAddNewPropertyMutation} from '@/lib/features/properties/propertyAPI'
import ReusableForm from '../../components/basic/form/ReusableForm'
import styles from './property.module.css'

export default function AddPropertyForm (props) {
    const dispatch = useAppDispatch()
   


   
    
    const handleSubmit =  (values) => {
      const { address, type, size_sqft, total_units } =values
      const parsedSqft = parseInt(size_sqft)
      const parsedUnits = parseInt(total_units)
      dispatch(addProperty({address:address, type:type, size_sqft:parsedSqft, total_units:parsedUnits}))
        console.log(values)
    

     
        // setAddress('')
        // setType('')
        // setSize_Sqft()
        // setTotal_Units()
    }
    
    
    const fields = [
      
        {   id:'address',
            name:'address',
           
            label:'Address',
            type:'text',
           
        },
        {   id:'size_sqft',
            name:'size_sqft',
          
            label:'SqFt',
            type:'text',
         
        },
        {   id:'type',
            name:'type',
            label:'Property Type',
            type:'text', 
           
        },
        {   id:'total_units',
            name:'total_units',
            label:'Units',
            type:'text',
            
        },
        

    ]

   
    return (
        <>
            <div> Addpropertyform - works </div>
           <ReusableForm  ClassName={styles.propertyForm} handleSubmit={handleSubmit} fields={fields}  />
        </>
    )
}