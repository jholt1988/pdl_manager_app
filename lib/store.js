import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist' 
import propertiesReducer from "./features/properties/propertiesSlice";
import tenantReducer from "./features/tenant/tenantSlice";
import workOrderReducer from "./features/repair_maint/repairSlice";
import leaseReducer from "@/lib/features/leases/leaseSlice";
import ledgerReducer from "@/lib/features/ledger/ledgerSlice";
import expenseReducer from "@/lib/features/expenses/expenseSlice";
import contractorReducer from "@/lib/features/contractors/contractorSlice";
import { api } from "@/lib/features/api/api";
import storage from '@/lib/features/storage/storage'

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer;
// Infer the `RootState` type from the root r
// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
const persistConfig ={
  key:'root',
  version: 1,
 storage,
  blacklist:["tracking", api.reducer]
  
}

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  properties: propertiesReducer,
  tenants: tenantReducer,
  workOrders: workOrderReducer,
  leases: leaseReducer,
  ledgers: ledgerReducer,
  expenses: expenseReducer,
  contractors: contractorReducer,
})

const persistedReducer =persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck:{
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
  }).concat(api.middleware),
  });
};

export let persistor = persistStore(makeStore())

// Infer the return type of `makeStore`

