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
        findTenant(state, action){
            state.selectedTenant = state.tenantList.find(({id}) => id == action.payload)
       
        }, 
        editTenant(state, action){
            for(let [key, value] of action.payload){
                state.selectedTenant = {[key]:value, ...state.selectedTenant}
            }
           
        }
        
    }, 
    selectors:{
      selectTenant: (state) => state.selectedTenant, 
      selectAllTenants: (state) => state.tenantList

    }
   
})

export const {addTenant, deleteTenant, findTenant, editTenant} = tenantSlice.actions


export const {selectTenant, selectAllTenants} = tenantSlice.selectors
export default tenantSlice.reducer