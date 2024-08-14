import {createSlice} from '@reduxjs/toolkit';
import { makeEnum } from '../../utils';

const statusArr = ["IDLE", 'LOADING', 'SUCCESS', 'FAILED']

const STATUS = makeEnum(statusArr)

const initialState = {
    list: [], 
    status:STATUS.idle, 
    error:'', 
    selectedProperty:{}
}

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
        selectProperty(state, action){
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


export const {addProperty, removeProperty, selectProperty, editProperty} = propertiesSlice.actions

export default propertiesSlice.reducer