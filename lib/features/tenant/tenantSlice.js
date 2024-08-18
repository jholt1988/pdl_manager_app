import {createSlice} from '@reduxjs/toolkit';
import {STATUS} from '../../utils';


const initialState = {
    tenantList:[], 
    selectedTenant:{}, 
    status:STATUS.idle,
    error:""
}

const tenantSlice = createSlice({
    name:'tenants',
    initialState,
    reducers:{
        addTenant(state, action){
            state.selectedTenant = action.payload
            state.tenantList.push(state.selectedTenant)
        }, 
        deleteTenant(state, action){
            state.tenantList.filter(tenant => tenant.id !== action.payload)
        }, 
        selectTenant(state, action){
            state.selectedTenant = state.tenantList.find(tenant => tenant.id === action.payload)
        }, 
        editTenant(state, action){
            for(let [key, value] of action.payload){
                state.selectedTenant = {[key]:value, ...state.selectedTenant}
            }
           
        }
    }
})

export const {addTenant, deleteTenant, selectTenant, editTenant} = tenantSlice.reducer

export default tenantSlice.reducer