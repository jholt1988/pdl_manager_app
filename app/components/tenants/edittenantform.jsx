import React from 'react';
import ReusableForm from '../../components/basic/form/ReusableForm';
import { useSelector } from 'react-redux';
import  styles from '@/app/components/tenants/tenant.module.css'


export default function EditTenantForm (props) {
    const tenant = useSelector((state) => state.tenants.selectedTenant)
    const fields = [
        {
        id:"name", 
        name: 'name', 
        type: 'text',
        value: "", 
        label:'Name'}, 
        {
            id:"email", 
            name: 'email', 
            type: 'Email',
            value: "", 
            label:'Email', 
        }, 
        {
            id:"phone", 
            name: 'phone', 
            type: 'tel',
            label: "Phone Number",
            value: "", 
        },
        {
                id:"unit", 
                name: 'unit', 
                type: 'text',
                value: "", 
                label: "Unit"
            },{
                id:"balance", 
                name: 'ledgerBalanace', 
                type: 'text',
                label: "Ledger Balance", 
                value: "", 
            }, 
            {
                id:"leaseStart", 
                name: 'leaseStartDate', 
                type: 'date',
                value: '',
                className:"date_time",
                label: "Lease Start Date"
            },
            {
                id:"leaseEnd", 
                name: 'leaseEndDate', 
                type: 'date',
                value:'',
                className:"date_time",
                
                label: "Lease End Date"
            },
            {
                id:"employer", 
                name: 'employer', 
                type: 'text',
                value: "",
                label: "Employer"
            },
            {
                id:"driverLicense", 
                name: 'driversLicense', 
                type: 'text',
                value: "",
                label: "Driver License Number"
        }, 
        {
            id:'ledger', 
            name:'ledger', 
            type:'text', 
            value:"", 
            label:'Ledger'
        }
    ]

console.log(tenant)
const initialValues={}

for(const [key, value] of Object.entries(tenant)){
    initialValues[key] = value
    console.log(key, value)
    
}

console.log(initialValues)


    return (
        <>
        <h2>Edit Tenant Info</h2>
            <ReusableForm fields={fields} initialValues={initialValues} className={styles.tenantForm} />
        </>
    )
}