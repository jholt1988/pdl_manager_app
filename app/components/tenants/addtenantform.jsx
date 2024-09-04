import React from 'react';
import ReusableForm from '@/app/components/basic/form/ReusableForm';
import moment from 'moment';
import styles from '@/app/components/tenants/tenant.module.css'

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
                className:"date_time",
             
                label: "Lease Start Date"
            },
            {
                id:"leaseEnd", 
                name: 'leaseEnd', 
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
        <div  className={styles.tenantForm} hidden={props.hidden}>  
            
            <h1 >Add New Tenant </h1>
            <ReusableForm  className={styles.tenantForm}  initialValues={initalValues} fields={fields}/>

        </div>
    )
}