import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../../../lib/features/ledger/ledgerSlice';
import { useState } from 'react';
import ReusableForm from '../basic/form/ReusableForm';

function AddTransactionForm() {
  const dispatch = useDispatch();
  const tenants = useSelector((state) => state.ledger.tenants);
  const [selectedTenantId, setSelectedTenantId] = useState(Object.keys(tenants)[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      description: e.target.description.value,
      amount: parseFloat(e.target.amount.value),
    };
    dispatch(addTransaction({ tenantId: selectedTenantId, transaction }));
  };

  return (
    <ReusableForm onSubmit={handleSubmit}>
      <select onChange={(e) => setSelectedTenantId(e.target.value)} value={selectedTenantId}>
        {Object.keys(tenants).map((tenantId) => (
          <option key={tenantId} value={tenantId}>
            {tenantId}
          </option>
        ))}
      </select>
      <input name="description" placeholder="Description" required />
      <input name="amount" type="number" placeholder="Amount" required />
      <button type="submit">Add Transaction</button>
    </ReusableForm>
  );
}

export default AddTransactionForm;
