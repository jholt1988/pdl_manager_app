import {createSlice} from  '@reduxjs/toolkit';
import {STATUS} from '../../utils';

const initialState = {
    lease: {} , 
    status:STATUS[1], 
    error:""
}

const leaseSlice = createSlice({
    name:'leases', 
    initialState, 
    reducers:{
        addLease(state, action){
            state.lease = action.payload
        }, 
        /** ADD REDUCER TO DELETE LEASE */
        /** ADD REDUCER TO SELECT LEASE */
        editLease(state, action){
            for(let [key, value] of action.payload){
                state.lease = {[key]:value, ...state.lease}
            }
        }
    }
})

export const {addLease, editLease} = leaseSlice.actions

export default leaseSlice.reducer