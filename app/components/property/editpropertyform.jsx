'use client'
import React,{useState} from "react";
import AddPropertyForm from './addpropertyform';
import {findProperty} from '../../../lib/features/properties/propertiesSlice'
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select } from "@mui/material";

export default function EditPropertyForm(props){
    const dispatch = useDispatch();
    const [propertyId, setPropertyId] = useState('');
    const selectPropertiesList = useSelector(state => state.properties.list);
    const selectSelectedProperty = useSelector(state => state.properties.selectedProperty)

    const handleChange = (e) => {
        setPropertyId(e.target.value)
        dispatch(findProperty(e.target.value))
    }


    const PropertySelect = () => (
       <>
       <Select onChange={handleChange}>
        {selectPropertiesList.map((property) => (
            <MenuItem key={property.property_id}  value={property.property_id}>{property.property_name}</MenuItem>
        ))}

        </Select>
        </>
    )

    const initialValues = {}

    for(const [key, value] of Object.entries(selectSelectedProperty)){
        initialValues[key] = value
        console.log(key, value)
        
    }
    

    return(
        <>
        <PropertySelect />
        <AddPropertyForm initialValues={initialValues} />
        </>
    )
}