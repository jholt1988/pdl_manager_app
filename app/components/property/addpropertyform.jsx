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
        {   id:'address',
            name:'address',
            value:"",
            label:'Address',
            type:'text'
        },
        {   id:'sqft',
            name:'square_footage',
            value:"",
            label:'SqFt',
            type:'text'
        },
        {   id:'property_type',
            name:'property_type',
            value:"",
            label:'Property',
            type:'text'
        },
        {   id:'units',
            name:'Units',
            value:"",
            label:'Units',
            type:'text'
        },
        {
            id:'status',
            name:'status',
            value: "", 
            className:'select',
            label: "Property Status",
            options:['occupied', 'vacant', 'open unit', 'repair', 'move-out']
        }

    ]

    const initialValues = {
        property_name: props.initialValues.property_name ||'', 
        address:props.initialValues.address || '', 
        property_type: props.initialValues.property_type,
        square_footage:props.initialValues.square_footage ||'', 
        units: props.initialValues.units || '', 
        status: props.initialValues || ''
    }
    return (
        <>
            <div> Addpropertyform - works </div>
           <ReusableForm  ClassName={styles.propertyForm} fields={fields} initialValues={initialValues} />
        </>
    )
}