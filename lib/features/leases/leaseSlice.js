import { STATUS } from '@/lib/utils';
import {  createAsyncThunk } from '@reduxjs/toolkit';
import { createAppSlice } from '@/lib/createAppSlice';
import axios from 'axios';



const initialState = {
  leases: [],
  status: STATUS['IDLE'], 
  error: null, 
}


const leaseSlice = createAppSlice({
  name: 'leases',
  initialState: initialState,
  reducers: (create) =>({
    addLease:create.asyncThunk(
      async(data, thunkAPI) => {
        try{
          const response = await axios.post('/api/leases', data)
          return response.data
        }catch(err){
          console.log(err.response.data)
        }
      },{ 
        pending:(state) => {
          state.status = STATUS['LOADING']
        },
        rejected:(state, action) => {
          state.status = STATUS['FAILED']
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
        state.status = STATUS['SUCCESS']
        state.leases.push(action.payload)

      }, 
      settled: (state) => {
        state.status= STATUS['IDLE']
      }
    }),
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
      try{
    const response = await axios.get('/api/leases');
    return  response.data
      } catch(err){
        console.log(err.response.data)
      }
  }, 

  {  
    pending: (state) => {
      state.status = STATUS['LOADING']
    }, 
     rejected: (state, action) => {
      state.status = STATUS['FAILED']
      state.error = action.payload ?? action.error
     },
     fulfilled: (state, action) => {
      state.leases = action.payload
      state.status = STATUS['SUCCESS']
     }, 
     settled: (state, action) =>{
      state.status = STATUS['IDLE']
     }
  })
})
})


export const { addLease, removeLease, updateLease, fetchLeases } = leaseSlice.actions;
export default leaseSlice.reducer;
