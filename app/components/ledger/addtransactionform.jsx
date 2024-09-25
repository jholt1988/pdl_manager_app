'use client'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../../../lib/features/ledger/ledgerSlice';

import ReusableForm from '../basic/form/ReusableForm';
import { Formik, Form, Field} from 'formik';

function AddTransactionForm(props) {
  const dispatch = useDispatch();
  const tenants = useSelector((state) => state.tenants);
  const [selectedTenantId, setSelectedTenantId] = useState(Object.keys(tenants)[0]);
  const [description, setDescription] =useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {

    const transaction = {
      id: Date.now(),
      description:description,
      amount: parseFloat(amount),
    };
    dispatch(addTransaction({ tenantId: selectedTenantId, transaction }));
  };

  return (
    <Formik
    initialValues={{description:"", amount: "", tenant:""}}
     onSubmit={handleSubmit}>
      {props => (
<Form onSubmit={props.handleSubmit}>
      <select name='tenant' onChange={(e) => setSelectedTenantId(e.target.value)} value={selectedTenantId}>
        {Object.keys(tenants).map((tenantId) => (
          <option key={tenantId} value={tenantId}>
            {tenantId}
          </option>
        ))}
      </select>
      <Field name="description" placeholder="Description"onChange={(e) => setDescription(e.target.value)} value={description} required />
      <Field name="amount" type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} value={amount} required />
      <button type="submit">Add Transaction</button>
      </Form>
      )
    }
    </Formik>
  );
}

export default AddTransactionForm;
