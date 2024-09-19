import {createSlice} from '@reduxjs/toolkit';
import {STATUS} from '../../utils';
const tenants = [
    {
      id:1, 
      name: "John Doe",
      phone: "555-123-4567",
      email: "john.doe@example.com",
      unit: "101",
      leaseStartDate: "2023-01-01",
      leaseEndDate: "2024-01-01",
      ledgerBalance: "$0.00",
      employer: "Acme Corp",
      transactions: []
    },
    {
      id:2,
      name: "Jane Smith",
      phone: "555-234-5678",
      email: "jane.smith@example.com",
      unit: "102",
      leaseStartDate: "2023-02-01",
      leaseEndDate: "2024-02-01",
      ledgerBalance: "$150.00",
      employer: "Globex Inc",
      transactions: []
    },
    {
      id:3,
      name: "Michael Brown",
      phone: "555-345-6789",
      email: "michael.brown@example.com",
      unit: "103",
      leaseStartDate: "2023-03-01",
      leaseEndDate: "2024-03-01",
      ledgerBalance: "-$50.00",
      employer: "Initech",
      transactions: []
    },
    {
      id:4,
      name: "Emily Johnson",
      phone: "555-456-7890",
      email: "emily.johnson@example.com",
      unit: "104",
      leaseStartDate: "2023-04-01",
      leaseEndDate: "2024-04-01",
      ledgerBalance: "$200.00",
      employer: "Umbrella Corp",
      transactions: []
    },
    {
      id:5,
      name: "David Wilson",
      phone: "555-567-8901",
      email: "david.wilson@example.com",
      unit: "105",
      leaseStartDate: "2023-05-01",
      leaseEndDate: "2024-05-01",
      ledgerBalance: "$0.00",
      employer: "Wayne Enterprises",
      transactions: []
    }
  ];
  

const initialState = {
    tenantList:tenants, 
    selectedTenant:{}, 
    status:STATUS[1],
    error:""
}

const tenantSlice = createSlice({
  name: 'tenants',
  initialState: tenants,
  reducers: {
    addTenant: (state, action) => {
      state.push(action.payload);
    },
    removeTenant: (state, action) => {
      return state.filter(tenant => tenant.id !== action.payload);
    },
    updateTenant: (state, action) => {
      const index = state.findIndex(tenant => tenant.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {addTenant, removeTenant, updateTenant} = tenantSlice.actions


export default tenantSlice.reducer