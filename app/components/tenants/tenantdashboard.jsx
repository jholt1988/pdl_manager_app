import React from 'react';
import styles from './tenant.module.css'

function TenantDashboard() {
  
  return (
    <div className={styles.tenantContainer}>
      
      <h1>Tenant Dashboard</h1>
      <p>FIND, EDIT TENANT INFORMATION ON THIS PAGE</p>
      <p>THIS PAGE WILL HAVE INFORMATION LIKE DELIQUENT TENANTS, RECENT TENANT WORK ORDERS, RECENT TENANT PAYMENTS, ETC </p>
     
      
    </div>
  );
}

export default TenantDashboard;
