import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import ReusableForm from '@/app/components/basic/form/ReusableForm';
import {addTenant} from '../../../lib/features/tenant/tenantSlice'
import styles from '@/app/components/tenants/tenant.module.css';

export default function AddTenantForm (props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState(" ")
    const [phone, setPhone] = useState('')

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
       
                
    ]
          const initalValues = {
            name:name, 
            email:email , 
            phone: phone,
            
          }

    const handleSubmit =  (values) => {
     console.log(name, email, phone)
        dispatch(addTenant({name:values.name, email:values.email, phone:values.phone}))
       setEmail('')
        setName('')
        setPhone('')
        

    }
     

    return (
        <div  className={styles.tenantForm} >  
            
            <h1 >Add New Tenant </h1>
            <ReusableForm handleSubmit={handleSubmit}  initialValues={initalValues} fields={fields}/>

        </div>
    )
}