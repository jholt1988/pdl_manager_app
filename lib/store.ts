
import  {configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import propertiesReducer from './features/properties/propertiesSlice';
import tenantReducer from './features/tenant/tenantSlice';
import repairReducer from './features/repair_maint/repairSlice';
import leaseReducer from '@/lib/features/leases/leaseSlice';
import ledgerReducer from '@/lib/features/ledger/ledgerSlice'
import expenseReducer from '@/lib/features/expenses/expenseSlice'

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer;
// Infer the `RootState` type from the root r
// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: {
      properties: propertiesReducer,
      tenants: tenantReducer,
      repair: repairReducer,
      leases: leaseReducer,
      ledgers: ledgerReducer,
      expenseReducer: expenseReducer,
      counter: counterSlice.reducer,
      [quotesApiSlice.reducerPath]: quotesApiSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    
  });
};

// Infer the return type of `makeStore`


