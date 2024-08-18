import {createSlice} from '@reduxjs/toolkit';

import {STATUS} from '../../utils';

const initialState = {
    list:[], 
    selectedWorkOrder:{}, 
    status: STATUS.idle,
    error:''
}

const repairSlice = createSlice({
    name:'repair/maint', 
    initialState, 
    reducers:{
        addWorkOrder(state, action){
            state.selectedWorkOrder = action.payload
            state.list.push(state.selectedWorkOrder)
        }, 
        removeWorkOrder(state, action){
            state.list = state.list.filter(workOrder => workOrder.id !== action.payload)
        }, 
        selectWorkOrder(state, action){
            state.selectedWorkOrder = state.list.find(workOrder => workOrder.id === action.payload)
        },
        editWorkOrder(state, action){
            for(let [key, value] of action.payload){
                state.selectedWorkOrder = {[key]:value, ...state.selectedWorkOrder}
            }
        }
    }
})

export const {addWorkOrder, removeWorkOrder, editWorkOrder, selectWorkOrder} = repairSlice.actions

export default repairSlice.reducer