import React from 'react';
import ReusableForm from '../../components/basic/form/ReusableForm'
import styles from './property.module.css'
export default function AddPropertyForm (props) {
    const fields = [
        {   id:'propertyName',
            name:'property_name',
            value:"",
            label:'Property Name',
            type:'text'
        },
        {   id:'property',
            name:'property',
            value:"",
            label:'Address',
            type:'text'
        },
        {   id:'square_footage',
            name:'square_footage',
            value:"",
            label:'SqFt',
            type:'text'
        },
        {   id:'property_type',
            name:'property_type',
            value:"",
            label:'Property Type',
            type:'text'
        },
        {   id:'units',
            name:'units',
            value:"",
            label:'Units',
            type:'text'
        },
        {
            id:'status',
            name:'status',
            value: " ", 
            className:'select',
            label: "Property Status",
            options:['Fully Occupied', 'Available', 'Under Maintenance']
        }

    ]

    const initialValues = {
        property_name: '', 
        address: '', 
        property_type: '',
        square_footage:'', 
        units: '', 
        status:  ''
    }
    return (
        <>
            <div> Addpropertyform - works </div>
           <ReusableForm  ClassName={styles.propertyForm} fields={fields} initialValues={initialValues} />
        </>
    )
}