import {createSlice} from '@reduxjs/toolkit';

import {STATUS} from '../../utils';

const initialState = {
    list:[], 
    selectedWorkOrder:{}, 
    status: STATUS.idle,
    error:''
}


const workOrderSlice = createSlice({
  name: 'workOrders',
  initialState: [],
  reducers: {
    addWorkOrder: (state, action) => {
      state.push(action.payload);
    },
    updateWorkOrderStatus: (state, action) => {
      const index = state.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state[index].status = action.payload.status;
      }
    },
  },
});

export const { addWorkOrder, updateWorkOrderStatus } = workOrderSlice.actions;
export default workOrderSlice.reducer;
