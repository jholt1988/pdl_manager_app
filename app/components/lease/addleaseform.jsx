'use client'
import React, {useEffect, useState, useRef} from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addLease } from "@/lib/features/leases/leaseSlice";
import { fetchUnits } from "@/lib/features/units/unitsSlice";
import moment from "moment";
import ReusableForm from '../../components/basic/form/ReusableForm'
import styles from '@/app/components/lease/lease.module.css'
import { fetchTenants } from "@/lib/features/tenant/tenantSlice";
import { fetchProperties } from "@/lib/features/properties/propertiesSlice";


export default function AddLeaseForm(){
    const dispatch = useAppDispatch()
    const selectTenants = useAppSelector(state => state.tenants.tenantList)
    const selectProperties = useAppSelector(state => state.properties.list)
    const selectUnits = useAppSelector(state => state.units.list)
    const propertyAddressRef = useRef()
    const propertyIdRef = useRef()
     const [propertyAddress, setPropertyAddress] = useState('')
    const [property, setProperty] = useState({})
    // const [propertyId, setPropertyId] = useState()
    const [unit, setUnit] = useState()
    const [units, setUnits] = useState([])
    const [rentAmount, setRentAmount] = useState("")
    const [tenantName, setTenantName] = useState('')
    const  [startDate, setStartDate] = useState()
    const  [endDate, setEndDate] = useState()
    const  [utilities, setUtilities] = useState([])
    const [deposit, setDeposit] = useState()
    const [petDeposit, setPetDeposit] = useState()
     
        useEffect(() => {
            dispatch(fetchTenants())
            dispatch(fetchProperties())
            
        },[])
    
    

    const propertySetter = (propAddress) => {
        const selectedProperty = selectProperties.find(({address}) => address === propAddress)
         return setProperty(selectedProperty)
    }

    // const propertyIdSetter = () => {
    //     return setPropertyId(property.id)
    // }
    // const dispatchFetchUnits = () => {
    //    return dispatch(fetchUnits(propertyId))
    // }

    // const setUnitsChange = () => {
    
    //     dispatch(fetchUnits(propertyId))-
    //     setUnits(selectUnits)
    //     return units
    // }
    const handlePropertyChange = (e) => {
        
        setPropertyAddress(e.target.value)
        propertySetter(e.target.value)
        console.log(property)
        dispatch(fetchUnits(property.id))
        // console.log(e.target.id, e.currentTarget.id)
   



        
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
        setUtilities([e.target.value, ...utilities])
    }

    const handleSubmit = (e) => {
      const leaseTenant = selectTenants.find(({name}) => name === tenantName)
      const leaseUnit = selectUnits.find(({unit_number}) => unit_number === unit)
      console.log(leaseUnit)
        const newLease =  {
            id: Date.now(), 
            unit_id: parseInt(leaseUnit.id), 
            tenant_id: parseInt(leaseTenant.id), 
            rent_amount: parseFloat(rentAmount), 
            utilities: utilities,
            deposit: parseFloat(deposit), 
         pet_deposit: parseFloat(petDeposit), 
            property_address: property.address,
           start_date: moment(startDate), 
            end_date: moment(endDate)
        }
        console.log(newLease)
        dispatch(addLease(newLease))
        setProperty({})
         setPropertyAddress('')
        setTenantName('')
        setUnit()
        setUnits()
        setUtilities([])
        setDeposit(0)
        setPetDeposit(0)
        setRentAmount(0)
        setStartDate('')
        setEndDate('')
    }


const fields = [
    
    {   id:'property_id',
        name:'property_id',
        ref:propertyIdRef,
        value:propertyAddress,
        className:"select", 
        label:'Property',
        type:'text', 
        handleChange: handlePropertyChange,
        options: selectProperties.map(property => ({name:property.address, id:property.id}))
    },

    {   id:'unit',
        name:'unit',
        value:unit,
        className:'select', 
        label:'Unit',
        type:'text',
        handleChange: handleUnitChange,
        options: selectUnits.map(unit => ({name:unit.unit_number, id:unit.id}))
    },
    {   id:'tenants',
        name:'tenants',
        value: tenantName,
        className:'select',
        label:'Tenants',
        type:'text',
        handleChange:handleTenantChange,
        options: selectTenants.map(tenant => ({name:tenant['name'], id:tenant.name}))
    },
    {   id:'total_rent',
        name:'total_rent',
        value: rentAmount,
        label:'Lease Total Rent',
        handleChange: e => setRentAmount(e.target.value),
        type:'text'
    },
    {   id:'deposit',
        name:'deposit',
        label:'Deposit',
        value: deposit,
        handleChange: e =>  setDeposit(e.target.value),
        type:'text'
    },
    {
        id:'pet_deposit',
        name:'pet_depost',
        value: petDeposit,
        handleChange: e => setPetDeposit(e.target.value),
        label: "Pet Deposit",
        type: 'text'
    }, 
    {
        id:'lease_start',
        name:'lease_start', 
        className:'date_time',
        value: startDate,
         handleChange: e => setStartDate(e.target.value),
        label: "Lease Start",
        type: 'date'
    }, 
    {
        id:'lease_end',
        name:'lease_end',
        handleChange: e => setEndDate(e.target.value),
        value: endDate,
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
    <div className={styles.leaseContainer}>
        <div> Add New Lease </div>
       <ReusableForm  ClassName={styles.leaseForm} handleSubmit={handleSubmit} fields={fields} />
    </div>
)
}