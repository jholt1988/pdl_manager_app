'use client'
import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import PropertyInfo from "../../components/property/propertyinfo";
import {findProperty} from "../../../lib/features/properties/propertiesSlice"
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'


export default function PropertyInfoPage (){
   const [propertyId, setPropertyId]= useState("");
   const selectPropertyList = useSelector(state => state.properties.list);
   const dispatch = useDispatch();
   const handlePropertyChange = (e) => {
    setPropertyId(e.target.value)
    dispatch(findProperty(e.target.value))
   }
   console.log(propertyId)
   
    return(
       <>
       <div>
        <TextField
          id="propertySelect"
          label="Select Property"
          select
          value={propertyId}
          onChange={handlePropertyChange}
          
        >
            {selectPropertyList.map(opt => (
            <MenuItem key={opt.property_id} value={opt.property_id}>{opt.property_name}</MenuItem>
 )
)}
        </TextField>
       </div>

       <PropertyInfo propertyId={propertyId} />
       
       </>
    )
}