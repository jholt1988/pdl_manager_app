import React, { useState } from 'react';
import TenantInfo from './tenantModal';
import { useSelector } from 'react-redux';
import '../../components/tenants/tenant.module.css'

function TenantDashboard() {
  const tenants = useSelector((state) => state.tenants.tenantList);
  const [selectedTenantId, setSelectedTenantId] = useState(Object.keys(tenants)[0]);
  const [open, setOpen] =useState(false)
  console.log(`Dashboard OPEN :${open}`)

  const handleClose =  () => {
    setOpen(false)
  }
  const handleTenantChange = (e) => {
    setSelectedTenantId(e.target.value);
    setOpen(true)
  };

  return (
    <div>
      <h1>Tenant Dashboard</h1>
      <select onChange={handleTenantChange} value={selectedTenantId}>
        {Object.keys(tenants).map((tenantId) => (
          <option key={tenantId} value={tenantId}>
            {tenants[tenantId].name}
          </option>
        ))}
      </select>
      <TenantInfo open={open}  onClose={() => handleClose} tenantId={selectedTenantId} />
    </div>
  );
}

export default TenantDashboard;
