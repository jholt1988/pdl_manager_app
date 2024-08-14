import type { Action, ThunkAction } from "@reduxjs/toolkit";
import  {configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import propertiesReducer from './features/properties/propertiesSlice'

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
      [quotesApiSlice.reducerPath]: quotesApiSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = AppStore
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
