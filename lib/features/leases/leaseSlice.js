import { createSlice } from '@reduxjs/toolkit';

const leaseSlice = createSlice({
  name: 'leases',
  initialState: [],
  reducers: {
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
  },
});

export const { addLease, removeLease, updateLease } = leaseSlice.actions;
export default leaseSlice.reducer;
