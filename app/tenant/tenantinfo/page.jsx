'use client'
import React,{useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import TenantInfo from "@/app/components/tenants/tenantinfo";
import { findTenant } from '@/lib/features/tenant/tenantSlice';
import styles from '@/app/components/tenants/tenant.module.css'

export default function Page(props){
const tenants = useSelector((state) => state.tenants.tenantList);
  const [selectedTenantId, setSelectedTenantId] = useState();
  const [hidden, setHidden] =useState(true)
  const [addHidden, setAddHidden] = useState(true)
  const dispatch = useDispatch()

  const handleTenantChange = (e) => {
    setSelectedTenantId(e.target.value);
    dispatch(findTenant(e.target.value ))
    
    setHidden(false)
    setAddHidden(true)
  };
  return(
    <>
    <div className={styles.TenantInfo} >
    <select  onChange={handleTenantChange} value={selectedTenantId}>
        {Object.keys(tenants).map((tenantId) => (
          <option key={tenantId} value={tenantId}>
            {tenants[tenantId].name}
          </option>
        ))}
      </select>
      </div>
      <TenantInfo className={styles.tenantInfo} hidden={hidden}  onClose={() => handleClose} tenantId={selectedTenantId} />
      </>


    )}