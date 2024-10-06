'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import ReusableForm from '@/app/components/basic/form/ReusableForm';
import {addTenant} from '../../../lib/features/tenant/tenantSlice'
import styles from '@/app/components/tenants/tenant.module.css';
import { useAddNewTenantMutation } from '@/lib/features/tenant/tenantAPI';
import moment from 'moment';

export default  function AddTenantForm (props) {
  const dispatch = useDispatch()
    
    

     const fields = [
        {
        id:"name", 
        name: 'name', 
        type: 'text',
        label:'Name', 
       onChange:  (e) => setName(e.target.value)
    }, 
        {
            id:"email", 
            name: 'email', 
            type: 'text',
            label:'Email', 
            onChange: (e) => setEmail(e.target.value)
        }, 
        {
            id:"phone", 
            name: 'phone', 
            type: 'text',
            label: "Phone Number",
            onChange: (e) => setPhone(e.target.value)
        },
        {
            id:"dob", 
            name: 'dob', 
            value:moment(''),
            className:'date_time',
            label: "Date of Birth",
           
        },
                
    ]
          const initalValues = {
            name:"", 
            email:"" , 
            phone: "",
            dob:moment(" ")
            
          }

           const [createTenant, isLoading, error] = useAddNewTenantMutation()

    const handleSubmit = async (values) => {
        const {name, email, phone, dob} = values
      await  createTenant({name, contact:{email,phone}, dob}).unwrap()
  
      dispatch(addTenant({name, contact:{email, phone}, dob}))
    
        console.log(values)

       
        
        
       
        

    }
     

    return (
        <div  className={styles.tenantForm} >  
            
            <h1 >Add New Tenant </h1>
            <ReusableForm  action={handleSubmit} id={'Add_New_Tenant'}handleSubmit={handleSubmit}  initialValues={initalValues} fields={fields}/>

        </div>
    )
}