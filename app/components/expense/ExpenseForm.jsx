'use client'
import React, { useState, useEffect } from "react";
import ReusableForm from '../../components/basic/form/ReusableForm.jsx'
import { useSelector } from "react-redux";




function  ExpenseForm () {
const selectProperties = useSelector(state => state.properties)
const [propertyName, setPropertyName] = useState('')
const [property, setProperty] = useState({});
const [units, setUnits] = useState([]);
const [unit, setUnit] = useState();


const handlePropertyChange = (e) => {
    e.preventDefault()
    setPropertyName(e.target.value)
    return setProperty(selectProperties.find(({property_name}) => property_name === e.target.value))

}


useEffect(() => {
    setUnits(property.units)
   }, [property])

const handleUnitChange = (e) => {
    setUnit(e.target.value)
}
const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);


const fields = [
    {
        id:'description', 
        name:'expense_description', 
        label:'Description', 
        type:"text"

    }, 
    {
        id:'expense_amount', 
        name:'expense_amount', 
        label:"Amount",
        type: 'text'
    }, 
    {
        id:'property', 
        name:'property',
        label: 'Property', 
        className:'select', 
        value: propertyName, 
        handleChange:handlePropertyChange, 
        options: selectProperties.map(property => property['property_name'])
    },
    {
        id:'units' ,
        name: 'units', 
        label:'units', 
        className:'select',
        value:unit,
        options: range(0, units, 1),
        handleChange:handleUnitChange

    }, 
    {
        id:'expense_date',
        name:"expense_date", 
        className:'date_time',
    }

]

const initialValues={
    description:'',
    expense_amount:'', 
    property:'', 
    unit: 0,
    expense_date: ''
}


return (


    <ReusableForm initialValues={initialValues} fields={fields} />
)

}

export default  ExpenseForm