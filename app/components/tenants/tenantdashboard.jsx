import React, { useState } from 'react';
import TenantInfo from './tenantinfo';
import { useSelector,useDispatch } from 'react-redux';
import styles from './tenant.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import AddTenantForm from '@/app/components/tenants/addtenantform'
import { findTenant } from '@/lib/features/tenant/tenantSlice';

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
