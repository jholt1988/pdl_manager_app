import {createAppSlice} from '@/lib/createAppSlice';


import {STATUS} from '../../utils';
import { Pending } from '@mui/icons-material';

const initialState = {
    list:[], 
    selectedWorkOrder:{}, 
    status: STATUS[0],
    error:null
}


const workOrderSlice = createAppSlice({
  name: 'workOrders',
  initialState: initialState,
  reducers: (create) =>({
    addWorkOrder: (state, action) => {
      state.push(action.payload);
    },
    updateWorkOrderStatus: (state, action) => {
      const index = state.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state[index].status = action.payload.status;
      }
    },
     fetchWorkOrder: create.asyncThunk(
      async(thunkAPI) => {
        const response = await fetch('/api/workorders')
        return  (await response.json())
      }, 
      {
        pending: (state) => {
          state.status = STATUS[1]
        },
        error:(state, action) => {
          state.status = STATUS[3]
          state.error = action.payload ?? action.error
        }, 
        fulfilled: (state,action) => {
          state.status = STATUS[2]
          state.list.push(action.payload)
        }, 
        settled:(state) => {
          state.status = STATUS[0]
        }
      }
      
     )
  
  })
})

export const { addWorkOrder, updateWorkOrderStatus, fetchWorkOrder } = workOrderSlice.actions;
export default workOrderSlice.reducer;
