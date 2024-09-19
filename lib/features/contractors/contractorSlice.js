import {createSlice} from '@reduxjs/toolkit';

const contractorSlice = createSlice({
    name:'contractors', 
    initialState:[], 
    reducers:{
        addContractor:(state, action) => {
            state.push(action.payload)
        }, 
        removeContractor:(state, action) => {
            return state.filter(contractor => contractor.id !== action.payload.id)
        }, 
        updateContractor: (state, action) => {
            const index = state.findIndex(contractor => contractor.id === action.payload.id);
            if (index !== -1) {
              state[index] = action.payload;
            }
          },
    }

})

export const  {addContractor, removeContractor, updateContractor} = contractorSlice.actions

export default contractorSlice.reducer