'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPayment } from '../../../lib/features/payments/paymentsSlice';

const AddPaymentForm = ({ leaseId }) => {
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [lease_id, setLease_Id] = useState(leaseId.lease_id)
  const dispatch = useDispatch();


  console.log(lease_id)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = {
      lease_id:lease_id,
      amount: parseFloat(amount),
      paymentDate,
    };
    // Dispatch addPayment action
    dispatch(postPayment(newPayment));

    // Optionally: Make API call to save payment in the backend
  

    // Reset form
    setAmount('');
    setPaymentDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Payment Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={paymentDate}
        onChange={(e) => setPaymentDate(e.target.value)}
        required
      />
      <button type="submit">Record Payment</button>
    </form>
  );
};

export default AddPaymentForm;
