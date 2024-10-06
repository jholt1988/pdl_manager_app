import { STATUS } from '@/lib/utils';
import {  createAsyncThunk } from '@reduxjs/toolkit';
import { createAppSlice } from '@/lib/createAppSlice';



const initialState = {
  leases: [],
  status: STATUS[0], 
  error: null, 
}


const leaseSlice = createAppSlice({
  name: 'leases',
  initialState: initialState,
  reducers: (create) =>({
    addLease: (state, action) => {
      state.push(action.payload);
    },
    removeLease: (state, action) => {
      return state.filter(lease => lease.id !== action.payload);
    },
    updateLease: (state, action) => {
      const index = state.findIndex(lease => lease.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  fetchLeases: create.asyncThunk(
    async (thunkAPI) => {
    const response = await fetch('/api/leases');
    return (await response.json()) ;
  }, 

  {  
    pending: (state) => {
      state.status = STATUS[1]
    }, 
     rejected: (state, action) => {
      state.status = STATUS[3]
      state.error = action.payload ?? action.error
     },
     fulfilled: (state, action) => {
      state.leases.push(action.payload)
      state.status = STATUS[2]
     }, 
     settled: (state, action) =>{
      state.status = STATUS[0]
     }
  })
})
})


export const { addLease, removeLease, updateLease, fetchLeases } = leaseSlice.actions;
export default leaseSlice.reducer;
