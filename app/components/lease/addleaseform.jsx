'use client'
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLease } from "@/lib/features/leases/leaseSlice";
import moment from "moment";
import ReusableForm from '../../components/basic/form/ReusableForm'
import styles from '@/app/components/lease/lease.module.css'


export default function AddLeaseForm(){
    const dispatch = useDispatch()
    const selectTenants = useSelector(state => state.tenants.tenantsList)
    const selectProperties = useSelector(state => state.properties.list)
    const [propertyAddress, setPropertyAddress] = useState('')
    const [property, setProperty] = useState({})
    const [unit, setUnit] = useState()
    const [units, setUnits] = useState()
    const [rentAmount, setRentAmount] = useState("")
    const [tenantName, setTenantName] = useState('')
    const  [startDate, setStartDate] = useState(moment(''))
    const  [endDate, setEndDate] = useState(moment(''))
    const  [utilities, setUtilities] = useState([])

useEffect(() => {
 setUnits(property.units)
}, [property])
    const handlePropertyChange = (e) => {
      e.preventDefault()
        setPropertyAddress(e.target.value)
        console.log(propertyAddress)
        return setProperty(selectProperties.find(({property_address}) => property_address === e.target.value))
        
    }
    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    const handleUnitChange = (e)  => {
             setUnit(e.target.value)
    }

    const handleTenantChange =(e) => {
        setTenantName(e.target.value)
    }

    const handleUtilityChange =  (e) => {
        e.preventDefault()
        setUtilities(e.target.value, ...utilities)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newLease =  {
            id: Date.now(), 
            propertyAddress, 
            unit, 
            tenantName, 
            rentAmount: parseFloat(rentAmount), 
            utilities,
            deposit: parseFloat(deposit), 
            petDeposit: parseFloat(petDeposit), 
            startDate, 
            endDate
        }
        dispatch(addLease(newLease))
        setProperty({})
        setPropertyAddress('')
        setTenantName('')
        setUnit()
        setUnits()
        setUtilities([])
        setDeposit('')
        setPetDeposit('')
        setRentAmount('')
        setStartDate('')
        setEndDate('')
    }


const fields = [
    
    {   id:'property_id',
        name:'property_id',
        value: propertyAddress, 
        className:"select", 
        label:'Property',
        type:'text', 
        handleChange: handlePropertyChange,
        options: selectProperties.map(property => property['property_address'])
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
        value: tenantName,
        className:'select',
        label:'Tenants',
        type:'text',
        handleChange:handleTenantChange,
        options: selectTenants.map(tenant => tenant['name'])
    },
    {   id:'total_rent',
        name:'total_rent',
        value: rentAmount,
        label:'Lease Total Rent',
        type:'text'
    },
    {   id:'deposit',
        name:'deposit',
        value:deposit,
        label:'Deposit',
        type:'text'
    },
    {
        id:'pet_deposit',
        name:'pet_depost',
        value: petDeposit, 
        label: "Pet Deposit",
        type: 'text'
    }, 
    {
        id:'lease_start',
        name:'lease_start', 
        className:'date_time',
        value: startDate, 
        label: "Lease Start",
        type: 'date'
    }, 
    {
        id:'lease_end',
        name:'lease_end',
        value:endDate, 
        className:'date_time',
        label: "Lease end",
        type: 'date'
    },{
        id:'utilities',
        name:'utilities',
        value: utilities, 
        className:'check_box',
        label: "Utilties",
        handleChange:handleUtilityChange,
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