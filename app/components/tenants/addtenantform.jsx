import React from 'react';
import ReusableForm from '../basic/form/ReusableForm';
import moment from 'moment';

export default function AddTenantForm (props) {
     const fields = [
        {
        id:"name", 
        name: 'Name', 
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
                name: 'Unit', 
                type: 'text',
                value: "", 
                label: "Unit"
            },{
                id:"balance", 
                name: 'balanace', 
                type: 'text',
                label: "Ledger Balance", 
                value: "", 
            }, 
            {
                id:"leaseStart", 
                name: 'leaseStart', 
                type: 'date',
                value: '',
             
                label: "Lease Start Date"
            },
            {
                id:"leaseEnd", 
                name: 'leaseEnd', 
                type: 'date',
                value:'',
                
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
                
    ]
          const initalValues = {
            name:'', 
            email:'', 
            phone: '',
            employer:'', 
            leaseStart: moment.utc(),
            leaseEnd: moment.utc(), 
            unit:"", 
            driversLicense:""
          }

              
     

    return (
        <>
            
            <h1 hidden={props.hidden}>Add New Tenant </h1>
            <ReusableForm  initialValues={initalValues} fields={fields}/>

        </>
    )
}