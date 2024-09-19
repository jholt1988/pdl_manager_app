import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Box } from '@mui/material';

 export default function LeaseInfo(props) {
    const lease = useSelector((state) => state.leases.selectedLease)

    if (!lease) {
        return <p>Lease not found.</p>;
      }
  return (
    <>
      <Box className={props.className} hidden={props.hidden}>
        <Paper>
          <div>
            <h2>Lease Information</h2>
            <p>
              <strong>Lease Id:</strong> {`${lease.lease_id}`}
            </p>
            <p>
              <strong>Unit:</strong> {`${lease.lease_unit}`}
            </p>
            <p>
              <strong>Tenants:</strong> {`${lease.lease_tenants}`}
            </p>
            <p>
              <strong>Total Rent</strong> {`${lease.lease_total}`}
            </p>
            <p>
              <strong>Deposit:</strong> {`${lease.lease_deposit}`}
            </p>
            <p>
              <strong>Pet Deposit:</strong> {`${lease.lease_petDeposit}`}
            </p>
            <p>
              <strong>Utilities:</strong> {`${lease.lease_utilties}`}
            </p>
            <p>
              <strong>Start Date:</strong> {`${lease.start_date}`}
            </p> 
            <p>
              <strong>End Date:</strong> {`${lease.end_date}`}
            </p>
          </div>
        </Paper>
      </Box>
        </>
    )
}