'use client'
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLease } from "@/lib/features/leases/leaseSlice";
import ReusableForm from '../../components/basic/form/ReusableForm'
import styles from '@/app/components/lease/lease.module.css'

export default function AddLeaseForm(){
    const dispatch = useDispatch()
    const selectTenants = useSelector(state => state.tenants)
    const selectProperties = useSelector(state => state.properties)
    const [propertyName, setPropertyName] = useState('')
    const [property, setProperty] = useState({})
    const [unit, setUnit] = useState()
    const [units, setUnits] = useState()
    const [tenant, setTenant] = useState('')
    const [leaseID, setLeaseId] = useState('')

useEffect(() => {
 setUnits(property.units)
}, [property])
    const handlePropertyChange = (e) => {
      e.preventDefault()
        setPropertyName(e.target.value)
        console.log(propertyName)
        return setProperty(selectProperties.find(({property_name}) => property_name === e.target.value))
        
    }
    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    const handleUnitChange = (e)  => {
             setUnit(e.target.value)
    }

    const handleTenantChange =(e) => {
        setTenant(e.target.value)
    }


    const handleSubmit = (e, values) => {
        dispatch(addLease(values))
        setProperty('')
        setPropertyName('')
        setTenant('')
        setUnit()
        setUnits()
    }


const fields = [
    {   id:'leaseid',
        name:'lease_id',
        value:"",
        label:'Lease ID',
        type:'text'
    },
    {   id:'property_id',
        name:'property_id',
        value: propertyName, 
        className:"select", 
        label:'Property',
        type:'text', 
        handleChange: handlePropertyChange,
        options: selectProperties.map(property => property['property_name'])
    },

    {   id:'unit',
        name:'unit',
        value:unit,
        className:'select', 
        label:'Unit',
        type:'text',
        handleChange: handleUnitChange,
        options: range(0, units, 1)
    },
    {   id:'tenants',
        name:'tenants',
        value: tenant,
        className:'select',
        label:'Tenants',
        type:'text',
        handleChange:handleTenantChange,
        options: selectTenants.map(tenant => tenant['name'])
    },
    {   id:'total_rent',
        name:'total_rent',
        value:"",
        label:'Lease Total Rent',
        type:'text'
    },
    {   id:'deposit',
        name:'deposit',
        value:"",
        label:'Deposit',
        type:'text'
    },
    {
        id:'pet_deposit',
        name:'pet_depost',
        value: " ", 
        label: "Pet Deposit",
        type: 'text'
    }, 
    {
        id:'lease_start',
        name:'lease_start', 
        className:'date_time',
        label: "Lease Start",
        type: 'date'
    }, 
    {
        id:'lease_end',
        name:'lease_end',
        className:'date_time',
        label: "Lease end",
        type: 'date'
    },{
        id:'utilities',
        name:'utilities',
        value: " ", 
        className:'check_box',
        label: "Utilties",
        type: 'text',
        options:['Trash', 'Water', 'Gas', 'Electric' ]
    }


    

]

const initialValues = {
    lease_id: '', 
    unit:0 , 
    tenants:"", 
    property_id:'',

    total_rent:'', 
    deposit: '', 
    pet_deposit:  '', 
    lease_start:'', 
    lease_end:'', 
    utilities:[]
}
return (
    <>
        <div> Add New Lease </div>
       <ReusableForm  ClassName={styles.leaseForm} handleSubmit={handleSubmit} fields={fields} initialValues={initialValues} />
    </>
)
}