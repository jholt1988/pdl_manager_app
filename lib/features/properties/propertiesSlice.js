import {createSlice} from '@reduxjs/toolkit';
import { STATUS } from '../../utils';


const mockData = [
    {
      property_id: "1a2b3c4d",
      property_name: "Sunset Apartments",
      address: "123 Sunset Blvd, Los Angeles, CA 90028",
      property_type: "Residential",
      units: 24,
      status: "Available"
    },
    {
        property_id: "5e6f7g8h",
      property_name: "Downtown Office Tower",
      address: "456 Main St, San Francisco, CA 94105",
      property_type: "Commercial",
      units: 15,
      status: "Under Maintenance"
    },
    {
        property_id: "9i0j1k2l",
      property_name: "Lakeside Villas",
      address: "789 Lakeside Dr, Miami, FL 33101",
      property_type: "Residential",
      units: 10,
      status: "Fully Occupied"
    },
    {
        property_id: "3m4n5o6p",
      property_name: "Greenwood Shopping Center",
      address: "1010 Market St, Dallas, TX 75201",
      property_type: "Commercial",
      units: 20,
      status: "Available"
    },
    {
     property_id: "7q8r9s0t",
      property_name: "Oceanview Condos",
      address: "1212 Ocean Ave, Santa Monica, CA 90401",
      property_type: "Residential",
      units: 30,
      status: "Under Construction"
    }
  ]
  

const initialState = {
    list: mockData, 
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
            state.list = state.list.filter(property => property.property_id !== action.payload)
        },
        findProperty(state, action){
            state.selectedProperty = state.list.find(({property_id}) => property_id === action.payload)
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