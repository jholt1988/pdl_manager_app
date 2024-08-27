import {createSlice} from '@reduxjs/toolkit';
import { STATUS } from '../../utils';




const initialState = {
    list: [], 
    status:STATUS.IDLE, 
    error:'', 
    selectedProperty:{}
}

console.log(STATUS.IDLE)

const  propertiesSlice = createSlice({
    name:'properties', 
    initialState, 
    reducers:{
        addProperty (state, action){
             state.list.push(action.payload)
        }, 
        removeProperty(state, action){
            state.list = state.list.filter(property => property.id !== action.payload)
        },
        findProperty(state, action){
            state.selectedProperty = state.list.find(property => property.id === action.payload)
        },
        editProperty(state, action){
            for(const [key, value] of action.payload){
                state.selectedProperty = {[key]: value, ...selectProperty}
            }
            state.list = [state.selectedProperty, ...state.list]
        }

    
        
    }
})


export const {addProperty, removeProperty, findProperty, editProperty} = propertiesSlice.actions

export const selectProperty = (state) => state.selectProperty

export default propertiesSlice.reducer