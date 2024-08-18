import {createSlice} from '@reduxjs/toolkit';
import {STATUS} from '../../utils';

const initialState = {
    ledgers:[], 
    selectedLedger:{}, 
    status: STATUS.IDLE, 
    error:" "


}
const  ledgerSlice = createSlice({

    name:'ledgers', 
    initialState, 
    reducers: {
        addLedger(state, action){
            state.ledgers.push(action.payload)
        }, 
        removeLedger(state, action){
            state.ledgers = state.ledgers.filter(entry => entry.id !== action.payload)

        }, 
        selectLedger(state, action){
            state.selectedLedger = state.ledgers.find(entry => entry.id === action.payload)
        },
        addLedgerEntry(state, action){
            state.selectedLedger.list.push(action.payload)
        }
    }
})


export const {addLedger, removeLedger, selectLedger, addLedgerEntry} = ledgerSlice.actions

export default ledgerSlice.reducer