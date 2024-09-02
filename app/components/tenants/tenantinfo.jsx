import React from "react";
import { useSelector } from "react-redux";
import { Paper, Box } from "@mui/material";
import styles from '@/app/components/tenants/tenant.module.css'

export default function TenantInfo(props) {
    const tenant = useSelector((state) => state.tenants.tenantList[props.tenantId])

    if (!tenant) {
        return <p>Tenant not found.</p>;
      }
  return (
    <>
      <Box className={props.className} hidden={props.hidden}>
        <Paper>
          <div>
            <h2>Tenant Information</h2>
            <p>
              <strong>Name:</strong> {tenant.name}
            </p>
            <p>
              <strong>Email:</strong> {tenant.email}
            </p>
            <p>
              <strong>Phone:</strong> {tenant.phone}
            </p>
            <p>
              <strong>Unit</strong> {`${tenant.unit}`}
            </p>
            <p>
              <strong>Ledger Balance:</strong> {`${tenant.ledgerBalance}`}
            </p>
            <p>
              <strong>Lease Start Date:</strong> {`${tenant.leaseStartDate}`}
            </p>
            <p>
              <strong>Lease End Date:</strong> {`${tenant.leaseEndDate}`}
            </p>
            <p>
              <strong>Employer</strong> {`${tenant.employer}`}
            </p>
            <p>
              <strong>Driver License Number:</strong> {`${tenant.DL}`}
            </p>

            <h3>Transactions</h3>
            <ul>
              {tenant.transactions.length > 0 ? (
                tenant.transactions.map((transaction) => (
                  <li key={transaction.id}>
                    {transaction.description}: ${transaction.amount}
                  </li>
                ))
              ) : (
                <li>No transactions found.</li>
              )}
            </ul>
          </div>
        </Paper>
      </Box>
    </>
  );
}
