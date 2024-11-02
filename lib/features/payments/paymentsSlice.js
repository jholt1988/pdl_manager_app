import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '@/lib/utils';
import axios from 'axios';
// Fetch payments by leaseId
export const fetchPaymentsByLease = createAsyncThunk('payments/fetchPaymentsByLease', async (leaseId) => {
  const response = await axios.get(`/api/payments?leaseId=${leaseId}`);
  return response.json();
});

export const postPayment = createAsyncThunk('payments/postPayment', async (data) => {
  const response = await axios.post('/api/payments', data)
  return response.data()
})

const paymentSlice = createSlice({
  name: 'payments',
  initialState: {
    payments: [],
    status: STATUS.idle,
    error: null,
  },
  reducers: {
    addPayment: (state, action) => {
      state.payments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaymentsByLease.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(fetchPaymentsByLease.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.payments = action.payload;
      })
      .addCase(fetchPaymentsByLease.rejected, (state, action) => {
        state.status = STATUS.error;
        state.error = action.error.message;
      })
      .addCase(postPayment.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(postPayment.fulfilled, (state, action) => {
        state.status = STATUS.success
        state.payments.push(action.payload)
      })
      .addCase(postPayment.rejected, (state, action) => {
        state.status = STATUS.error
        state.error = ` ${action.error.message} : ${action.error.code}`
      })
      .addMatcher(postPayment.settled, (state) => {
        state.status = STATUS.idle
      })
      .addMatcher(fetchPaymentsByLease.settled, (state) =>{
        state.status= STATUS.idle;
      })
      
  },
});

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
