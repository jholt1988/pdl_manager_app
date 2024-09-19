import {createSlice} from '@reduxjs/toolkit';
import { STATUS } from '../../utils';


const mockData = [
    {
      property_id: "1a2b3c4d",
      property_name: "Sunset Apartments",
      address: "123 Sunset Blvd, Los Angeles, CA 90028",
      property_type: "Residential",
      units: 24,
      status: "Available", 
      square_footage:5000
    },
    {
        property_id: "5e6f7g8h",
      property_name: "Downtown Office Tower",
      address: "456 Main St, San Francisco, CA 94105",
      property_type: "Commercial",
      units: 15,
      status: "Under Maintenance", 
      square_footage:11000
    },
    {
        property_id: "9i0j1k2l",
      property_name: "Lakeside Villas",
      address: "789 Lakeside Dr, Miami, FL 33101",
      property_type: "Residential",
      units: 10,
      status: "Fully Occupied",
      square_footage:8800
    },
    {
        property_id: "3m4n5o6p",
      property_name: "Greenwood Shopping Center",
      address: "1010 Market St, Dallas, TX 75201",
      property_type: "Commercial",
      units: 20,
      status: "Available",
      square_footage:15000

    },
    {
      property_id: "7q8r9s0t",
      property_name: "Oceanview Condos",
      address: "1212 Ocean Ave, Santa Monica, CA 90401",
      property_type: "Residential",
      units: 30,
      status: "Under Maintenance",
      square_footage:10000
    }
  ]
  

const initialState = {
    list: mockData, 
    status:STATUS.IDLE, 
    error:'', 
    selectedProperty:{}
}

console.log(STATUS.IDLE)

const propertySlice = createSlice({
  name: 'properties',
  initialState: mockData,
  reducers: {
    addProperty: (state, action) => {
      state.push(action.payload);
    },
    removeProperty: (state, action) => {
      return state.filter(property => property.id !== action.payload);
    },
    updateProperty: (state, action) => {
      const index = state.findIndex(property => property.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProperty, removeProperty, updateProperty } = propertySlice.actions;
export default propertySlice.reducer;
