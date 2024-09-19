import React from 'react';
import styles from '@/app/components/lease/lease.module.css'

export default function LeaseDashboard (props) {
    return (
        <div className={styles.leaseContainter}>
            <div> Lease Dashboard -  </div>
            <p>THIS PAGE IS WHERE ALL THINGS LEASES WILL BE</p>
            <p>GET LEASE START/END DATES, UTILITIES, TOTAL RENT, TENANTS, REMAINING BALANCE, DEPOSITS</p>
        </div>
    )
}