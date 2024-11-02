"use client";
import React from "react";
import { makeStore, } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query"
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";



export const StoreProvider = ({ children }) => {
  const storeRef = useRef();
  const persistorRef = useRef({})
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    persistorRef.current = persistStore(storeRef.current)
  }

  useEffect(() => {
     {
      
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}><PersistGate loading={null} persistor={persistorRef.current}>
{children}</PersistGate></Provider>}
