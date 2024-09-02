'use client'
import React, {useState} from 'react';
import EditTenantForm from '../../components/tenants/edittenantform';
import {useSelector, useDispatch} from 'react-redux'
import { findTenant, selectTenant , selectAllTenants} from '@/lib/features/tenant/tenantSlice';


export default function page (props) {
  const tenants = useSelector((state) => state.tenants.tenantList)
  const selectedTenant = useSelector((state) => state.tenants.selectedTenant)
  const [tenant, setTenant] = useState(selectedTenant)
  const [selectedTenantId, setSelectedTenantId] = useState();
    
    const dispatch = useDispatch()
const handleTenantChange =  (e) => {
  setSelectedTenantId(e.target.value)
 dispatch(findTenant(e.target.value))
 
}


console.log(tenant)
    return (
        <>
        <div>
      <select  onChange={handleTenantChange} value={selectedTenantId}>
        {Object.values(tenants).map((tenant) => (
          
          <option key={tenant.id} value={tenant.id}>
            {tenant.name} 
          </option>
        ))}
      </select>
      </div>
           <EditTenantForm />
        </>
    )
}