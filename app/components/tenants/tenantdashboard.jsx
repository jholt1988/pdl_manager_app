import React, { useState } from 'react';
import TenantInfo from './tenantinfo';
import { useSelector } from 'react-redux';
import styles from './tenant.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AddTenantForm from '@/app/components/tenants/addtenantform'

function TenantDashboard() {
  const tenants = useSelector((state) => state.tenants.tenantList);
  const [selectedTenantId, setSelectedTenantId] = useState(Object.keys(tenants)[0]);
  const [hidden, setHidden] =useState(true)
  const [addHidden, setAddHidden] = useState(true)
  const pathname = usePathname()
  console.log(`Dashboard OPEN :${hidden}`)

  const handleClose =  () => {
    setOpen(false)
  }
  const handleTenantChange = (e) => {
    setSelectedTenantId(e.target.value);
    setHidden(false)
  };
  const handleAddTenantClick= (e) => {
        setAddHidden(false)
        
  }

  return (
    <div className={styles.TenantInfo}>
      <Link onClick={handleAddTenantClick}className={`${styles.link} ${pathname === "/" ? styles.active : ""}`} href=''>Add Tenant</Link>

      <h1>Tenant Dashboard</h1>

      <select  onChange={handleTenantChange} value={selectedTenantId}>
        {Object.keys(tenants).map((tenantId) => (
          <option key={tenantId} value={tenantId}>
            {tenants[tenantId].name}
          </option>
        ))}
      </select>
      <TenantInfo hidden={hidden}  onClose={() => handleClose} tenantId={selectedTenantId} />
        <AddTenantForm  hidden={addHidden }/>
    </div>
  );
}

export default TenantDashboard;
