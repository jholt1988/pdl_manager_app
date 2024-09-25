'use client'
import React,  { useState } from 'react';

import { useSelector } from 'react-redux';

function Ledger() {
  const tenants = useSelector((state) => state.ledgers.tenants);
  const [selectedTenantId, setSelectedTenantId] = useState(Object.keys(tenants)[0]);

  const handleTenantChange = (e) => {
    setSelectedTenantId(e.target.value);
  };

  const selectedTenantLedger = tenants[selectedTenantId] || { transactions: [], balance: 0 };

  return (
    <div>
      <h2>Tenant Ledger</h2>
      <select onChange={handleTenantChange} value={selectedTenantId}>
        {Object.keys(tenants).map((tenantId) => (
          <option key={tenantId} value={tenantId}>
            {tenantId}
          </option>
        ))}
      </select>

      <h3>Balance: ${selectedTenantLedger.balance}</h3>
      <ul>
        {selectedTenantLedger.transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ledger;
